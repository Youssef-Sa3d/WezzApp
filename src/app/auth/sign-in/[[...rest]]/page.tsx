"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" />
    </main>
  );
}
