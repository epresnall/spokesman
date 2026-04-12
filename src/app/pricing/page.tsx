import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "The Spokesman Pricing — Simple. Transparent. Affordable.",
  alternates: { canonical: "/pricing" },
};

const standardTiers = [
  { name: "AcTOR+", description: "For video projects that require just video presenting and voiceovers. Send us the script and we'll send you the RAW footage." },
  { name: "Script+", description: "For video projects that require script-writing and presenting. We'll create the script and present it, your team will do the video editing." },
  { name: "Editor+", description: "For video projects that require presenting and editing. You send us the script, and we'll do the rest." },
  { name: "Producer+", description: "For video projects that require everything from start to finish." },
];

const subscriptionTiers = [
  { name: "The Advertiser", duration: "0-1 Min Videos", features: ["Unlimited Video Requests", "On-Location (Selfie) Filming", "Green Screen Filming", "Studio Filming", "Voiceover Recordings", "24-48 Hour Turnarounds", "5 Active Requests At One Time"] },
  { name: "The Explainer", duration: "0-1 Min Videos", features: ["Unlimited Video Requests", "Green Screen Filming", "Studio Filming", "Voiceover Recordings", "24-48 Hour Turnarounds", "5 Active Requests At One Time"] },
  { name: "The Educator", duration: "0-10 Min Videos", features: ["Unlimited Video Requests", "Green Screen Filming", "Studio Filming", "Voiceover Recordings", "24-48 Hour Turnarounds", "5 Active Requests At One Time"] },
  { name: "The Thought-Leader", duration: "0-20 Min Videos", features: ["Unlimited Video Requests", "Green Screen Filming", "Studio Filming", "Voiceover Recordings", "24-48 Hour Turnarounds", "5 Active Requests At One Time"] },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black">The Spokesman Pricing</h1>
          <p className="text-lg text-[var(--color-muted)] mt-4">Simple. Transparent. Affordable.</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">Trusted by Over 200+ Partners Worldwide</p>
        </div>
      </section>

      {/* Standard Pricing */}
      <section className="bg-[var(--color-bg-alt)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Standard Pricing (One-Off Projects)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardTiers.map((tier) => (
              <div key={tier.name} className="card text-center">
                <h3 className="font-bold text-lg text-[var(--color-green)] mb-3">{tier.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{tier.description}</p>
                <Link href="/book-a-call" className="btn-primary text-sm mt-6 w-full text-center">Get a Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Subscription Pricing (Ongoing Projects)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionTiers.map((tier) => (
              <div key={tier.name} className="card">
                <h3 className="font-bold text-lg text-[var(--color-green)] mb-1">{tier.name}</h3>
                <p className="text-xs text-[var(--color-muted)] mb-4">{tier.duration}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                      <span className="text-[var(--color-green)]">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/book-a-call" className="btn-primary text-sm w-full text-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="text-[var(--color-muted)] mt-4">Book a call to discuss your project and get a custom quote.</p>
          <Link href="/book-a-call" className="btn-primary mt-6">Book a Call</Link>
        </div>
      </section>
    </>
  );
}
