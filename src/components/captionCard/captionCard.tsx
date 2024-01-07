import Image from "next/image";
import styles from "./captionCard.module.css";
import {
  Contest,
  ContestMode,
  Caption,
  User,
  Workshop,
} from "@/lib/definitions";

import { caslon_italics } from "@/styles/fonts";

const CaptionCard = async ({
  contest,
  contestMode,
  caption,
  users,
  workshops,
}: {
  contest: Contest;
  contestMode: ContestMode;
  caption: Caption;
  users: User[];
  workshops: Workshop[];
}) => {
  const captionAuthor = users.find((user) => user.id === caption.author);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={contest.contest_image_url}
            alt={`Cartoon for caption {caption.caption}`}
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div
          className={`${styles.captionContainer} ${caslon_italics.className}`}
        >
          <p className={styles.caption}>{caption.caption}</p>
          {contestMode !== ContestMode.VOTING_ON_CAPTIONS && (
            <p className={styles.desc}>- {captionAuthor?.shortname}</p>
          )}
        </div>
        <div className={styles.workshopsContainer}>
          {workshops.map((workshop) => {
            const workshopAuthor = users.find(
              (user) => user.id === workshop.author
            );
            return (
              <div className={styles.workshop} key={workshop.id}>
                <p className={styles.workshopName}>{workshop.workshop}</p>
                {contestMode !== ContestMode.VOTING_ON_CAPTIONS && (
                  <p className={styles.workshopDesc}>
                    - {workshopAuthor?.shortname}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaptionCard;
