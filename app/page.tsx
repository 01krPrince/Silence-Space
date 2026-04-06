import type { Metadata } from "next";
import TimeDisplay from "./components/TimeDisplay";
import Link from "next/link";

/* 🔥 SEO ONLY (no UI change) */
export const metadata: Metadata = {
  title: "Silence Space – Pause & Breathe",
  description:
    "A minimal space to pause, breathe, and relax your mind. Take a moment away from noise and reconnect with stillness.",
  keywords: [
    "meditation",
    "mindfulness",
    "relaxation",
    "mental peace",
    "calm app",
    "focus",
    "breathing space",
  ],
};

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black text-white">
      
      <h1 className="fade-in text-4xl font-light tracking-wide">
        You are here.
      </h1>

      {/* 🔥 hidden SEO boost (no visual change) */}
      <h2 className="sr-only">
        Meditation, mindfulness, relaxation and mental peace experience
      </h2>

      <p className="fade-in mt-4 text-sm opacity-50">
        Stay for a moment.
      </p>

      <div className="fade-in">
        <TimeDisplay />
      </div>

      {/* WHY PAGE LINK */}
      <Link 
        href="/why" 
        className="fade-in mt-10 text-xs opacity-40 hover:opacity-80 transition"
      >
        Why?
      </Link>

    </main>
  );
}