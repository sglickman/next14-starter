import Image from "next/image";
import styles from "./contestCard.module.css";
import Link from "next/link";
import { format } from "date-fns";
import { Contest } from "@/lib/definitions";

const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <div className={styles.container}>
      <Link href={`/contests/${contest.id}`}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image
              src={contest.contest_image_url}
              alt={`Cartoon for contest {contest.contest_name}`}
              fill
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>
            Contest {contest.contest_number}: {contest.contest_name}
          </h1>
          <p className={styles.desc}>
            Deadline:{" "}
            {format(contest.final_contest_deadline, "LLLL dd, yyyy, HH:mm")} ET
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ContestCard;
