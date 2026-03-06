import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Exo_2 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import { ScrollProvider } from "./providers/scroll-provider";
import { Navigation } from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Faiz P | Senior Backend Engineer | Cloud, Security & AI Systems",
  description: "I build production-grade platforms for video processing, streaming, and AI workflows—optimized for reliability and cost.",
  keywords: ["Senior Backend Engineer", "Cloud", "Security", "AI Systems", "Video Platform", "AWS", "Kubernetes", "Python"],
  authors: [{ name: "Faiz P" }],
  openGraph: {
    title: "Faiz P | Senior Backend Engineer | Cloud, Security & AI Systems",
    description: "I build production-grade platforms for video processing, streaming, and AI workflows—optimized for reliability and cost.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${exo2.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <ScrollProvider>
            <div className="noise-overlay" />
            <Navigation />
            <main>{children}</main>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
