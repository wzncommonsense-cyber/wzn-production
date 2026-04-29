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
  "WZN Production helpt bedrijven, zzp'ers en creators met websites, software, AI tools, content en promotie die zichtbaar resultaat opleveren.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wznproduction.nl"),
  title: {
    default: "WZN Production | Software, Websites, Content & Promotie",
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
    title: "WZN Production | Also Impossible is Possible",
    description: siteDescription,
    url: "https://wznproduction.nl",
    siteName: "WZN Production",
    images: ["/assets/wzn-brand-showcase.png"],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WZN Production | Software, Websites, Content & Promotie",
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
