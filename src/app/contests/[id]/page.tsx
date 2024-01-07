import styles from "./contest.module.css";
import {
  Contest,
  Caption,
  Workshop,
  ContestMode,
  User,
} from "@/lib/definitions";
import { Suspense } from "react";

import CaptionCard from "@/components/captionCard/captionCard";
import { sql } from "@vercel/postgres";

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
  const id = parseInt(contestId);
  const res = await sql`
    SELECT contest_captions.*, contests.id AS contest_id 
    FROM contest_captions 
      INNER JOIN contests 
      ON contest_captions.contest_id = contests.id 
    WHERE contest_id = ${id};
  `;
  return res.rows as Caption[];
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

  return {
    contest,
    users,
    captions,
    workshops,
  };
};

const SingleContest = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { contest, users, captions, workshops } = await getContestData(id);
  console.log(captions);
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}></h1>
        <p className={styles.desc}></p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.captions}>
          {captions.map((caption) => (
            <div className={styles.caption} key={caption.id}>
              <CaptionCard
                contest={contest}
                contestMode={ContestMode.SUBMITTING}
                caption={caption}
                users={users}
                workshops={workshops}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleContest;
