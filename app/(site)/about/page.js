import AboutHero from "../../components/heroes/AboutHero";
import AboutPageContent from "../../components/about/AboutPageContent";

export const metadata = {
  title: "About Us",
  description:
    "A team of AI-native product engineers focused on solving real operational problems for Bharat's businesses through forward deployed engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutPageContent />
    </main>
  );
}
