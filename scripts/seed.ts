import { db } from "@vercel/postgres";

import {
  contests,
  captions,
  workshops,
  users,
  topSevenVotes,
  emails,
} from "../src/lib/initial-data";

async function seedContests(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;
    // Create the "contests" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contests (
        id SERIAL PRIMARY KEY,
        contest_number VARCHAR(255),
        contest_image_url VARCHAR(255),
        final_contest_deadline TIMESTAMPTZ,
        contest_name VARCHAR(255),
        first_deadline TIMESTAMPTZ
    );
    `;

    console.log("Created 'contests' table.");

    // Insert data into the "contests" table.
    const insertedContests = await Promise.all(
      contests.map(async (contest: any) => {
        return client.sql`
          INSERT INTO contests (
            id,
            contest_number,
            contest_image_url,
            final_contest_deadline,
            contest_name,
            first_deadline
          ) VALUES (
            ${contest.id},
            ${contest.contest_number},
            ${contest.contest_image_url},
            ${contest.final_contest_deadline},
            ${contest.contest_name},
            ${contest.first_deadline}
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedContests.length} contests.`);

    return {
      createTable,
      contests: insertedContests,
    };
  } catch (error) {
    console.log("Error seeding contests: ", error);
    throw error;
  }
}

async function seedUsers(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    // Create the "contest_users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contest_users (
        id SERIAL PRIMARY KEY,
        shortname VARCHAR(255),
        name VARCHAR(255)
      );
    `;

    console.log("Created 'contest_users' table.");

    // Insert data into the "contest_users" table.
    const insertedUsers = await Promise.all(
      users.map(async (user: any) => {
        return client.sql`
          INSERT INTO contest_users (
            id,
            shortname,
            name
          ) VALUES (
            ${user.id},
            ${user.shortname},
            ${user.name}
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users.`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.log("Error seeding users: ", error);
    throw error;
  }
}

async function seedEmails(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    // Create the "contest_emails" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contest_emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        user_id INTEGER
      );
    `;

    console.log("Created 'contest_emails' table.");

    // Insert data into the "contest_emails" table.
    const insertedEmails = await Promise.all(
      emails.map(async (email: any) => {
        return client.sql`
          INSERT INTO contest_emails (
            id,
            email,
            user_id
          ) VALUES (
            ${email.id},
            ${email.email},
            ${email.user_id}
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
  } catch (error) {
    console.log("Error seeding emails: ", error);
    throw error;
  }
}

async function seedCaptions(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    // Create the table "contest_captions" if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contest_captions (
        id SERIAL PRIMARY KEY,
        contest_id INTEGER,
        created_at TIMESTAMPTZ,
        note VARCHAR(255),
        caption VARCHAR(255),
        author INTEGER
      );
    `;

    console.log("Created 'contest_captions' table.");

    // Insert data into the "contest_captions" table.
    const insertedCaptions = await Promise.all(
      captions.map(async (caption: any) => {
        return client.sql`
          INSERT INTO contest_captions (
            id,
            contest_id,
            created_at,
            note,
            caption,
            author
          ) VALUES (
            ${caption.id},
            ${caption.contest_id},
            ${caption.created_at},
            ${caption.note || ""},
            ${caption.caption},
            ${caption.author}
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedCaptions.length} captions.`);
  } catch (error) {
    console.log("Error seeding captions: ", error);
    throw error;
  }
}

async function seedWorkshops(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    // Create the table "contest_workshops" if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contest_workshops (
        id SERIAL PRIMARY KEY,
        author INTEGER,
        caption_id INTEGER,
        workshop VARCHAR(255),
        note VARCHAR(255),
        created_at TIMESTAMPTZ
      );
    `;

    console.log("Created 'contest_workshops' table.");

    // Insert data into the "contest_workshops" table.
    const insertedWorkshops = await Promise.all(
      workshops.map(async (workshop: any) => {
        return client.sql`
          INSERT INTO contest_workshops (
            id,
            author,
            caption_id,
            workshop,
            note,
            created_at
          ) VALUES (
            ${workshop.id},
            ${workshop.author},
            ${workshop.caption_id},
            ${workshop.workshop},
            ${workshop.note || ""},
            ${workshop.created_at},
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
  
    console.log(`Seeded ${insertedWorkshops.length} workshops.`);
  } catch (error) {
    console.log("Error seeding workshops: ", error);
    throw error;
  }
}

async function seedTopSevenVotes(client: any) {
  try {
    await client.sql`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    `;

    // Create the table "contest_top_seven_votes" if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS contest_top_seven_votes (
        id SERIAL PRIMARY KEY,
        voter INTEGER,
        caption_id INTEGER,
        created_at TIMESTAMPTZ
      );
    `;

    console.log("Created 'contest_top_seven_votes' table.");

    // Insert data into the "contest_top_seven_votes" table.
    const insertedTopSevenVotes = await Promise.all(
      topSevenVotes.map(async (topSevenVote: any) => {
        return client.sql`
          INSERT INTO contest_top_seven_votes (
            id,
            voter,
            caption_id,
            created_at
          ) VALUES (
            ${topSevenVote.id},
            ${topSevenVote.voter},
            ${topSevenVote.caption_id},
            ${topSevenVote.created_at}
          ) ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedTopSevenVotes.length} top seven votes.`);
  } catch (error) {
    console.log("Error seeding top seven votes: ", error);
    throw error;
  }
}

async function seedSubmissions(client: any) {}

async function main() {
  const client = await db.connect();
  await seedContests(client);
  await seedUsers(client);
  await seedCaptions(client);
  await seedWorkshops(client);
  await seedTopSevenVotes(client);
  await seedSubmissions(client);

  await client.release();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database: ",
    err
  );
});
