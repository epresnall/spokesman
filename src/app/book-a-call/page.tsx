import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a call to discuss your video content needs with The Spokesman.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[var(--color-green)] to-[var(--color-yellow)] bg-clip-text text-transparent">
          Book a Call
        </h1>
        <p className="text-lg text-[var(--color-muted)] mt-6 max-w-xl mx-auto">
          Schedule a time to discuss your video content needs and explore how we can
          help scale your brand through authentic video communication.
        </p>
        {/* Calendly embed placeholder */}
        <div className="mt-10 card max-w-xl mx-auto min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-[var(--color-muted)] mb-4">
              Calendly booking widget will load here.
            </p>
            <a
              href="https://calendly.com/tvec/the-spokesman-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open Scheduling Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
