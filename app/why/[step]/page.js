"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const slides = [
  "You don’t need to do anything right now. Just being here is enough.",
  "Most of your life is spent reacting. To screens, to sounds, to expectations that were never yours.",
  "Silence feels uncomfortable at first, not because it is empty, but because it is honest.",
  "When nothing is happening, you finally begin to notice everything that is.",
  "You are not behind in life. You are just moving at your own pace, and that is completely valid.",
  "There is no urgency in this moment. The pressure you feel is often borrowed, not real.",
  "You don’t have to become anything right now. You already are.",
  "Thoughts will come and go. You don’t have to follow every one of them.",
  "Stillness is not the absence of movement. It is the absence of resistance.",
  "You are allowed to pause without feeling guilty about it.",
  "Not everything needs a response. Not everything needs your energy.",
  "The world will continue even if you take a moment for yourself.",
  "You are not missing out. You are choosing peace.",
  "Breathe slowly. There is nowhere else you need to be right now.",
  "Stay here for one more moment. That is enough."
];

export default function SlidePage() {
  const params = useParams();
  const step = parseInt(params.step);
  const router = useRouter();

  if (isNaN(step) || step < 0 || step >= slides.length) {
    return (
      <main className="h-screen flex items-center justify-center bg-black text-white">
        <Link href="/" className="text-sm opacity-60 hover:opacity-100">
          Go Home
        </Link>
      </main>
    );
  }

  return (
    <main className="h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      {/* 🔥 hidden SEO heading (no UI change) */}
      <h2 className="sr-only">
        Mindfulness step {step + 1} for relaxation and mental clarity
      </h2>

      {/* TEXT */}
      <h1 className="text-2xl md:text-3xl font-light max-w-2xl leading-relaxed fade-in">
        {slides[step]}
      </h1>

      {/* ACTION ROW */}
      <div className="mt-10 flex items-center gap-6">
        
        <Link 
          href="/" 
          className="text-xs border px-4 py-2 opacity-60 hover:opacity-100 transition"
        >
          Home
        </Link>

        <button
          onClick={() => router.push(`/why/${step + 1}`)}
          disabled={step === slides.length - 1}
          className="text-xs border px-4 py-2 opacity-60 hover:opacity-100 disabled:opacity-20 transition"
        >
          {step === slides.length - 1 ? "End" : "Next"}
        </button>

      </div>

      {/* BUILT BY */}
      <a
        href="https://www.linkedin.com/in/01krprince/"
        target="_blank"
        className="absolute bottom-6 text-xs opacity-40 hover:opacity-80"
      >
        Built by Prince
      </a>

    </main>
  );
}