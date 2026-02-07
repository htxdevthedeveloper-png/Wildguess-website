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

export const metadata: Metadata = {
  title: "WildGuess - AI Animal Guessing Game",
  description: "Guess animals from AI-generated images and learn fascinating wildlife facts. Download WildGuess today.",
  openGraph: {
    title: "WildGuess - AI Animal Guessing Game",
    description: "Guess animals from AI-generated images and learn fascinating wildlife facts.",
    url: "https://wildguess-website.vercel.app",
    siteName: "WildGuess",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
