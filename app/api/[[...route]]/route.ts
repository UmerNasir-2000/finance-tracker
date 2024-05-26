import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", clerkMiddleware());
app.notFound((c) => c.json({ message: "Not Found" }, 404));

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
