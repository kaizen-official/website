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

const SITE_URL = "https://www.primemeridiansystems.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Prime Meridian Systems - AI-Native Systems & Intelligence for Bharat's Businesses",
    template: "%s · Prime Meridian Systems",
  },
  description:
    "Prime Meridian builds AI-native business systems and operational intelligence platforms for Bharat's businesses. Forward-deployed engineering, Meridian Build, Meridian Process, IoT integration, and intelligence layers for SAP, Oracle, Tally, and more.",
  keywords: [
    "AI-native business systems India",
    "operational intelligence platform",
    "forward deployed engineering",
    "Meridian Build real estate ERP",
    "Meridian Process manufacturing ERP",
    "IoT operational intelligence",
    "ERP intelligence layer India",
    "SAP Oracle Tally integration",
    "Bharat business software",
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
    title:
      "Prime Meridian Systems - Enabling Intelligent Growth for Bharat's Businesses",
    description:
      "AI-native systems and intelligence platforms that help Bharat's businesses operate and grow more intelligently.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prime Meridian Systems - AI-Native Systems for Bharat's Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prime Meridian Systems - Enabling Intelligent Growth for Bharat's Businesses",
    description:
      "AI-native systems and operational intelligence platforms for Bharat's businesses.",
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
    icon: "/icon.png",
    apple: "/icon.png",
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
  logo: `${SITE_URL}/logo-horizontal.png`,
  description:
    "AI-native systems and intelligence platforms that help Bharat's businesses operate and grow more intelligently.",
  slogan: "Enabling Intelligent Growth for Bharat's Businesses.",
  knowsAbout: [
    "AI-Native Business Systems",
    "Operational Intelligence Platform",
    "Forward Deployed Engineering",
    "Meridian Build",
    "Meridian Process",
    "IoT Integration",
    "ERP Intelligence Layer",
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
