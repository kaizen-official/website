import { CONTACT_FAQ } from "@/lib/content";
import PageHero from "../../components/PageHero";
import ContactPageContent from "../../components/contact/ContactPageContent";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTACT_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Prime Meridian Systems. Book a demo and learn how AI-native systems and operational intelligence can help your business grow.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        label="Contact us"
        title="Let's build intelligence into your operations"
        description="Tell us about your business, your stack, and where you want to grow. We'll take it from there — on the ground, with your team."
        tone="dark"
        compact
      />
      <ContactPageContent />
    </main>
  );
}
