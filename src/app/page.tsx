import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Spokesman | Creative Video Director",
  description:
    "We are a Creative Video Talent Agency who helps brands and businesses of all sizes with digital video content. From RAW footage to end-to-end solutions, we specialise in scaling travel, technological, medical, and psychological services.",
  alternates: { canonical: "/" },
};

const challenges = [
  {
    title: "The (Never-Ending) Content Treadmill",
    text: "Being the face of your brand means constant pressure to create. When you don\u2019t feel like filming, your content strategy stalls.\n\nThe relentless demand for consistency becomes exhausting, turning what should be strategic growth into a personal burden.",
  },
  {
    title: "Business Growth Is Limited By Your Time On Camera",
    text: "Your expertise and insights are valuable, but being the only spokesperson creates a bottleneck.\n\nYour business growth becomes constrained by your personal capacity to appear on camera, leading to missed opportunities and slower market expansion.",
  },
  {
    title: "Brand Value Is Linked To Your Presence",
    text: "Having your face as the only brand representative makes your business less sellable.\n\nPotential buyers see risk in a personality-dependent brand, and stepping back becomes nearly impossible without losing your content momentum.",
  },
];

const videoSolutions = [
  {
    title: "YouTube Channel Strategy",
    points: [
      "Build authority in your space",
      "Establish thought leadership",
      "Create engaging long-form content",
      "Optimize for search and discovery",
    ],
  },
  {
    title: "Short-Form Video Content",
    points: [
      "Drive social engagement",
      "Increase platform awareness",
      "Capture attention quickly",
      "Maintain consistent messaging",
    ],
  },
  {
    title: "Support & Training Videos",
    points: [
      "Transform user adoption",
      "Reduce churn rates",
      "Decrease support tickets",
      "Enhance customer experience",
    ],
  },
  {
    title: "Podcast & Interview Content",
    points: [
      "Share your vision effectively",
      "Strengthen industry leadership",
      "Build thought leadership",
      "Engage with industry leaders",
    ],
  },
  {
    title: "Paid Media Videos",
    points: [
      "Convert viewers into active users",
      "Drive campaign performance",
      "Create compelling ads",
      "Test and optimize content",
    ],
  },
  {
    title: "Custom Video Solutions",
    points: [
      "Tailored content strategies",
      "Unique market approaches",
      "Specialized content types",
      "Adaptive solutions",
    ],
  },
];

const exclusivePillars = [
  {
    title: "Authentic Brand Representation",
    points: [
      "Your message delivered exactly as you would present it",
      "Your voice and style faithfully maintained",
      "Freedom to focus on running your business",
    ],
  },
  {
    title: "Multi-Industry Expertise",
    points: [
      "Making complex concepts simple and engaging",
      "Speaking your industry\u2019s language naturally",
      "Proven strategies for your target audience",
    ],
  },
  {
    title: "Exclusive Market Position",
    points: [
      "The only company like yours in our partnership",
      "A unique voice that stands out in your market",
      "Videos that make your brand unforgettable",
    ],
  },
];

const rawFootageFeatures = [
  "High-quality RAW footage delivery",
  "Fast turnaround times",
  "Custom LED studio backgrounds",
  "Collaborative content planning",
  "Remote-first efficiency",
];

const fullTeamFeatures = [
  "Tech-savvy video scriptwriters",
  "Expert video editors",
  "Motion graphics specialists",
  "Animation creators",
  "End-to-end production support",
  "Strategy + distribution guidance",
];

const globalFilmingFeatures = [
  "Diverse Locations in Australia, USA, Europe, and Asia",
  "Fast turnaround times",
  "High-Quality Lighting + Sound",
  "Collaborative content planning",
  "Remote-first efficiency",
];

const partnershipIs = [
  {
    heading: "Seamless Integration with Your Team",
    items: [
      "Plugs into your existing marketing workflow",
      "Direct collaboration with your CMO/content team",
      "Flexible content requests through your team\u2019s preferred channels",
      "Complements your current content strategy",
    ],
  },
  {
    heading: "Professional Brand Representative",
    items: [
      "Dedicated video presenter for your brand",
      "Consistent, professional delivery of your message",
      "No CEO time required for filming",
      "Freedom to focus on core business activities",
    ],
  },
  {
    heading: "Scalable Content Production",
    items: [
      "Efficient request-to-delivery system",
      "Works alongside your content calendar",
      "Adaptable to your team\u2019s production schedule",
      "Easy integration with existing processes",
    ],
  },
  {
    heading: "Clear Service Parameters",
    items: [
      "Well-defined scope and deliverables",
      "Straightforward content request process",
      "Predictable turnaround times",
      "Professional service boundaries",
    ],
  },
  {
    heading: "Strategic Asset for Your Team",
    items: [
      "Enhances your existing marketing capabilities",
      "Empowers your team to create more video content",
      "Supports your internal content creators",
      "Resource multiplier for your marketing efforts",
    ],
  },
];

const partnershipIsnt = [
  {
    heading: "Not an Internal Employee",
    items: [
      "Independent contractor relationship",
      "No management overhead required",
      "Clear service agreement",
      "Professional business partnership",
    ],
  },
  {
    heading: "Not a Complex Integration",
    items: [
      "No disruption to current operations",
      "No extensive onboarding needed",
      "No internal system changes required",
      "Simple request and delivery process",
    ],
  },
  {
    heading: "Not a Time-Intensive Commitment",
    items: [
      "Minimal oversight needed from your team",
      "Efficient communication channels",
      "No lengthy meetings required",
      "Streamlined workflow",
    ],
  },
  {
    heading: "Not a Rigid Structure",
    items: [
      "Adapts to your existing processes",
      "Flexible to your changing needs",
      "Scalable up or down as needed",
      "Works within your systems",
    ],
  },
  {
    heading: "Not a Traditional Agency Relationship",
    items: [
      "No complex approval hierarchies",
      "Direct, clear communication",
      "Focused service offering",
      "Specialized expertise",
    ],
  },
];

const roadmap = [
  {
    step: "Step 1",
    phase: "Discovery & Planning",
    items: [
      "Get to know each other",
      "Share your goals and vision",
      "Explore how we can help",
      "Review partnership details",
    ],
  },
  {
    step: "Step 2",
    phase: "Agreement & Strategy",
    items: [
      "Protect your market position",
      "Define our work together",
      "Set clear success goals",
      "Create content plan",
    ],
  },
  {
    step: "Step 3",
    phase: "Launch & Growth",
    items: [
      "Begin strategic planning",
      "Start creating content",
      "Track our success",
      "Scale your impact",
    ],
  },
];

const videoCategories = [
  {
    title: "CEO Content Creators",
    items: [
      "YouTube Thought Leaders",
      "Executive Coaches",
      "Strategy Consultants",
      "Industry Educators",
    ],
  },
  {
    title: "Tech Brands",
    items: [
      "SaaS platforms",
      "Digital products",
      "Enterprise solutions",
      "Innovation leaders",
    ],
  },
  {
    title: "Service Solutions",
    items: [
      "Professional Services",
      "Business Services",
      "Consulting Firms",
      "Advisory Services",
    ],
  },
];

const BOOKING_URL = "https://cal.com/videorep/the-spokesman-partnership-call";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-green-light)] text-[var(--color-green)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="font-bold">New</span>
                <span>Currently seeking 2 partnerships for 2025 &gt;</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-[var(--color-green)]">Video </span>
                Spokesperson{" "}
                <br className="hidden lg:block" />
                for Elite Brands
              </h1>
              <p className="text-lg text-[var(--color-muted)] mt-6 max-w-xl">
                Building market authority through authentic video communication
                that scales your brand globally.
              </p>
              <Link
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 mt-8 text-[var(--color-green)] font-bold text-lg hover:underline"
              >
                Explore 2025 Partnership
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <div className="flex items-center gap-2 mt-6">
                <span className="font-semibold text-sm">5-Star Service</span>
                <span className="text-[var(--color-yellow)] text-lg">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Based on 210 reviews
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pexels-thisisengineering-3862132.jpg"
                  alt="Professional video production"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-8">
            Trusted By 200+ Global Organizations Over The Last 25 Years
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { src: "/images/ahrefs.png", alt: "Ahrefs" },
              { src: "/images/unilever.png", alt: "Unilever" },
              { src: "/images/chipper.png", alt: "Chipper" },
              { src: "/images/svacademy.png", alt: "SV Academy" },
              { src: "/images/syzzle.png", alt: "Syzzle" },
              { src: "/images/phs_logo.svg", alt: "PHS" },
              { src: "/images/Asset-1-2.svg", alt: "Partner" },
            ].map((logo) => (
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

      {/* Effortless Video Creation */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Effortless Video Creation,{" "}
              <br className="hidden md:block" />
              Higher Conversions,{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--color-green)]">
                Amplified Impact
              </span>
            </h2>
            <p className="text-lg text-[var(--color-muted)] mt-6">
              Maximize your video presence effortlessly with The Spokesman. Save
              time, build influence, and make a lasting impact — no camera
              needed.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-green)] mt-1 text-lg">
                  &#10003;
                </span>
                <span className="font-semibold">
                  Free yourself{" "}
                  <span className="font-normal text-[var(--color-muted)]">
                    from the endless cycle of content creation
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-green)] mt-1 text-lg">
                  &#10003;
                </span>
                <span className="font-semibold">
                  Build a sellable brand{" "}
                  <span className="font-normal text-[var(--color-muted)]">
                    that doesn&apos;t depend on your face
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-green)] mt-1 text-lg">
                  &#10003;
                </span>
                <span className="font-semibold">
                  Maintain consistent thought leadership{" "}
                  <span className="font-normal text-[var(--color-muted)]">
                    without the personal burden
                  </span>
                </span>
              </li>
            </ul>
            <Link
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-green)] font-bold text-lg hover:underline"
            >
              Book a Call Today
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Your Content Creation Burdens... Solved */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            Your Content Creation Burdens...{" "}
            <span className="text-[var(--color-green)]">Solved</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mt-4 max-w-2xl mx-auto">
            CEO&apos;s and marketing teams of scaling businesses face 3 critical
            challenges:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {challenges.map((c) => (
              <div key={c.title} className="card">
                <h3 className="font-bold text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {c.text}
                </p>
                <Link
                  href={BOOKING_URL}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[var(--color-green)] hover:underline"
                >
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Spotlight: Simplify LLC */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <div className="w-full aspect-video rounded-2xl overflow-hidden max-w-md">
                <iframe
                  src="https://player.vimeo.com/video/1028225375"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Simplify LLC Success Story"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold uppercase tracking-wider">
                  &#128161; SUCCESS SPOTLIGHT:
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black">Simplify LLC</h2>
              <p className="text-xl text-[var(--color-green)] font-bold mt-2">
                542% Subscriber Growth in 90 Days
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-green)] mt-1">
                    &#10003;
                  </span>
                  <span className="font-semibold">33 Videos Created</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-green)] mt-1">
                    &#10003;
                  </span>
                  <span className="font-semibold">16,000+ New Views</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-green)] mt-1">
                    &#10003;
                  </span>
                  <span className="font-semibold">
                    Blog-to-Video Transformation
                  </span>
                </li>
              </ul>
              <blockquote className="mt-6 text-lg italic text-[var(--color-muted)]">
                &ldquo;It&apos;s been more of a partnership than actual
                business.&rdquo;
              </blockquote>
              <p className="text-sm font-semibold mt-2">
                - Heigo Protten, Strategic Partnership Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Freelancer to Fractional Video Partner */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            <span className="text-[var(--color-green)]">From Freelancer </span>
            to{" "}
            <span className="text-[var(--color-green)]">
              Fractional Video Partner
            </span>
          </h2>
          <blockquote className="mt-8 text-lg md:text-xl italic text-[var(--color-muted)] leading-relaxed max-w-3xl mx-auto">
            &ldquo;Over the past 25 years, I&apos;ve helped more than 200
            brands share their stories through video. What became clear is that
            the deepest impact comes from focused, long-term collaboration.
            That&apos;s why I am now partnering with just 3 premium brands
            annually - ensuring each receives the dedicated attention and
            authentic communication their audience deserves.&rdquo;
          </blockquote>
          <div className="mt-10 max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1028591291"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="The Spokesman Introduction"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* All-Inclusive Video Solutions */}
      <section id="sample-videos" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            <span className="text-[var(--color-green)]">All-Inclusive </span>
            Video Solutions
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mt-4 max-w-2xl mx-auto">
            Transform your brand presence through the following types of content
            AND more...
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {videoSolutions.map((vs) => (
              <div
                key={vs.title}
                className="bg-[var(--color-dark)] text-white rounded-2xl p-8"
              >
                <h3 className="font-bold text-lg mb-4">{vs.title}</h3>
                <ol className="space-y-2 text-sm text-gray-300">
                  {vs.points.map((p, i) => (
                    <li key={p}>
                      {i + 1}. {p}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* An Exclusive Video Partner */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center max-w-3xl mx-auto">
            An Exclusive{" "}
            <span className="text-[var(--color-green)]">Video Partner</span>
            <br />
            That Frees Your Time &amp; Scales Your Business
            <br />
            (At The Same Time)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {exclusivePillars.map((p) => (
              <div key={p.title} className="card text-center">
                <h4 className="font-bold text-lg mb-4">{p.title}</h4>
                <ul className="space-y-3 text-sm text-[var(--color-muted)] text-left">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-[var(--color-green)] mt-0.5">
                        &bull;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Flexible Video Solutions 'From RAW to Ready' */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            All-Flexible{" "}
            <span className="text-[var(--color-green)]">Video Solutions</span>
            <br />
            &lsquo;From RAW to Ready&rsquo;
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* RAW Footage Only */}
            <div className="card">
              <h3 className="text-2xl font-black mb-4">RAW Footage Only</h3>
              <Link href={BOOKING_URL} className="btn-primary mb-4">
                Let&apos;s Talk
              </Link>
              <p className="text-[var(--color-muted)] mb-4">
                Providing RAW footage whenever you need it.
              </p>
              <ul className="space-y-2">
                {rawFootageFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="text-[var(--color-green)] mt-0.5">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Full Video Content Team */}
            <div className="card">
              <h3 className="text-2xl font-black mb-4">
                Full Video Content Team
              </h3>
              <Link href={BOOKING_URL} className="btn-primary mb-4">
                Let&apos;s Talk
              </Link>
              <p className="text-[var(--color-muted)] mb-4">
                Full access to our internal production team
              </p>
              <ul className="space-y-2">
                {fullTeamFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="text-[var(--color-green)] mt-0.5">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Global On-Location Filming */}
          <div className="mt-8 bg-[var(--color-dark)] text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-black mb-4">
                  Global On-Location Filming
                </h3>
                <Link
                  href={BOOKING_URL}
                  className="btn-primary mb-4 inline-block"
                >
                  Get Started
                </Link>
                <p className="text-gray-300 mb-4">
                  As an experienced global traveler, I offer unique
                  opportunities for:
                </p>
                <ul className="space-y-2">
                  {globalFilmingFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-[var(--color-green)] mt-0.5">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/duncan-1.jpg"
                  alt="Global on-location filming"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision / Eric Quote */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="text-[var(--color-green)]">Strategic </span>
                Vision
              </h2>
              <blockquote className="mt-6 text-lg italic text-[var(--color-muted)] leading-relaxed">
                &ldquo;By the end of our initial partnership year, when
                we&apos;ve established your brand as an authentic voice in your
                category and achieved our shared goals, I want you to be so
                satisfied that you don&apos;t even think about recommending my
                services... because we&apos;re already planning our next
                strategic initiative together.&rdquo;
              </blockquote>
              <Link
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 mt-8 text-[var(--color-green)] font-bold text-lg hover:underline"
              >
                Book a Call Today
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-pixabay-461064.jpg"
                alt="Eric Presnall - The Spokesman"
                width={1280}
                height={960}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            <span className="text-[var(--color-green)]">Video </span>Categories
          </h2>
          <blockquote className="mt-4 text-lg italic text-[var(--color-muted)] text-center max-w-3xl mx-auto">
            &ldquo;We are seeking to only work with one company of each type...
            For example, if you&apos;re a booking platform, we won&apos;t work
            with any other booking platforms during our partnership.&rdquo;
          </blockquote>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {videoCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-[var(--color-dark)] text-white rounded-2xl p-8"
              >
                <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--color-green)] mt-0.5">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 text-[var(--color-green)] font-bold text-lg hover:underline"
            >
              Book a Call Today
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Real ROI of Video Partnerships */}
      <section className="bg-[var(--color-bg-alt)] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center">
            <span className="text-[var(--color-green)]">The Real ROI </span>
            of Video Partnerships
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mt-4">
            What Drives Success vs What Doesn&apos;t
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* What This Partnership IS */}
            <div className="card">
              <h4 className="font-bold text-xl mb-6">
                What This Partnership IS:
              </h4>
              {partnershipIs.map((section) => (
                <div key={section.heading} className="mb-6 last:mb-0">
                  <h5 className="font-semibold mb-2 flex items-start gap-2">
                    <span className="text-[var(--color-green)] mt-0.5">
                      &#10003;
                    </span>
                    {section.heading}
                  </h5>
                  <ul className="ml-7 space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-muted)] list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* What This Partnership ISN'T */}
            <div className="card">
              <h4 className="font-bold text-xl mb-6">
                What This Partnership ISN&apos;T:
              </h4>
              {partnershipIsnt.map((section) => (
                <div key={section.heading} className="mb-6 last:mb-0">
                  <h5 className="font-semibold mb-2 flex items-start gap-2 text-red-500">
                    <span className="mt-0.5">&#10007;</span>
                    {section.heading}
                  </h5>
                  <ul className="ml-7 space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-muted)] list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Roadmap */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            A Simple{" "}
            <span className="text-[var(--color-green)]">Video Partner</span>{" "}
            Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((r) => (
              <div key={r.phase} className="card text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-[var(--color-green)]" />
                  <span className="text-sm font-semibold text-[var(--color-green)]">
                    {r.step}
                  </span>
                  <div className="h-px w-8 bg-[var(--color-green)]" />
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
            <Link
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 text-[var(--color-green)] font-bold text-lg hover:underline"
            >
              Book a Call Today
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-green)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black">
            Ready to Discuss Your 2025 Partnership?
          </h2>
          <h3 className="text-xl mt-4 font-semibold">
            Click below to book a discovery call with Eric!
          </h3>
          <Link
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 mt-8 bg-white text-[var(--color-green)] font-bold text-lg px-8 py-4 rounded-full hover:shadow-lg transition-shadow"
          >
            Book a Call Today
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
