import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Image
              src="/images/the-spokesman2.svg"
              alt="The Spokesman"
              width={140}
              height={35}
              className="h-7 w-auto"
            />
            <p className="text-xs text-[var(--color-muted)] mt-2">
              A Global Experience Co.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-[var(--color-green)]">
              Home
            </Link>
            <a
              href="https://cal.com/videorep/the-spokesman-partnership-call"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-green)]"
            >
              Book a Call
            </a>
            <Link href="/terms" className="hover:text-[var(--color-green)]">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[var(--color-green)]">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-xs text-[var(--color-muted)]">
          Copyright &copy; {new Date().getFullYear()} The Global Experience Co. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
