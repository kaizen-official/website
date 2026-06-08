import WhyWeWinHero from "../../components/heroes/WhyWeWinHero";
import WhyWeWinPageContent from "../../components/why-we-win/WhyWeWinPageContent";

export const metadata = {
  title: "Why We Win",
  description:
    "Every software generates data. Prime Meridian turns operational data into actionable intelligence - Data, Intelligence, Growth.",
  alternates: { canonical: "/why-we-win" },
};

export default function WhyWeWinPage() {
  return (
    <main>
      <WhyWeWinHero />
      <WhyWeWinPageContent />
    </main>
  );
}
