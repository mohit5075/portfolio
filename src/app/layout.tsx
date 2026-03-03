import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Mohit Kumar Goyal | Software Engineer – Backend, Distributed Systems, Cloud & DevOps",
  description:
    "Portfolio of Mohit Kumar Goyal – Software Engineer specializing in scalable backend systems, distributed platforms, Kafka, Spring Boot, AWS. IIT Roorkee graduate.",
  keywords: [
    "Mohit Kumar Goyal",
    "Software Engineer",
    "Backend Developer",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "Kafka",
    "AWS",
    "IIT Roorkee",
  ],
  authors: [{ name: "Mohit Kumar Goyal" }],
  openGraph: {
    title: "Mohit Kumar Goyal | Software Engineer",
    description:
      "Building scalable backend systems & distributed platforms. 2+ years of experience in Java, Spring Boot, Kafka, AWS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Kumar Goyal | Software Engineer",
    description:
      "Building scalable backend systems & distributed platforms.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
