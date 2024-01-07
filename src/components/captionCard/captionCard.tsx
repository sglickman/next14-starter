"use client";

import Image from "next/image";
import styles from "./captionCard.module.css";
import {
  Contest,
  ContestMode,
  Caption,
  User,
  Workshop,
  TopSevenVote,
} from "@/lib/definitions";

import { caslon_italics } from "@/styles/fonts";
import { addVote, removeVote } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CaptionCard = async ({
  contest,
  contestMode,
  caption,
  users,
  workshops,
  topSevenVotes,
}: {
  contest: Contest;
  contestMode: ContestMode;
  caption: Caption;
  users: User[];
  workshops: Workshop[];
  topSevenVotes: TopSevenVote[];
}) => {
  // const myVotes = topSevenVotes.filter((vote) => vote.voter === 1);
  // console.log(myVotes);
  const pendingStateChanges: number[] = [];
  const captionAuthor = users.find((user) => user.id === caption.author);
  const currentuser = { id: 1 };
  const handleCaptionClick = async (id: number) => {
    if (pendingStateChanges.indexOf(id, 0) > -1) {
      console.log("Waiting for server response.");
      return;
    }
    pendingStateChanges.push(id);
    if (topSevenVotes.find((vote) => vote.caption_id === id)) {
      try {
        await removeVote(caption.id, currentuser.id, contest.id);
      } catch (error) {
        throw error;
      }
    } else {
      try {
        await addVote(caption.id, currentuser.id, contest.id);
      } catch (error) {
        throw error;
      }
    }
    const itemIndex = pendingStateChanges.indexOf(id, 0);
    pendingStateChanges.splice(itemIndex, 1);
  };
  return (
    <div
      className={`
        ${styles.container}
        ${
          contestMode === ContestMode.VOTING_ON_CAPTIONS &&
          styles.votingContainer
        }
        ${
          contestMode === ContestMode.VOTING_ON_CAPTIONS &&
          topSevenVotes.find((vote) => vote.caption_id === caption.id) &&
          styles.selectedVotingContainer
        }`}
      onClick={handleCaptionClick.bind(null, caption.id)}
    >
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
            <p className={styles.desc}>
              {caption.note && `[NOTE: ${caption.note}] `}-{" "}
              {captionAuthor?.shortname}
            </p>
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
