import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Logo + App Name */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-4xl">🦆</span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#6c47ff] tracking-tight">
          WezzApp
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-600 max-w-md text-base sm:text-lg">
        WezzApp is an experimental web app that lets users send anonymous
        messages directly to WhatsApp numbers — for fun, testing, or expression.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Try Now */}
        <Link
          href="/auth/sign-up"
          className="bg-[#6c47ff] text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#5538d1] transition"
        >
          Try Now
        </Link>

        {/* GitHub */}
        <a
          href="https://github.com/Youssef-Sa3d/WezzApp"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#6c47ff] text-[#6c47ff] px-6 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#f5f3ff] transition"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
