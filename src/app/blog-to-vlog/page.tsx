import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Blog to Vlog",
  description: "We transform your value-driven blogs into authentic vlogs featuring a real human.",
  alternates: { canonical: "/blog-to-vlog" },
};

export default function BlogToVlogPage() {
  return (
    <ServicePage
      title="Level Up Your Content Creation"
      subtitle="As your video partner, we transform your value-driven blogs into authentic vlogs featuring a real human."
      problemHeading="The Challenge"
      problemSubheading="Capturing Attention is Getting Harder"
      solutionHeading="It's Time To"
      solutionSubheading="Level Up Your Client's Content Marketing Strategy"
      serviceHeading="Deliver Engaging Vlogs with Ease"
      serviceDescription="Enhance your blogs by adding video in 3 simple steps. We handle scripting, presenting, and editing — you get scroll-stopping vlogs that boost brand awareness and loyalty."
      steps={[
        { title: "Beat the 'Script-Writing Blues'", description: "Send us your blog and project brief, then sit back while our professional team of writers crafts an on-brand video script." },
        { title: "Hassle-Free Shooting", description: "Once you finalize the script, one of our brand representatives will hop in the studio and record your message using our in-house green screen." },
        { title: "Premium Editing Done For You", description: "With your 'go ahead', we'll trim your client's video to perfection and jazz it up with commercial-free music, typography and motion graphics!" },
      ]}
      ctaText="Enhance Your Blogs By Adding Video In 3 Simple Steps"
      youtubeIds={["z0ZPz7xTL-A", "28QCg9WHNzo", "eV5rdon1ldc", "qL2aVPcEOD0"]}
    />
  );
}
