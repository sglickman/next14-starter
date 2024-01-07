import styles from "./contest.module.css";
import {
  Contest,
  Caption,
  Workshop,
  ContestMode,
  User,
  TopSevenVote,
} from "@/lib/definitions";
import { format } from "date-fns/format";
import { Suspense } from "react";

import CaptionCard from "@/components/captionCard/captionCard";
import { sql } from "@vercel/postgres";
import ContestDetail from "@/components/contestDetail/page";
import { getContestMode } from "@/lib/contest-mode";
import CreateCaption from "@/components/createCaption/page";
import { unstable_noStore } from "next/cache";
// import { topSevenVotes } from "@/lib/initial-data";

const getContest = async (contestId: string) => {
  const id = parseInt(contestId);
  const res = await sql`
    SELECT * FROM contests WHERE id = ${id};
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
  const id = parseInt(contestId);
  const res = await sql`
    SELECT contest_captions.*, contests.id AS contest_id 
    FROM contest_captions 
      INNER JOIN contests 
      ON contest_captions.contest_id = contests.id 
    WHERE contest_id = ${id}
    ORDER BY contest_captions.id DESC;
  `;
  return res.rows as Caption[];
};

const getTopSevenVotes = async (contestId: string, userId: number) => {
  unstable_noStore();
  const contest_id = parseInt(contestId);
  const res = await sql`
    SELECT contest_top_seven_votes.*, contest_captions.contest_id AS contest_id
    FROM contest_top_seven_votes
      INNER JOIN contest_captions
      ON contest_top_seven_votes.caption_id = contest_captions.id
    WHERE voter = ${userId} AND contest_id = ${contest_id};
  `;
  console.log(res.rows);
  return res.rows as TopSevenVote[];
};

const getWorkshops = async (contestId: string) => {
  const id = parseInt(contestId);
  return [] as Workshop[];
};

const getContestData = async (id: string) => {
  // const { id } = params;
  const contest = await getContest(id);
  const users = await getUsers();
  const captions = await getCaptions(id);
  const workshops = await getWorkshops(id);
  const topSevenVotes = await getTopSevenVotes(id, 1);
  console.log(topSevenVotes);

  return {
    contest,
    users,
    captions,
    workshops,
    topSevenVotes,
  };
};

const SingleContest = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { contest, users, captions, workshops, topSevenVotes } =
    await getContestData(id);
  const contestMode = ContestMode.VOTING_ON_CAPTIONS || getContestMode(contest);
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
              "LLLL dd, yyyy, HH:mm"
            )} ET`}
          />
          {contestMode === ContestMode.VOTING_ON_CAPTIONS && (
            <ContestDetail
              title="My Votes"
              value={topSevenVotes.length.toString()}
              // .filter((vote) => vote.voter === 1)
              // .length.toString()}
            />
          )}
        </div>
        {contestMode === ContestMode.SUBMITTING_CAPTIONS && (
          <CreateCaption contest={contest} />
        )}
        <p className={styles.desc}></p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.captions}>
          {captions.map((caption) => (
            <div className={styles.caption} key={caption.id}>
              <CaptionCard
                contest={contest}
                contestMode={contestMode}
                caption={caption}
                users={users}
                workshops={workshops}
                topSevenVotes={topSevenVotes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleContest;
