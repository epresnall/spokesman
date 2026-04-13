import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Video Samples",
  description: "Stand out with on-brand video content. Our end-to-end solution makes high-quality video creation a breeze.",
  alternates: { canonical: "/video-samples" },
};

const categories = ["All", "Explainers", "Social Media Ads", "E-learning", "Vlogs", "News & Updates", "App Promos", "Platform Demos", "Support & Training", "Funnels", "Voiceovers"];

const pillars = [
  { title: "Streamlined Production", subtitle: "Say Goodbye to the 'Production Headache'", text: "We translate your game-changing ideas into memorable, high-quality videos you're proud to share. You won't have to worry about scripting, shooting, editing or even tracking down talent. We've got you covered!" },
  { title: "Customized Content", subtitle: "Stay Front-Of-Mind... And Leave Them Wanting More!", text: "Need social videos? Or longer YouTube content? We'll help you cut through the online noise and connect with your audience on a 'human' level with custom branded content." },
  { title: "Budget Friendly", subtitle: "Maximize Your Reach (And Your Bottom Line)", text: "We're here to help propel your business forward! Through our collaboration, you'll establish authority with a powerful web presence and reach more of your ideal customers online... without breaking the bank." },
];

export default function VideoSamplesPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black">Our Video Samples</h1>
          <p className="text-lg text-[var(--color-muted)] mt-4 max-w-2xl mx-auto">Stand Out With On-Brand Video Content. Our end-to-end solution makes high-quality video creation a breeze.</p>
        </div>
      </section>

      <section className="bg-[var(--color-bg-alt)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm font-semibold text-[var(--color-green)] mb-3">{p.subtitle}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 text-sm font-medium rounded-full border border-gray-200 hover:border-[var(--color-green)] hover:text-[var(--color-green)] transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)]">
            Video gallery coming soon. <Link href="/book-a-call" className="text-[var(--color-green)] font-semibold hover:underline">Book a call</Link> to see our full portfolio.
          </p>
        </div>
      </section>

      {/* Portfolio showcase images */}
      <section className="bg-[var(--color-bg-alt)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/services-img1.png" alt="Video production sample - explainer video" width={1000} height={563} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/services-img2.png" alt="Video production sample - brand video" width={1000} height={563} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/services-img3.png" alt="Video production sample - social ad" width={889} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/ben-collins-aVhHDI843K8-unsplash.png" alt="Professional video studio setup" width={1000} height={563} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/Group-261.png" alt="Video production showcase" width={800} height={450} className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src="/images/Group-271.png" alt="Video production showcase" width={800} height={450} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
