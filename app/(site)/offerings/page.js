import OfferingsHero from "../../components/heroes/OfferingsHero";
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
      <OfferingsHero />
      <OfferingsPageContent />
    </main>
  );
}
