"use client";

import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";


const githubLink = {
  href: "https://github.com/Youssef-Sa3d/WezzApp",
  label: "GitHub",
  external: true,
};

const authLinks = [
  { href: "/auth/sign-up", label: "Sign Up" },
  { href: "/auth/sign-in", label: "Sign In" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false); // Close menu when clicked

  return (
    <header className="w-full whatsapp-gradient py-4 px-6 fixed top-0 z-20 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/home"
          className="flex items-center gap-3 font-bold text-white tracking-tight hover:opacity-90 transition"
          onClick={handleLinkClick}
        >
          {/* <span className="text-3xl"></span> */}
          <Image
            src="/wezzlogo.png"
            alt="WezzApp Logo"
            width={45}
            height={45}
            className="rounded-full"
            unoptimized
          />
          <span className="text-xl sm:text-2xl">WezzApp</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-white items-center">
          <a
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition px-3 py-2 rounded-lg hover:bg-white/10"
          >
            {githubLink.label}
          </a>

          <SignedOut>
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-80 transition px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </SignedOut>

          <ThemeToggle />
          <SignedIn>
            <Link
              href="/dashboard"
              className="hover:opacity-80 transition px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/home" />
          </SignedIn>
        </nav>

        {/* Mobile Controls (Toggle + Theme + User) */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/home" />
          </SignedIn>
          <button
            className="p-2 text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 mt-3 px-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <a
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-white/20 transition py-3 px-4 rounded-lg"
            onClick={handleLinkClick}
          >
            {githubLink.label}
          </a>
          <SignedOut>
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:bg-white/20 transition py-3 px-4 rounded-lg"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-white hover:bg-white/20 transition py-3 px-4 rounded-lg"
              onClick={handleLinkClick}
            >
              Dashboard
            </Link>
          </SignedIn>
        </nav>
      )}
    </header>
  );
}
