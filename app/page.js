import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Mission from "./components/Mission";
import DemoCard from "./components/DemoCard";
import Solutions from "./components/Solutions";
import Capabilities from "./components/Capabilities";
import Market from "./components/Market";
import ClosingCTA from "./components/ClosingCTA";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TrustedBy />
        <Mission />
        <DemoCard />
        <Solutions />
        <Capabilities />
        <Market />
        <ClosingCTA />
      </main>
      <SiteFooter />
    </>
  );
}
