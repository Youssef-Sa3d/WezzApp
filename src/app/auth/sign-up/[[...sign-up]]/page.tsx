"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-6 pt-20 sm:pt-0 pb-12">
      <div className="w-full max-w-md mt-[8%] flex flex-col gap-4">
        <SignUp
          path="/auth/sign-up"
          routing="path"
          signInUrl="/auth/sign-in"
          redirectUrl="/dashboard"
        />
      </div>
    </main>
  );
}
