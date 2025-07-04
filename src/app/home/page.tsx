import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-8 min-h-screen">
      <div className="whatsapp-card rounded-2xl p-8 max-w-2xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🦆</span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#25d366] tracking-tight">
              WezzApp
            </h1>
          </div>
          
          <p className="text-primary max-w-xl text-lg sm:text-xl leading-relaxed">
            Send anonymous messages directly to WhatsApp numbers.
            <br />
            For fun, testing, or free expression.
          </p>
          
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 w-full max-w-md">
            <Link
              href="/auth/sign-up"
              className="whatsapp-button text-center"
            >
              Try Now
            </Link>
            <a
              href="https://github.com/Youssef-Sa3d/WezzApp"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#25d366] text-[#25d366] px-6 py-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#25d366] hover:text-white transition-all duration-200 shadow-md"
            >
              GitHub
            </a>
          </div>
          
          <div className="bg-[#dcf8c6] dark:bg-[#1a2e1a] rounded-xl p-6 w-full max-w-md border border-[#25d366]/20">
            <h3 className="font-semibold text-[#128c7e] mb-3 text-lg">Features</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span className="text-[#25d366] text-lg">✓</span>
                Built for fun, testing, and safe expression
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#25d366] text-lg">✓</span>
                Simple, clean, and privacy-focused
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#25d366] text-lg">✓</span>
                Open source & MIT licensed
              </li>
            </ul>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            By using WezzApp, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-[#25d366] font-medium">
              Terms & Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
} 