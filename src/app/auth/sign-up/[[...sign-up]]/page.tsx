"use client";

import { SignUp } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex flex-col justify-center items-center h-screen px-2">
      <div className="w-full max-w-md  p-6 flex flex-col  mt-[15%] gap-4">
        {!accepted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              if (accepted) {
              }
            }}
            className="flex flex-col gap-3 whatsapp-card rounded-2xl p-8 max-w-2xl mx-auto w-full"
          >
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="accent-[#25d366]"
              />
              I agree to the{" "}
              <Link href="/terms" className="underline text-[#25d366]">
                Terms & Policy
              </Link>
            </label>
            {submitted && !accepted && (
              <span className="text-xs text-red-500 mt-1">
                You must accept the terms to create an account.
              </span>
            )}
            <button
              type="submit"
              className="mt-2 bg-[#25d366] text-white font-medium px-4 py-2 rounded"
            >
              Continue
            </button>
          </form>
        ) : (
          <SignUp
            path="/auth/sign-up"
            routing="path"
              signInUrl="/auth/sign-in"
              
            
          />
        )}
      </div>
    </main>
  );
}
