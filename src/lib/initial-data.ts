import { Contest, Caption, Email, User, Workshop, TopSevenVote } from "./definitions";

export const contests: Contest[] = [
  // {
  //   id: -1,
  //   contest_number: "-1",
  //   contest_image_url: "/comics/878.jpg",
  //   contest_name: "Stockings",
  //   final_contest_deadline: new Date("2023-12-31 23:59:00-05"),
  //   first_deadline: new Date("2023-12-27 20:00:00-05"),
  // },
  // {
  //   id: 0,
  //   contest_number: "0",
  //   contest_image_url: "/comics/879.jpg",
  //   contest_name: "Heavenly Skiier",
  //   final_contest_deadline: new Date("2023-12-31 23:59:00-05"),
  //   first_deadline: new Date("2023-12-27 20:00:00-05"),
  // },
  {
    id: 1,
    contest_number: "1",
    contest_image_url: "/comics/01-07-2024__240101_a28302_880.jpg",
    contest_name: "Big Clock",
    image_height: 0,
    final_contest_deadline: new Date("2024-01-07 23:59:00-05"),
    first_deadline: new Date("2024-01-03 20:00:00-05"),
    voting_deadline: new Date("2024-01-04 12:00:00-05")
  },
];

export const users: User[] = [
  {
    id: 1,
    shortname: "Seth",
    name: "Seth Glickman",
  },
  {
    id: 2,
    shortname: "Skye",
    name: "Skye Lawrence",
  },
  {
    id: 3,
    shortname: "Moses",
    name: "Moses Glickman",
  },
  {
    id: 4,
    shortname: "Kostya",
    name: "Kostya Tatarinov",
  },
  {
    id: 5,
    shortname: "Jimmy",
    name: "Jim Lawrence",
  },
  {
    id: 6,
    shortname: "Elaine",
    name: "Elaine Glickman",
  },
  {
    id: 7,
    shortname: "Collin",
    name: "Collin Edward",
  },
  {
    id: 8,
    shortname: "Dee",
    name: "Dee Lawrence",
  },
  {
    id: 9,
    shortname: "Mindy",
    name: "Mindy Glickman",
  },
  {
    id: 10,
    shortname: "Natalia",
    name: "Natalia Kastenberg",
  },
  {
    id: 11,
    shortname: "Jill",
    name: "Jill Lawrence",
  },
  {
    id: 12,
    shortname: "Richard",
    name: "Richard Lawrence",
  },
  {
    id: 13,
    shortname: "David",
    name: "David Glickman",
  },
  {
    id: 14,
    shortname: "Jeff",
    name: "Jeff Glickman",
  },
  {
    id: 15,
    shortname: "Allison",
    name: "Allison Glickman",
  },
  {
    id: 16,
    shortname: "Bronte",
    name: "Bronte Kastenberg",
  },
  {
    id: 17,
    shortname: "Blake",
    name: "Blake Glickman",
  },
  {
    id: 18,
    shortname: "Kate",
    name: "Kate Lawrence",
  },
  {
    id: 19,
    shortname: "Jon",
    name: "Jon Chia",
  },
];

export const emails: Email[] = [
  {
    id: 1,
    user_id: 1,
    email: "seth.glickman@gmail.com",
  },
  {
    id: 2,
    user_id: 1,
    email: "cybertaur1@gmail.com",
  },
  {
    id: 3,
    user_id: 2,
    email: "skye.o.lawrence@gmail.com",
  },
  {
    id: 4,
    user_id: 3,
    email: "mosesaglickman@gmail.com",
  },
  {
    id: 5,
    user_id: 4,
    email: "ktatarinov@live.com",
  },
  {
    id: 6,
    user_id: 5,
    email: "jim.lawrence.mti@gmail.com",
  },
  {
    id: 7,
    user_id: 6,
    email: "elaine-glickman@comcast.net",
  },
  {
    id: 8,
    user_id: 7,
    email: "cdedward@gmail.com",
  },
  {
    id: 9,
    user_id: 8,
    email: "dlawrence@cooleffect.org",
  },
  {
    id: 10,
    user_id: 9,
    email: "dearmindela@gmail.com",
  },
  {
    id: 11,
    user_id: 10,
    email: "natalia.kastenberg@gmail.com",
  },
  {
    id: 12,
    user_id: 11,
    email: "jilllaw@me.com",
  },
  {
    id: 13,
    user_id: 12,
    email: "richard@lawrencefamily.me",
  },
  {
    id: 14,
    user_id: 13,
    email: "david@ultra.me",
  },
  {
    id: 15,
    user_id: 14,
    email: "turntothewonderful@gmail.com",
  },
  {
    id: 16,
    user_id: 15,
    email: "allisonhee@gmail.com",
  },
  {
    id: 17,
    user_id: 16,
    email: "bkastenberg@gmail.com",
  },
  {
    id: 18,
    user_id: 17,
    email: "blake.j.lawrence1@gmail.com",
  },
];

export const captions: Caption[] = [
  {
    id: 1,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "a little worried this caption is too obvious",
    caption: `"Sometimes an enormous clock is just an enormous clock."`,
    author: 1,
  },
  {
    id: 2,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"I know you worry about the time you have left, it may be better if you find a shrink that doesn't have their office in a giant clock tower"`,
    author: 2,
  },
  {
    id: 3,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    author: 17,
    caption: `"Don't worry, I'm counting down too."`,
  },
  {
    id: 4,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    author: 1,
    caption: `"Does each tick really "rattle you at the cellular level, totally disrupting any chance of coherent thought and ultimately producing lasting Havana-Syndrome-like symptoms," or are you just using this as an excuse to avoid talking about your feelings?"`,
  },
  {
    id: 5,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    author: 17,
    caption: `"Hey doc I think you are sending the wrong message if you keep your eyes on the clock the whole time."`,
  },
  {
    id: 6,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    author: 5,
    caption: `"Just think How excited your grandkids will be when you turn into ice cream at 6!"`,
  },
  {
    id: 7,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"I feel like my life is passing by too quickly."`,
    author: 16,
  },
  {
    id: 8,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"Last week you said checking my watch was distracting, so I'm not sure what you want from me here."`,
    author: 3,
  },
  {
    id: 9,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"Got it from Aladdin. Apparently he misspoke."`,
    author: 3,
  },
  {
    id: 10,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"I feel like I will never hit the big time"`,
    author: 13,
  },
  {
    id: 11,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"It belonged to my mentor, a pioneer in the field of Flavorflavian Analysis"`,
    author: 1,
  },
  {
    id: 12,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"Are you sure this is why your wife left you?"`,
    author: 4,
  },
  {
    id: 13,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"This week's session was supposed to be on why your wife left you - but I think I misheard."`,
    author: 18,
  },
  {
    id: 14,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    note: "",
    caption: `"We have 10 minutes for you to discuss why your wife left you."`,
    author: 8,
  },
  {
    id: 15,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"It's about time!"`,
    author: 9,
  },
  {
    id: 16,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I messed up big time."`,
    author: 9,
  },
  {
    id: 17,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I want to be clear - it's an hourly rate."`,
    author: 18,
  },
  {
    id: 18,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I was told I need to see a big time psychiatrist."`,
    author: 4,
  },
  {
    id: 19,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I've been told I'm a big time psychiatrist."`,
    author: 4,
  },
  {
    id: 20,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I thought it might help you put things in perspective"`,
    author: 2,
  },
  {
    id: 21,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"You're early again"`,
    author: 2,
  },
  {
    id: 22,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"Now that you bring it up, yes, I can see that I am clearly compensating for something -- but this isn't about me"`,
    author: 1,
  },
  {
    id: 23,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"That's Herman. He thinks he's a clock."`,
    author: 14,
  },
  {
    id: 24,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"We needed something to cover the bullet holes."`,
    author: 14,
  },
  {
    id: 25,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I just don't understand this TikTok thing"`,
    author: 19,
  },
  {
    id: 26,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I know it's two minutes slow. I just figure that into my sessions."`,
    author: 11,
  },
  {
    id: 27,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"Unfortunately, that's our Time."`,
    author: 3,
  },
  {
    id: 28,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"My concierge service includes headphones for when the clock chimes."`,
    author: 11,
  },
  {
    id: 29,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"And that's why I am so sensitive to being called a “Shrink.”"`,
    author: 13,
  },
  {
    id: 30,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I am flattered, but my website clearly says Big Time Therapy, not Big-Time. Hyphens are important Mr Fox-Hunter."`,
    author: 13,
  },
  {
    id: 31,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I schedule all my narcissist patients at 6:30"`,
    author: 14,
  },
  {
    id: 32,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I know, but it's a remarkably cheap sublet from the Hickory Dickory Dock company."`,
    author: 14,
  },
  {
    id: 33,
    contest_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
    caption: `"I think the genie misheard me about what I wanted in my next husband."`,
    author: 14,
  }
];

export const topSevenVotes: TopSevenVote[] = [
  {
    id: 1,
    voter: 1,
    caption_id: 4,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 2,
    voter: 1,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 3,
    voter: 1,
    caption_id: 11,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 4,
    voter: 1,
    caption_id: 19,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 5,
    voter: 1,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 6,
    voter: 1,
    caption_id: 30,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 7,
    voter: 4,
    caption_id: 11,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 8,
    voter: 4,
    caption_id: 13,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 9,
    voter: 4,
    caption_id: 17,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 10,
    voter: 4,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 11,
    voter: 4,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 12,
    voter: 4,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 13,
    voter: 4,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 14,
    voter: 2,
    caption_id: 4,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 15,
    voter: 2,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 16,
    voter: 2,
    caption_id: 18,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 17,
    voter: 2,
    caption_id: 19,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 18,
    voter: 2,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 19,
    voter: 2,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 20,
    voter: 2,
    caption_id: 30,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 21,
    voter: 5,
    caption_id: 3,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 22,
    voter: 5,
    caption_id: 5,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 23,
    voter: 5,
    caption_id: 6,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 24,
    voter: 5,
    caption_id: 17,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 25,
    voter: 5,
    caption_id: 20,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 26,
    voter: 5,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 27,
    voter: 5,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 28,
    voter: 6,
    caption_id: 4,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 29,
    voter: 6,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 30,
    voter: 6,
    caption_id: 14,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 31,
    voter: 6,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 32,
    voter: 6,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 33,
    voter: 6,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 34,
    voter: 6,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 35,
    voter: 7,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 36,
    voter: 7,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 37,
    voter: 8,
    caption_id: 3,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 38,
    voter: 8,
    caption_id: 5,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 39,
    voter: 8,
    caption_id: 18,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 40,
    voter: 8,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 41,
    voter: 8,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 42,
    voter: 8,
    caption_id: 26,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 43,
    voter: 3,
    caption_id: 4,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 44,
    voter: 3,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 45,
    voter: 3,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 46,
    voter: 3,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 47,
    voter: 3,
    caption_id: 29,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 48,
    voter: 3,
    caption_id: 31,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 49,
    voter: 9,
    caption_id: 15,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 50,
    voter: 9,
    caption_id: 16,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 51,
    voter: 9,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 52,
    voter: 9,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 53,
    voter: 9,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 54,
    voter: 10,
    caption_id: 15,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 55,
    voter: 10,
    caption_id: 16,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 56,
    voter: 10,
    caption_id: 20,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 57,
    voter: 10,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 58,
    voter: 10,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 59,
    voter: 11,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 60,
    voter: 11,
    caption_id: 17,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 61,
    voter: 11,
    caption_id: 21,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 62,
    voter: 11,
    caption_id: 24,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 63,
    voter: 11,
    caption_id: 28,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 64,
    voter: 11,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 65,
    voter: 12,
    caption_id: 17,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 66,
    voter: 12,
    caption_id: 19,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 67,
    voter: 12,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 68,
    voter: 12,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 69,
    voter: 12,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 70,
    voter: 12,
    caption_id: 29,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 71,
    voter: 12,
    caption_id: 30,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 72,
    voter: 13,
    caption_id: 24,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 73,
    voter: 13,
    caption_id: 31,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 74,
    voter: 13,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 75,
    voter: 14,
    caption_id: 9,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 76,
    voter: 14,
    caption_id: 20,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 77,
    voter: 14,
    caption_id: 23,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 78,
    voter: 14,
    caption_id: 24,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 79,
    voter: 14,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 80,
    voter: 14,
    caption_id: 29,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 81,
    voter: 14,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 82,
    voter: 15,
    caption_id: 11,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 83,
    voter: 15,
    caption_id: 16,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 84,
    voter: 15,
    caption_id: 20,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 85,
    voter: 15,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 86,
    voter: 15,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 87,
    voter: 15,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 88,
    voter: 15,
    caption_id: 1,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 89,
    voter: 16,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 90,
    voter: 16,
    caption_id: 18,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 91,
    voter: 16,
    caption_id: 19,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 92,
    voter: 16,
    caption_id: 20,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 93,
    voter: 16,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 94,
    voter: 16,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 95,
    voter: 16,
    caption_id: 27,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 96,
    voter: 16,
    caption_id: 31,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 97,
    voter: 17,
    caption_id: 3,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 98,
    voter: 17,
    caption_id: 5,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 99,
    voter: 17,
    caption_id: 8,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 100,
    voter: 17,
    caption_id: 19,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 101,
    voter: 17,
    caption_id: 22,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 102,
    voter: 17,
    caption_id: 25,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
  {
    id: 103,
    voter: 17,
    caption_id: 26,
    created_at: new Date("2021-01-01 00:00:00-05"),
  },
]

export const workshops: Workshop[] = [];
