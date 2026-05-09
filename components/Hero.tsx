"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import {
  greetings,
  heroDescription,
  heroLocation,
  heroSocialLinks,
} from "@/data/site";
import { HeroTechCloud } from "./HeroTechCloud";
import { HeroWaveBackground } from "./HeroWaveBackground";
import TextType from "./TextType";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length);
    }, 1850);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:pb-32"
    >
      <HeroWaveBackground />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),transparent_24%,transparent_76%,rgba(0,0,0,0.18))]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center">
        <div className="space-y-9">
          <div className="space-y-5">
            <div className="min-h-9 text-sm font-medium uppercase tracking-[0.32em] text-white/55 sm:text-base">
              <AnimatePresence mode="wait">
                <motion.span
                  key={greetings[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="inline-block"
                  dir="ltr"
                >
                  {greetings[index]}
                </motion.span>
              </AnimatePresence>
              <span className="blink-cursor" aria-hidden="true">
                |
              </span>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-[#d4a017]" />
                <span>{heroLocation}</span>
              </div>

              <h1 className="font-display max-w-4xl text-6xl">
                <TextType
                  text={["Abdulaziz", "Yusupaliev"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.5}
                />
              </h1>

              <p className="font-display max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.15rem]">
                <span className="hero-accent">Frontend Developer</span>
                <span className="text-white/68"> &amp; </span>
                <span className="hero-accent">AI Engineering Learner</span>
              </p>

              <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                {heroDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {heroSocialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/86 transition hover:border-[#d4a017]/45 hover:bg-white/[0.07] hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}

            <a
              href="/abdulaziz-yusupaliev-resume.txt"
              download
              className="ml-0 inline-flex items-center gap-2 rounded-2xl bg-[#d4a017] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e1b540] sm:ml-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_68%)] blur-3xl" />
          <HeroTechCloud />
        </div>
      </div>
    </section>
  );
}
