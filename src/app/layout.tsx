import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { personal } from "@/lib/data";

// Fonts are loaded via a standard <link> tag in <head> below instead of
// next/font/google. This avoids a build-time network fetch to Google Fonts
// (which fails in offline/sandboxed build environments) while still loading
// the real Poppins / Inter / JetBrains Mono faces in the browser at runtime.
// CSS variables --font-poppins / --font-inter / --font-mono are defined in
// globals.css and mapped to these family names.

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: `${personal.name} — Java Backend Developer & Software Engineer`,
    template: `%s — ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "Iram",
    "Java Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "Spring Boot Developer",
    "MIET AKTU",
    "Java Internship",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: personal.siteUrl,
    title: `${personal.name} — Java Backend Developer & Software Engineer`,
    description: personal.tagline,
    siteName: `${personal.name} Portfolio`,
    images: [{ url: personal.ogImage, width: 1200, height: 630, alt: personal.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Java Backend Developer`,
    description: personal.tagline,
    images: [personal.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <BackToTop />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
