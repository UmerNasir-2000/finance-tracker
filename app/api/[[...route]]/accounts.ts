import { db } from "@/db";
import { accounts } from "@/db/schema";
import { Hono } from "hono";

const app = new Hono().get("/", async (ctx) => {
  const records = await db
    .select({ id: accounts.id, name: accounts.name })
    .from(accounts);
  return ctx.json(records);
});

export default app;
