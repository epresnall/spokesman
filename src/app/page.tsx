import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Spokesman | Creative Video Director",
  description:
    "Building market authority through authentic video communication that scales your brand globally.",
  alternates: { canonical: "/" },
};

const challenges = [
  {
    title: "Content Burnout",
    text: "Being the face of your brand means constant pressure to create. When you don't feel like filming, your content strategy stalls. The relentless demand for consistency becomes exhausting, turning what should be strategic growth into a personal burden.",
  },
  {
    title: "Growth Bottleneck",
    text: "Your expertise and insights are valuable, but being the only spokesperson creates a bottleneck. Your business growth becomes constrained by your personal capacity to appear on camera, leading to missed opportunities and slower market expansion.",
  },
  {
    title: "Exit Risk",
    text: "Having your face as the only brand representative makes your business less sellable. Potential buyers see risk in a personality-dependent brand, and stepping back becomes nearly impossible without losing your content momentum.",
  },
];

const contentTypes = [
  {
    title: "Blog to Vlog Content",
    points: ["Build authority", "Establish thought leadership", "Create engaging long-form content", "Optimize for search and discovery"],
    href: "/blog-to-vlog",
  },
  {
    title: "Social Media Ads",
    points: ["Drive social engagement", "Increase platform awareness", "Capture attention quickly", "Maintain consistent messaging"],
    href: "/social-media-ads",
  },
  {
    title: "E-learning / Training Videos",
    points: ["Transform user adoption", "Reduce churn rates", "Decrease support tickets", "Enhance customer experience"],
    href: "#",
  },
  {
    title: "Industry Thought Leadership",
    points: ["Share your vision effectively", "Strengthen industry leadership", "Build thought leadership", "Engage with industry leaders"],
    href: "#",
  },
  {
    title: "Conversion-Focused Ads",
    points: ["Convert viewers into active users", "Drive campaign performance", "Create compelling ads", "Test and optimize content"],
    href: "#",
  },
  {
    title: "Custom Solutions",
    points: ["Tailored content strategies", "Unique market approaches", "Specialized content types", "Adaptive solutions"],
    href: "#",
  },
];

const roadmap = [
  { phase: "Discovery", items: ["Get to know each other", "Share your goals and vision", "Explore how we can help", "Review partnership details"] },
  { phase: "Foundation", items: ["Protect your market position", "Define our work together", "Set clear success goals", "Create content plan"] },
  { phase: "Acceleration", items: ["Begin strategic planning", "Start creating content", "Track our success", "Scale your impact"] },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Building market authority through{" "}
              <span className="text-[var(--color-green)]">
                authentic video communication
              </span>{" "}
              that scales your brand globally
            </h1>
            <p className="text-lg text-[var(--color-muted)] mt-6 max-w-2xl mx-auto">
              Maximize your video presence effortlessly with The Spokesman. Save
              time, build influence, and make a lasting impact — no camera needed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/book-a-call" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/video-samples" className="btn-outline">
                View Samples
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              Based on 210 reviews
            </p>
          </div>
        </div>
      </section>

      {/* Social proof stat */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-5xl md:text-6xl font-black text-[var(--color-green)]">
            542%
          </p>
          <p className="text-lg text-[var(--color-muted)] mt-2">
            Subscriber Growth in 90 Days
          </p>
          <blockquote className="mt-6 text-lg italic text-[var(--color-muted)] max-w-xl mx-auto">
            &ldquo;It&apos;s been more of a partnership than actual business.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold mt-2">
            Heigo Protten, Strategic Partnership Manager
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center max-w-2xl mx-auto">
            CEO&apos;s and marketing teams of scaling businesses face 3 critical
            challenges:
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {challenges.map((c) => (
              <div key={c.title} className="card">
                <h3 className="font-bold text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content types */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Content Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((ct) => (
              <div key={ct.title} className="card">
                <h3 className="font-bold text-lg mb-4">{ct.title}</h3>
                <ul className="space-y-2">
                  {ct.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                    >
                      <span className="text-[var(--color-green)] mt-0.5">
                        &#10003;
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                {ct.href !== "#" && (
                  <Link
                    href={ct.href}
                    className="inline-block mt-4 text-sm font-semibold text-[var(--color-green)] hover:underline"
                  >
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eric quote */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-xl md:text-2xl italic text-[var(--color-dark)] leading-relaxed">
            &ldquo;By the end of our initial partnership year, when we&apos;ve
            established your brand as an authentic voice in your category and
            achieved our shared goals, I want you to be so satisfied that you
            don&apos;t even think about recommending my services... because
            we&apos;re already planning our next strategic initiative
            together.&rdquo;
          </blockquote>
          <p className="mt-4 font-bold text-[var(--color-green)]">— Eric Presnall</p>
        </div>
      </section>

      {/* Exclusive partnership */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            Exclusive Partnership Model
          </h2>
          <p className="text-lg text-[var(--color-muted)] mt-6 max-w-2xl mx-auto">
            We are seeking to only work with one company of each type. For
            example, if you&apos;re a booking platform, we won&apos;t work with
            any other booking platforms during our partnership.
          </p>
        </div>
      </section>

      {/* Partnership roadmap */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Partnership Roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((r, i) => (
              <div key={r.phase} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-green)] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-4">{r.phase}</h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  {r.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/book-a-call" className="btn-primary">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
