import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Explainer Videos",
  description: "Drive conversions in two minutes (or less) with compelling explainer videos.",
  alternates: { canonical: "/explainer-videos" },
};

export default function ExplainerVideosPage() {
  return (
    <ServicePage
      title="Inspire Your Customers To Take Action FAST!"
      subtitle="Drive conversions in two minutes (or less) with compelling explainer videos."
      problemHeading="It's Time To"
      problemSubheading="Skyrocket Sales Through Clarity"
      solutionHeading="Get Ready To"
      solutionSubheading="Cut Through The Noise & Convert"
      serviceHeading="Showcase Your Offer and Inspire Action!"
      serviceDescription="Ready to create a winning explainer video... but not sure where to start? You're in the right place. Our team at The Spokesman guides you through the process of creating professional, high-quality explainer videos AND takes care of the production heavy-lifting for you. Along the way, we'll collaborate to ensure we capture your brand's unique tone of voice and your video actually connects with your ideal customers!"
      steps={[
        { title: "Behind the Scenes", description: "Kick off your project by choosing the duration and style of your video. Then sit back while our team of professional writers craft your script." },
        { title: "Time for Action", description: "Once you finalize the script, one of our brand representatives will hop in the studio and record your message on our in-house green screen." },
        { title: "Magic Touches", description: "Upon approval, we'll use our high-quality editing software to trim your video to perfection. Then, we'll jazz it up with commercial-free music, typography and motion graphics!" },
        { title: "Hit 'Share'", description: "Once we finalize your video, you're all set to share it to your homepage and watch the leads roll in. It's as easy as that!" },
      ]}
      ctaText="Drive Action in 2 Minutes Or Less With Powerful Explainer Videos"
      youtubeIds={["Vt1FXhOlKzY", "MfJNzYEUs8o", "4lS63RNQxfo"]}
    />
  );
}
