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
  metadataBase: new URL("https://silence-space.vercel.app"),

  title: {
    default: "Silence Space – Pause & Breathe",
    template: "%s | Silence Space",
  },

  description:
    "A minimal space to pause, breathe, and disconnect from noise. Calm your mind in seconds.",

  keywords: [
    "meditation",
    "calm app",
    "mindfulness",
    "relaxation",
    "focus",
    "minimal app",
    "mental peace",
  ],

  authors: [{ name: "Prince Kumar" }],
  creator: "Prince Kumar",

  openGraph: {
    title: "Silence Space – Pause & Breathe",
    description:
      "Step into silence. A minimal experience to slow down your thoughts.",
    url: "https://silence-space.vercel.app",
    siteName: "Silence Space",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Silence Space – Pause & Breathe",
    description:
      "A minimal place to slow down, breathe, and reset your mind.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-black`}
    >
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}