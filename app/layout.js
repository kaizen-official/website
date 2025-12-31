import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const baseUrl = "https://www.kaizen.org.in";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "KAIZEN | Tech-Enabled Business Solutions",
    template: "%s | KAIZEN",
  },
  description:
    "Kaizen transforms businesses through cutting-edge technology. Expert solutions for websites, CRM, ERP, mobile apps, cloud infrastructure, and AI/ML systems. 150+ projects delivered with 99% uptime.",
  keywords: [
    "tech agency",
    "web development",
    "CRM solutions",
    "ERP integration",
    "mobile app development",
    "cloud infrastructure",
    "AI solutions",
    "machine learning",
    "digital transformation",
    "software development",
    "custom software",
    "enterprise solutions",
    "business automation",
    "DevOps",
    "full-stack development",
    "React development",
    "Next.js agency",
    "Node.js development",
  ],
  authors: [{ name: "Kaizen", url: baseUrl }],
  creator: "Kaizen",
  publisher: "Kaizen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "KAIZEN",
    title: "KAIZEN | Tech-Enabled Business Solutions",
    description:
      "Transform your business with cutting-edge technology. Web development, CRM, ERP, mobile apps, cloud, and AI solutions. 150+ projects delivered.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KAIZEN - Tech-Enabled Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAIZEN | Tech-Enabled Business Solutions",
    description:
      "Transform your business with cutting-edge technology. Web development, CRM, ERP, mobile apps, cloud, and AI solutions.",
    images: ["/og-image.png"],
    creator: "@kaizen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#00f0ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kaizen",
    alternateName: "KAIZEN",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Tech agency specializing in web development, CRM, ERP, mobile apps, cloud infrastructure, and AI/ML solutions.",
    email: "kaizen.official.hub@gmail.com",
    foundingDate: "2024",
    sameAs: [
      // Add social media URLs when available
      // "https://twitter.com/kaizen",
      // "https://linkedin.com/company/kaizen",
      // "https://github.com/kaizen",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "kaizen.official.hub@gmail.com",
      availableLanguage: ["English"],
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "6",
      itemOffered: [
        {
          "@type": "Service",
          name: "Web Development",
          description: "Custom websites and web applications with modern frameworks",
        },
        {
          "@type": "Service",
          name: "CRM Systems",
          description: "Customer relationship management solutions",
        },
        {
          "@type": "Service",
          name: "ERP Integration",
          description: "Enterprise resource planning integration",
        },
        {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile development",
        },
        {
          "@type": "Service",
          name: "Cloud Infrastructure",
          description: "Scalable cloud infrastructure and DevOps",
        },
        {
          "@type": "Service",
          name: "AI/ML Solutions",
          description: "Machine learning and automation systems",
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${jetbrains.variable} ${shareTech.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
