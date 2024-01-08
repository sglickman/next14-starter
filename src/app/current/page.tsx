import { Contest } from "@/lib/definitions";
import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

const getLatestContest = async () => {
  unstable_noStore();
  const res = await sql`
    SELECT * FROM contests ORDER BY id DESC LIMIT 1;
  `;
  if (res.rowCount < 1) {
    throw new Error("Contest not found");
  }
  return res.rows[0] as Contest;
};

const CurrentContest = async () => {
  const latestContest = await getLatestContest();

  redirect(`/contests/${latestContest.id}`);
};

export default CurrentContest;
