import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="text-[var(--color-muted)] space-y-4 leading-relaxed">
          <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
          <p>We collect information you provide directly, such as when you fill out a contact form or book a call. This information is used solely to respond to your inquiry.</p>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties.</p>
          <p>For questions, contact <a href="mailto:eric@ericpresnall.com" className="text-[var(--color-green)] hover:underline">eric@ericpresnall.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
