import PageHero from "../../components/PageHero";
import WhyWeWinPageContent from "../../components/why-we-win/WhyWeWinPageContent";

export const metadata = {
  title: "Why We Win",
  description:
    "Every software generates data. Prime Meridian turns operational data into actionable intelligence — Data, Intelligence, Growth.",
  alternates: { canonical: "/why-we-win" },
};

export default function WhyWeWinPage() {
  return (
    <main>
      <PageHero
        label="Why we win"
        title={
          <>
            Every software generates data.
            <br />
            <span className="text-muted">Very few generate intelligence.</span>
          </>
        }
        description="We bridge the gap — turning operational data into actionable intelligence that drives efficiency, performance, and growth."
        compact
      />
      <WhyWeWinPageContent />
    </main>
  );
}
