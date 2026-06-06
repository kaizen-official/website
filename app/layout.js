import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://primemeridiansystems.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Prime Meridian Systems - Operational Software for Bharat's MSMEs",
    template: "%s · Prime Meridian Systems",
  },
  description:
    "Prime Meridian is the operational coordination layer for Indian MSMEs - a vertically standardized software stack across inventory, dispatch, procurement, workflows and finance. Two AI-native ERPs: Meridian Build (real estate) and Meridian Process (chemical manufacturing).",
  keywords: [
    "MSME operational software",
    "MSME ERP India",
    "vertical ERP",
    "real estate ERP",
    "chemical manufacturing ERP",
    "workflow software for MSMEs",
    "inventory and dispatch software",
    "operational coordination layer",
    "Bharat MSME software",
    "Prime Meridian Systems",
  ],
  authors: [{ name: "Prime Meridian Systems" }],
  creator: "Prime Meridian Systems",
  publisher: "Prime Meridian Systems",
  applicationName: "Prime Meridian Systems",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Prime Meridian Systems",
    title: "Prime Meridian Systems - Operational Software for Bharat's MSMEs",
    description:
      "The operational coordination layer for Indian MSMEs. A vertically standardized software stack across inventory, dispatch, procurement, workflows and finance.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prime Meridian Systems - Operational Software for Bharat's MSMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Meridian Systems - Operational Software for Bharat's MSMEs",
    description:
      "The operational coordination layer for Indian MSMEs - vertically standardized ERP and workflow software.",
    creator: "@primemeridian",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#f4f4f2",
  colorScheme: "light",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prime Meridian Systems",
  alternateName: "PMS",
  url: SITE_URL,
  description:
    "Operational software for Bharat's MSMEs - the operational coordination layer across inventory, dispatch, procurement, workflows and finance.",
  slogan: "Enabling structured growth for Bharat's MSMEs.",
  knowsAbout: [
    "MSME Operational Software",
    "Vertical ERP",
    "Real Estate ERP",
    "Chemical Manufacturing ERP",
    "Workflow Orchestration",
  ],
  sameAs: [
    "https://x.com/primemeridian",
    "https://www.linkedin.com/company/prime-meridian-systems",
    "https://github.com/prime-meridian-systems",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prime Meridian Systems",
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
