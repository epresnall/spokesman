"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/video-samples", label: "Video Samples" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Banner */}
      <div className="bg-[var(--color-green)] text-white text-center text-sm py-2 px-4">
        Currently seeking 2 more partnerships for 2025 —{" "}
        <a
          href="https://calendly.com/tvec/the-spokesman-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Become a Partner
        </a>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/The-Spokesman-Logo_FINAL-2-green.png"
            alt="The Spokesman"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-green)] ${
                pathname === link.href
                  ? "text-[var(--color-green)]"
                  : "text-[var(--color-dark)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book-a-call" className="btn-primary text-sm">
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-800 transition-transform mb-1.5 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-transform mt-1.5 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-call"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm mt-2 w-full text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
