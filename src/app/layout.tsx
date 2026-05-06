import type { Metadata } from "next";
import { Open_Sans, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "i SPACE ARCHITECTS & CONSTRUCTION | Best Architects in Kodaikanal",
    template: "%s | i SPACE ARCHITECTS"
  },
  description: "i SPACE ARCHITECTS & CONSTRUCTION is the leading architecture and construction firm in Kodaikanal. We specialize in modern, sustainable home designs and premium interior solutions.",
  keywords: ["iSpace", "Architects in Kodaikanal", "Kodaikanal architecture", "best construction company Kodaikanal", "interior design Kodaikanal", "sustainable architecture India"],
  authors: [{ name: "i SPACE ARCHITECTS" }],
  creator: "i SPACE ARCHITECTS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ispacearchitects.com",
    title: "i SPACE ARCHITECTS | Top Architects & Construction in Kodaikanal",
    description: "Transforming dreams into reality with premium architecture and construction services in Kodaikanal.",
    siteName: "i SPACE ARCHITECTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "i SPACE ARCHITECTS | Architects in Kodaikanal",
    description: "Leading architecture and construction firm in Kodaikanal.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "i SPACE ARCHITECTS & CONSTRUCTION",
  "image": "https://ispacearchitects.com/img/project-1.jpg",
  "@id": "https://ispacearchitects.com",
  "url": "https://ispacearchitects.com",
  "telephone": "+91 70103 08898",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moonjikal",
    "addressLocality": "Kodaikanal",
    "addressRegion": "TN",
    "postalCode": "624101",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.2391,
    "longitude": 77.4892
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/ispace_architects",
    "https://www.facebook.com/ispacearchitects",
    "https://www.linkedin.com/company/ispacearchitects"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${teko.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
