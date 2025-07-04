import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 px-6  backdrop-blur text-xs  flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto">
      <div className="flex gap-4 text-primary flex-wrap items-center">
        <Link
          href="/terms"
          className="hover:text-[#25d366] underline transition"
        >
          Terms & Policy
        </Link>
        <Link
          href="/license"
          className="hover:text-[#25d366] underline transition"
        >
          License
        </Link>
        <Link
          href="/disclaimer"
          className="hover:text-[#25d366] underline transition"
        >
          Disclaimer
        </Link>
      </div>
      <div className="mt-2 sm:mt-0">
        &copy; {new Date().getFullYear()} WezzApp. All rights reserved.
      </div>
    </footer>
  );
} 