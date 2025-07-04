"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/auth/sign-up", label: "Sign Up" },
  { href: "/auth/sign-in", label: "Sign In" },
  { href: "https://github.com/Youssef-Sa3d/WezzApp", label: "GitHub", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full whatsapp-gradient py-4 px-6 fixed top-0 z-20 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/home" className="flex items-center gap-3 font-bold text-white tracking-tight hover:opacity-90 transition">
          <span className="text-3xl">🦆</span>
          <span className="text-xl sm:text-2xl">WezzApp</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white items-center">
          {navLinks.map(link =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition px-3 py-2 rounded-lg hover:bg-white/10">{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:opacity-80 transition px-3 py-2 rounded-lg hover:bg-white/10">{link.label}</Link>
            )
          )}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-white" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 mt-3 px-2 bg-white/10 rounded-lg backdrop-blur-sm">
          {navLinks.map(link =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:bg-white/20 transition py-3 px-4 rounded-lg">{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href} className="text-white hover:bg-white/20 transition py-3 px-4 rounded-lg">{link.label}</Link>
            )
          )}
        </nav>
      )}
    </header>
  );
} 