export type User = {
  id: number;
  shortname: string;
  name: string;
  created_at?: Date;
};

export type Email = {
  id: number;
  user_id: number;
  email: string;
};

export type Contest = {
  id: number;
  contest_number: string;
  contest_name: string;
  contest_image_url: string;
  final_contest_deadline: Date;
  first_deadline: Date;
};

export type Caption = {
  id: number;
  author: number;
  contest_id: number;
  caption: string;
  note?: string;
  created_at: Date;
};

export type TopSevenVote = {
  id: number;
  voter: number;
  caption_id: number;
  created_at: Date;
};

export type CaptionVoteCount = {
  caption_id: number;
  vote_count: number;
}

export type Workshop = {
  id: number;
  author: number;
  caption_id: number;
  workshop: string;
  note?: string;
  created_at: Date;
};

export const enum ContestMode {
  SUBMITTING_CAPTIONS = "Open For Captions",
  VOTING_ON_CAPTIONS = "Caption Voting",
  WORKSHOPPING = "Caption Workshopping",
  SUBMITTING = "Final Submission",
  CLOSED = "Closed",
}
