import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What business owners are saying about working with The Spokesman.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  { name: "Brecker Brees", text: "Out of all the other brand representatives and video creatives that we were considering, the quality of the portfolio of The Spokesman was extremely impressive... it was exactly what we were looking for. Very professional, very easy to work with, and very quick on the turn around time... much quicker than expected." },
  { name: "Harshita Pulla", text: "We asked Eric to record a product tutorial for one of our VIP clients. He asked all the questions to understand the script and completed everything on the first try. The team loved the video! We keep using it for internal onboarding presentations. I highly recommend Eric to any tech company." },
  { name: "Konstantyn Shyshkin", text: "Eric is top-notch talent! He's amazing and high-energy on screen, but extremely professional as well, and is a pleasure to work with. He also adheres to deadlines! We'll continue to work with Eric for much longer, because he's been so easy and fun to work with." },
  { name: "Kelly Cambry", text: "Eric was a charm to work with. His on camera talent was spot on and he executed our project with flair. He is extremely detailed and thorough. Looking forward to working with him again soon and we've told all our clients looking for this type of project to call him. Excellent work!" },
  { name: "Pia Larson", text: "Eric delivered everything we asked for and more in a timely and professional manner. He's been a pleasure to work with and will be an ongoing part of our team." },
  { name: "Kamar Brown", text: "Eric has been a great spokesman for all of our programs and records some of the highest converting videos that we advertise with!" },
];

export default function TestimonialsPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl md:text-5xl font-black text-center">Testimonials</h1>
        <p className="text-lg text-[var(--color-muted)] text-center mt-4">What Business Owners Are Saying...</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 font-bold text-[var(--color-green)]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
