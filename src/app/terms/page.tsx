import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black mb-8">Terms &amp; Conditions</h1>
        <div className="text-[var(--color-muted)] space-y-4 leading-relaxed">
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          <p>All content on this website is the property of The Global Experience Co. and is protected by copyright law.</p>
          <p>For questions, contact <a href="mailto:eric@ericpresnall.com" className="text-[var(--color-green)] hover:underline">eric@ericpresnall.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
