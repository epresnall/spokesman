import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Social Media Ads",
  description: "Capture audiences' attention in seconds with authentic, on-brand ads featuring a real person.",
  alternates: { canonical: "/social-media-ads" },
};

export default function SocialMediaAdsPage() {
  return (
    <ServicePage
      title="Speak Engagement On Social Media"
      subtitle="Capture audiences' attention in seconds with authentic, on-brand ads featuring a real person."
      problemHeading="It's No Secret"
      problemSubheading="Every Platform Is Cluttered With Ads"
      solutionHeading="Break Through the Noise With"
      solutionSubheading="Authentic, Scroll-Stopping Videos"
      serviceHeading="Hook Your Audience With Elevated Content"
      serviceDescription="We help you create social media ads that cut through the noise and connect with your audience on a human level. From 15-second clips to full minute-long ads, we handle everything."
      steps={[
        { title: "Create Authentic Value", description: "Choose from a 15, 30 or 60-second ad. Then, our writers will develop a script that aligns with your market, message and media." },
        { title: "Ready, Set, Action!", description: "Once you finalize your script, one of our brand representatives will hop in the studio and record your ad on our in-house green screen." },
        { title: "The Final Cut", description: "From there, we'll edit your video to perfection using our high quality software. Plus, we expertly select commercial-free music, typography and motion graphics for best results." },
        { title: "Nurture More Brand Promoters!", description: "Once we finalize your video together, you're all set to share your ad on social media and watch engagement soar. It's as easy as that!" },
      ]}
      ctaText="Reach and Inspire More Customers With Branded Social Media Ads"
    />
  );
}
