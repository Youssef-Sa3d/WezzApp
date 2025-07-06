"use client";

import { SignUp } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [canShowForm, setCanShowForm] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (accepted) {
      setCanShowForm(true);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-6 pt-16 pb-12">
      <div className="w-full max-w-md mt-[10%] flex flex-col gap-4">
        {!canShowForm ? (
          <form
            onSubmit={handleContinue}
            className="flex flex-col gap-4 whatsapp-card rounded-2xl p-8"
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
              <span className="text-xs text-red-500">
                You must accept the terms to continue.
              </span>
            )}

            <button
              type="submit"
              className="bg-[#25d366] text-white font-medium px-4 py-2 rounded hover:bg-[#20ba5a] transition"
            >
              Continue
            </button>
          </form>
        ) : (
          <SignUp
            path="/auth/sign-up"
            routing="path"
            signInUrl="/auth/sign-in"
            redirectUrl="/dashboard"
          />
        )}
      </div>
    </main>
  );
}
