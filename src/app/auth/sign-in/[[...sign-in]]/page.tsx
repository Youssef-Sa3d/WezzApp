"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    // <main className="flex flex-col justify-center items-center h-[calc(100vh-100px)] px-2">
    <main className="flex flex-col justify-center items-center h-[calc(100vh-100px)] px-6 pt-16 pb-6">
      <div className="w-full max-w-md flex flex-col gap-4">
        <SignIn
          path="/auth/sign-in"
          routing="path"
          signUpUrl="/auth/sign-up"
          redirectUrl="/dashboard"
        />
      </div>
    </main>
  );
}
