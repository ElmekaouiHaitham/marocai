import type { Metadata } from "next";
import { Outfit, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  title: "Maroc AI",
  description: "Votre copilote administratif intelligent au Maroc.",
  openGraph: {
    title: "Maroc AI",
    description: "Votre copilote administratif intelligent au Maroc.",
    url: "https://marocai.com",
    siteName: "Maroc AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Maroc AI Preview",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maroc AI",
    description: "Votre copilote administratif intelligent au Maroc.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${notoSansArabic.variable} antialiased bg-white text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
