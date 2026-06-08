import PageHero from "../../components/PageHero";
import OfferingsPageContent from "../../components/offerings/OfferingsPageContent";

export const metadata = {
  title: "Our Offerings",
  description:
    "AI Native Business Systems including Meridian Build and Meridian Process, plus an Operational Intelligence Layer for SAP, Oracle, Tally, and more.",
  alternates: { canonical: "/offerings" },
};

export default function OfferingsPage() {
  return (
    <main>
      <PageHero
        label="Our offerings"
        title="Two paths to intelligent operations"
        description="Full AI-native operating systems — or an intelligence layer that makes your existing software significantly smarter."
        tone="dark"
      />
      <OfferingsPageContent />
    </main>
  );
}
