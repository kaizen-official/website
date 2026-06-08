import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function SiteLayout({ children }) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
