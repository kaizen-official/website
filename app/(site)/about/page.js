import PageHero from "../../components/PageHero";
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
      <PageHero
        label="About us"
        title="AI-native engineers on the ground"
        description="We embed with your teams to understand operations firsthand — then build systems that turn data into intelligent growth."
      />
      <AboutPageContent />
    </main>
  );
}
