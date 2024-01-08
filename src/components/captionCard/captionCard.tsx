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
  CaptionVoteCount,
} from "@/lib/definitions";

import { caslon_italics } from "@/styles/fonts";
import { addVote, removeVote } from "@/lib/actions";
import { Session } from "next-auth";

const CaptionCard = ({
  session,
  contest,
  contestMode,
  caption,
  users,
  workshops,
  topSevenVotes,
  topCaptionVoteCounts,
}: {
  session: Session | null;
  contest: Contest;
  contestMode: ContestMode;
  caption: Caption;
  users: User[];
  workshops: Workshop[];
  topSevenVotes: TopSevenVote[];
  topCaptionVoteCounts: CaptionVoteCount[];
}) => {
  const captionAuthor = users.find((user) => user.id === caption.author);
  const currentuser = { id: parseInt(session?.user?.id || "0") };
  const handleCaptionClick = async (id: number) => {
    if (contestMode !== ContestMode.VOTING_ON_CAPTIONS) {
      return;
    }
    if (topSevenVotes.find((vote) => vote.caption_id === id)) {
      await removeVote(caption.id, currentuser.id, contest.id);
    } else {
      await addVote(caption.id, currentuser.id, contest.id);
    }
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
      onClick={
        contestMode === ContestMode.VOTING_ON_CAPTIONS
          ? handleCaptionClick.bind(null, caption.id)
          : undefined
      }
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
          {contestMode === ContestMode.SUBMITTING_CAPTIONS && (
            <p className={styles.desc}>
              {caption.note && `[NOTE: ${caption.note}] `}-{" "}
              {captionAuthor?.shortname}
            </p>
          )}
          {(contestMode === ContestMode.WORKSHOPPING ||
            contestMode == ContestMode.CLOSED ||
            contestMode === ContestMode.SUBMITTING) && (
            <p className={styles.desc}>
              {caption.note && `[NOTE: ${caption.note}] `}-{" "}
              {captionAuthor?.shortname}
              {" ("}
              {
                topCaptionVoteCounts.find(
                  (voteCount) => voteCount.caption_id === caption.id
                )?.vote_count
              }
              {")"}
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
