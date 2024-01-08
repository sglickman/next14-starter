"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Caption, TopSevenVote } from "./definitions";
import { auth, signOut } from "./auth";

const CaptionSchema = z.object({
  id: z.number(),
  contest_id: z.coerce.number().gt(0, { message: "Invalid contest id." }),
  created_at: z.date(),
  note: z.string().optional(),
  author: z.coerce.number().gt(0, { message: "Invalid author id." }),
  caption: z.string({
    invalid_type_error: "Please enter a caption.",
  }),
});

const CreateCaptionSchema = CaptionSchema.omit({ id: true, created_at: true });

// This is temporary
export type State = {
  captionText?: string;
  noteText?: string;
  errors?: {
    caption?: string[];
    note?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function createCaption(
  prevState: State | undefined,
  formData: FormData
) {
  console.log(formData);
  // Validate form data
  const validatedFields = CreateCaptionSchema.safeParse({
    caption: formData.get("captionText"),
    contest_id: formData.get("contest_id"),
    author: formData.get("author_id"),
    note: formData.get("noteText"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    console.log("Failed to validate fields:", errors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create caption.",
    };
  }

  // Prepare data for insertion into DB
  const { author, caption, contest_id, note } = validatedFields.data;
  const created_at = new Date();

  // return {};

  // Insert data into database
  try {
    console.log("inserting into db.");
    const res = await sql`
      INSERT INTO contest_captions (id, caption, contest_id, author, note, created_at)
      VALUES (DEFAULT, ${caption}, ${contest_id}, ${author}, ${note}, ${created_at.toISOString()})
    `;
    console.log("Successfully created caption.");
  } catch (error) {
    console.log("Error creating caption: ", error);
    throw error;
  }

  // Revalidate the cache for the contest page and redirect the user.
  revalidatePath(`/contests/${contest_id}`);
  return {
    message: "Successfully created caption.",
    success: true,
  } as State;
  // redirect(`/contests`);
}

export async function removeVote(
  captionId: number,
  userId: number,
  contestId: number
) {
  console.log("Removing vote", captionId, userId);
  try {
    await sql`
      DELETE FROM contest_top_seven_votes
      WHERE caption_id = ${captionId} AND voter = ${userId}
    `;
    revalidatePath(`/contests/${contestId}`);
    console.log("Successfully removed vote.");
  } catch (error) {
    console.log("Error removing vote: ", error);
    throw error;
  }
}

export async function addVote(
  captionId: number,
  userId: number,
  contestId: number
) {
  try {
    const res = await sql`
      INSERT INTO contest_top_seven_votes (id, voter, caption_id, created_at)
      VALUES (DEFAULT, ${userId}, ${captionId}, ${new Date().toISOString()})
      ON CONFLICT (voter, caption_id) DO NOTHING
    `;
    revalidatePath(`/contests/${contestId}`);
    console.log("Successfully added vote.");
  } catch (error) {
    console.log("Error adding vote: ", error);
    throw error;
  }
}

export async function handleLogout() {
  await signOut();
}

export async function getSession() {
  return await auth();
}
