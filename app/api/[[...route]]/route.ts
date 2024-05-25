import { clerkMiddleware } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const schema = z.object({
  name: z.string().min(5),
});

app.use("*", clerkMiddleware());
app.notFound((c) => c.json({ message: "Not Found" }, 404));

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.get("/hello/:name", zValidator("param", schema), (c) => {
  const name = c.req.param("name");
  return c.json({
    message: "Hello Next.js!",
    name,
  });
});

export const GET = handle(app);
export const POST = handle(app);
