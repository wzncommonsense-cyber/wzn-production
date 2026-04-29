import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "WZN Production is een premium creative, AI en software agency voor websites, webapps, AI tools, promotiecontent, flyers en online zichtbaarheid.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wznproduction.nl"),
  title: {
    default: "WZN Production | Creative AI & Software Agency",
    template: "%s | WZN Production",
  },
  description: siteDescription,
  keywords: [
    "WZN Production",
    "websites",
    "webapps",
    "software op maat",
    "AI tools",
    "automatisering",
    "promotie content",
    "flyers",
    "social media content",
  ],
  authors: [{ name: "WZN Production" }],
  creator: "WZN Production",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WZN Production | Creative AI & Software Agency",
    description: siteDescription,
    url: "https://wznproduction.nl",
    siteName: "WZN Production",
    images: ["/assets/wzn-brand-showcase.png"],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WZN Production | Creative AI & Software Agency",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
