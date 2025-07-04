"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh-100px)] px-2">
      <div className="w-full max-w-md p-6 flex flex-col gap-4">
        <SignIn
          path="/auth/sign-in"
          routing="path"
          signUpUrl="/auth/sign-up"
          appearance={{
            variables: {
              colorBackground: "white",
              colorText: "black",
              // colorText: "#25d366",
              
            },
          }}
        />
      </div>
    </main>
  );
}
