import { Contest, ContestMode } from "./definitions";

export const getContestMode = (contest: Contest) => {
  // return ContestMode.WORKSHOPPING;
  const now = new Date();
  if (now > contest.final_contest_deadline) {
    return ContestMode.CLOSED;
  }
  const first_deadline = contest.first_deadline;
  if (now < first_deadline) {
    return ContestMode.SUBMITTING_CAPTIONS;
  }
  const voting_deadline = contest.voting_deadline;
  // voting_deadline.setDate(voting_deadline.getDate() + 1);
  if (now < voting_deadline) {
    return ContestMode.VOTING_ON_CAPTIONS;
  }

  const workshopping_deadline = voting_deadline;
  workshopping_deadline.setDate(workshopping_deadline.getDate() + 1);
  if (now < workshopping_deadline) {
    return ContestMode.WORKSHOPPING;
  }
  return ContestMode.SUBMITTING;
}