import { CONTACT_FAQ } from "@/lib/content";
import ContactHero from "../../components/heroes/ContactHero";
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
      <ContactHero />
      <ContactPageContent />
    </main>
  );
}
