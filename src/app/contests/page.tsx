import styles from "./contests.module.css";
import ContestCard from "@/components/contestCard/contestCard";
import { sql } from "@vercel/postgres";
import { Contest } from "@/lib/definitions";

const getContests = async () => {
  const res = await sql`
    SELECT * FROM contests ORDER BY contest_number DESC;
  `;
  return res.rows as Contest[];
};

const Contests = async () => {
  const contests = await getContests();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>All Contests</h1>
      </div>
      <div className={styles.contests}>
        {contests.map((contest) => (
          <div className={styles.contest} key={contest.id}>
            <ContestCard contest={contest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;
