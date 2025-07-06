// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: ["/dashboard(.*)"], // Protect all routes under /dashboard
};