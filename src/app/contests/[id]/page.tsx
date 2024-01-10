import styles from "./contest.module.css";
import {
  Contest,
  Caption,
  Workshop,
  ContestMode,
  User,
  TopSevenVote,
  CaptionVoteCount,
} from "@/lib/definitions";
import { format } from "date-fns-tz";

import CaptionCard from "@/components/captionCard/captionCard";
import { sql } from "@vercel/postgres";
import ContestDetail from "@/components/contestDetail/page";
import { getContestMode } from "@/lib/contest-mode";
import CreateCaption from "@/components/createCaption/page";
import { auth } from "@/lib/auth";
// import { topSevenVotes } from "@/lib/initial-data";

const getContest = async (contestId: string) => {
  const res = await sql`
    SELECT * FROM contests WHERE id = ${parseInt(contestId)};
  `;
  if (res.rowCount < 1) {
    throw new Error("Contest not found");
  }
  return res.rows[0] as Contest;
};

const getUsers = async () => {
  const res = await sql`
    SELECT * FROM contest_users;
  `;
  return res.rows as User[];
};

const getCaptions = async (contestId: string) => {
  // unstable_noStore();
  const res = await sql`
    SELECT contest_captions.*, contests.id AS contest_id 
    FROM contest_captions 
      INNER JOIN contests 
      ON contest_captions.contest_id = contests.id 
    WHERE contest_id = ${parseInt(contestId)}
    ORDER BY contest_captions.id DESC;
  `;
  return res.rows as Caption[];
};

const getTopSevenVotes = async (contestId: string) => {
  const res = await sql`
    SELECT contest_top_seven_votes.*, contest_captions.contest_id AS contest_id
    FROM contest_top_seven_votes
      INNER JOIN contest_captions
      ON contest_top_seven_votes.caption_id = contest_captions.id
    WHERE contest_id = ${parseInt(contestId)};
  `;
  return res.rows as TopSevenVote[];
};

const getCaptionVoteCounts = async (contestId: string) => {
  const res = await sql`
    SELECT COUNT(*) AS vote_count, contest_top_seven_votes.caption_id
    FROM contest_top_seven_votes
    INNER JOIN contest_captions
      ON contest_top_seven_votes.caption_id = contest_captions.id
    WHERE contest_id = ${parseInt(contestId)}
    GROUP BY caption_id
    ORDER BY vote_count DESC;
  `;
  return res.rows as CaptionVoteCount[];
};

const getWorkshops = async (contestId: string) => {
  return [] as Workshop[];
};

const getContestData = async (id: string) => {
  const session = await auth();
  const userId = session?.user?.id || "0";
  // const { id } = params;
  const contest = await getContest(id);
  console.log("contest", contest);
  const users = await getUsers();
  const captions = await getCaptions(id);
  const workshops = await getWorkshops(id);
  const allTopSevenVotes = await getTopSevenVotes(id);
  const topSevenVotes = allTopSevenVotes.filter( (vote) => vote.voter === parseInt(userId));
  const captionVoteCounts = await getCaptionVoteCounts(id);

  return {
    contest,
    users,
    captions,
    workshops,
    allTopSevenVotes,
    topSevenVotes,
    captionVoteCounts,
  };
};

const getTopCaptionVoteCounts = (
  captionVoteCounts: CaptionVoteCount[],
  limit: number
) => {
  const top: CaptionVoteCount[] = [];
  console.log(captionVoteCounts);
  if (captionVoteCounts.length < 1) {
    return top;
  }
  let lastCount = captionVoteCounts[0]?.vote_count || 0;
  for (let i = 0; i < captionVoteCounts.length; i++) {
    if (top.length < limit || lastCount === captionVoteCounts[i]?.vote_count) {
      top.push(captionVoteCounts[i]);
      lastCount = captionVoteCounts[i]?.vote_count;
    } else {
      break;
    }
  }
  return top;
};

const SingleContest = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const {
    contest,
    users,
    captions,
    workshops,
    allTopSevenVotes,
    topSevenVotes,
    captionVoteCounts,
  } = await getContestData(id);
  const session = await auth();
  const topCaptionVoteCounts = getTopCaptionVoteCounts(captionVoteCounts, 7);
  const topCaptions = captions.filter((caption) =>
    topCaptionVoteCounts.find((vote) => vote.caption_id === caption.id)
  );
  topCaptions.sort((a, b) => {
    const aVoteCount = topCaptionVoteCounts.find(
      (vote) => vote.caption_id === a.id
    )?.vote_count;
    const bVoteCount = topCaptionVoteCounts.find(
      (vote) => vote.caption_id === b.id
    )?.vote_count;
    if (aVoteCount && bVoteCount) {
      return bVoteCount - aVoteCount;
    }
    return 0;
  });
  const contestMode = // (ContestMode.VOTING_ON_CAPTIONS ||
    getContestMode(contest);
    // ) as ContestMode;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          Round {contest.contest_number}: {contest.contest_name}
        </h1>
        <div className={styles.detailsContainer}>
          <ContestDetail title="Entries" value={captions.length.toString()} />
          <ContestDetail title="Status" value={contestMode} />
          <ContestDetail
            title="Final Deadline"
            value={`${format(
              contest.final_contest_deadline,
              "LLLL dd, yyyy, HH:mm",
              { timeZone: "America/New_York" }
            )} ET`}
          />
          {contestMode === ContestMode.VOTING_ON_CAPTIONS && (
            <ContestDetail
              title="My Votes"
              value={topSevenVotes.length.toString()}
            />
          )}
          {(contestMode === ContestMode.WORKSHOPPING || contestMode === ContestMode.SUBMITTING || contestMode === ContestMode.CLOSED) && (
            <ContestDetail
              title="Votes"
              value={allTopSevenVotes.length.toString()}
              />
          )
          }
        </div>
        {contestMode === ContestMode.SUBMITTING_CAPTIONS && (
          <CreateCaption contest={contest} session={session} />
        )}
        <p className={styles.desc}></p>
      </div>
      <div className={styles.bottom}>
        {(contestMode === ContestMode.WORKSHOPPING ||
          contestMode === ContestMode.SUBMITTING ||
          contestMode === ContestMode.CLOSED) && (
          <div className={styles.topCaptionsContainer}>
            <h2 className={styles.title}>Top Captions</h2>
            <div className={styles.captions}>
              {topCaptions.map((caption) => (
                <div className={styles.caption} key={caption.id}>
                  <CaptionCard
                    session={session}
                    contest={contest}
                    contestMode={contestMode}
                    caption={caption}
                    users={users}
                    workshops={workshops}
                    topSevenVotes={topSevenVotes}
                    topCaptionVoteCounts={topCaptionVoteCounts}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.captionsContainer}>
          <h2 className={styles.title}>All Captions</h2>
          <div className={styles.captions}>
            {captions.map((caption) => (
              <div className={styles.caption} key={caption.id}>
                <CaptionCard
                  session={session}
                  contest={contest}
                  contestMode={contestMode}
                  caption={caption}
                  users={users}
                  workshops={workshops}
                  topSevenVotes={topSevenVotes}
                  topCaptionVoteCounts={topCaptionVoteCounts}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContest;
