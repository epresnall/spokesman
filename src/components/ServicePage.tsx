import Link from "next/link";

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
}

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

      {/* Service description */}
      <section className="bg-[var(--color-bg-alt)] py-16">
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
    </>
  );
}
