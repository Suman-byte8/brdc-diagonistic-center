import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsScripts from "@/components/ui/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Top Diagnostic Center in Malda | Lab & USG",
    template: "%s | BRDC Malda"
  },
  description: "BRDC (Bisweswari Roy Diagnostic & Polyclinic Centre) is the leading diagnostic center in Malda, offering CT Scan, USG, X-Ray, Pathology, and specialized doctor consultations.",
  keywords: ["Diagnostic Center Malda", "Best USG in Malda", "CT Scan Malda", "BRDC Malda", "Medical Clinic Malda"],
  icons: {
    icon: "/favicon.png",
  },
};

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1693858511961944&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AnalyticsScripts />
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
