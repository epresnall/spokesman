import Link from "next/link";
import Image from "next/image";

export interface ServicePageProps {
  title: string;
  subtitle: string;
  problemHeading: string;
  problemSubheading: string;
  solutionHeading: string;
  solutionSubheading: string;
  serviceHeading: string;
  serviceDescription: string;
  steps: { title: string; description: string }[];
  ctaText: string;
  youtubeIds?: string[];
}

const clientLogos = [
  { src: "/images/ahrefs.png", alt: "Ahrefs" },
  { src: "/images/unilever.png", alt: "Unilever" },
  { src: "/images/chipper.png", alt: "Chipper" },
  { src: "/images/svacademy.png", alt: "SV Academy" },
  { src: "/images/syzzle.png", alt: "Syzzle" },
  { src: "/images/phs_logo.svg", alt: "PHS" },
  { src: "/images/Asset-1-2.svg", alt: "Partner" },
];

const testimonials = [
  { name: "Brecker Brees", photo: "/images/Brecker-Brees---LI-Photo.jpeg", text: "Out of all the other brand representatives and video creatives that we were considering, the quality of the portfolio of The Spokesman was extremely impressive... it was exactly what we were looking for. Very professional, very easy to work with, and very quick on the turn around time." },
  { name: "Harshita Pulla", photo: "/images/Harshita-Pulla---LI-Photo.jpeg", text: "We asked Eric to record a product tutorial for one of our VIP clients. He asked all the questions to understand the script and completed everything on the first try. The team loved the video! We keep using it for internal onboarding presentations." },
  { name: "Konstantyn Shyshkin", photo: "/images/Konstantyn-Shyshkin---LI-Photo.jpeg", text: "Eric is top-notch talent! He's amazing and high-energy on screen, but extremely professional as well, and is a pleasure to work with. He also adheres to deadlines!" },
  { name: "Kelly Cambry", photo: "/images/Kelly-Cambry---LI-Photo.jpeg", text: "Eric was a charm to work with. His on camera talent was spot on and he executed our project with flair. He is extremely detailed and thorough." },
];

export default function ServicePage({
  title,
  subtitle,
  problemHeading,
  problemSubheading,
  solutionHeading,
  solutionSubheading,
  serviceHeading,
  serviceDescription,
  steps,
  ctaText,
  youtubeIds,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black">{title}</h1>
          <p className="text-lg text-[var(--color-muted)] mt-4 max-w-2xl mx-auto">{subtitle}</p>
          <Link href="/book-a-call" className="btn-primary mt-8">Book a Call</Link>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-[var(--color-green)] uppercase tracking-wider">{problemHeading}</p>
          <h2 className="text-3xl font-black mt-2">{problemSubheading}</h2>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold text-[var(--color-green)] uppercase tracking-wider">{solutionHeading}</p>
          <h2 className="text-3xl font-black mt-2">{solutionSubheading}</h2>
        </div>
      </section>

      {/* YouTube Video Samples */}
      {youtubeIds && youtubeIds.length > 0 && (
        <section className="bg-[var(--color-bg-alt)] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-center mb-8">See Our Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeIds.map((id) => (
                <div key={id} className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&controls=1&autoplay=0&mute=0`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video sample"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service description */}
      <section className={`${youtubeIds && youtubeIds.length > 0 ? '' : 'bg-[var(--color-bg-alt)]'} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold">{serviceHeading}</h2>
          <p className="text-[var(--color-muted)] mt-4 max-w-2xl mx-auto leading-relaxed">{serviceDescription}</p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="card text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-green)] text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-green)] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white">{ctaText}</h2>
          <Link href="/book-a-call" className="inline-flex items-center justify-center bg-white text-[var(--color-green)] font-bold text-sm px-8 py-3 rounded-full mt-6 hover:bg-gray-50 transition-colors">
            Book a Call
          </Link>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted By Leading Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={96}
                height={48}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black text-center mb-12">
            Great Brands We Partner With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="font-bold text-[var(--color-green)]">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is The Spokesman */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-black mb-6">Who is The Spokesman?</h2>
          <p className="text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            With more than 25+ years of experience working both in front and behind the camera,
            The Spokesman&apos;s CEO/Founder has worked alongside more than 500+ global brand
            partners and marketers. From Broadway national tours to Fortune 500 boardrooms,
            Eric brings a performer&apos;s presence and an entrepreneur&apos;s strategic thinking
            to every video partnership.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-black text-[var(--color-green)]">200+</p>
              <p className="text-sm text-[var(--color-muted)]">Brands Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[var(--color-green)]">50+</p>
              <p className="text-sm text-[var(--color-muted)]">Countries Reached</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[var(--color-green)]">1000+</p>
              <p className="text-sm text-[var(--color-muted)]">Videos Created</p>
            </div>
          </div>
          <Link href="/book-a-call" className="btn-primary mt-10">Book a Call</Link>
        </div>
      </section>
    </>
  );
}
