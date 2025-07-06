"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TryNowButton() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleTryNow = async () => {
    setIsLoading(true);
    
    if (isLoaded) {
      if (isSignedIn) {
        // User is authenticated, navigate to dashboard
        router.push("/dashboard");
      } else {
        // User is not authenticated, navigate to sign-in
        router.push("/auth/sign-in");
      }
    }
    
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleTryNow}
      disabled={!isLoaded || isLoading}
      className="whatsapp-button text-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Loading..." : "Try Now"}
    </button>
  );
} 