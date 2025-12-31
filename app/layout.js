import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "KAIZEN | Tech-Enabled Business Solutions",
  description: "We transform businesses through cutting-edge technology. Websites, CRM, ERP, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrains.variable} ${shareTech.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
