"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillIcons } from "@/data/skills";

const skillPositions = [
  { left: "15%", top: "20%", tone: "primary", size: "lg", delay: 0 },
  { left: "35%", top: "17%", tone: "soft", size: "md", delay: 0.12 },
  { left: "55%", top: "20%", tone: "soft", size: "md", delay: 0.24 },
  { left: "76%", top: "17%", tone: "soft", size: "md", delay: 0.18 },
  { left: "88%", top: "36%", tone: "dim", size: "sm", delay: 0.3 },
  { left: "66%", top: "38%", tone: "dim", size: "sm", delay: 0.42 },
  { left: "45%", top: "39%", tone: "soft", size: "md", delay: 0.36 },
  { left: "24%", top: "40%", tone: "dim", size: "sm", delay: 0.48 },
  { left: "12%", top: "58%", tone: "primary", size: "lg", delay: 0.08 },
  { left: "33%", top: "61%", tone: "dim", size: "sm", delay: 0.54 },
  { left: "55%", top: "58%", tone: "soft", size: "md", delay: 0.22 },
  { left: "76%", top: "61%", tone: "dim", size: "sm", delay: 0.34 },
  { left: "89%", top: "77%", tone: "dim", size: "sm", delay: 0.46 },
  { left: "68%", top: "80%", tone: "soft", size: "md", delay: 0.58 },
  { left: "47%", top: "78%", tone: "soft", size: "md", delay: 0.28 },
  { left: "27%", top: "81%", tone: "soft", size: "md", delay: 0.4 },
  { left: "10%", top: "80%", tone: "dim", size: "sm", delay: 0.52 },
] as const;

const sizeClasses = {
  sm: {
    tile: "h-9 w-9 sm:h-11 sm:w-11",
    icon: "h-[1.1rem] w-[1.1rem] sm:h-6 sm:w-6",
  },
  md: {
    tile: "h-10 w-10 sm:h-13 sm:w-13",
    icon: "h-5 w-5 sm:h-7 sm:w-7",
  },
  lg: {
    tile: "h-12 w-12 sm:h-16 sm:w-16",
    icon: "h-6 w-6 sm:h-8 sm:w-8",
  },
};

const toneClasses = {
  primary:
    "border-[#d4a017]/35 bg-[#d4a017]/12 text-white shadow-[0_0_34px_rgba(212,160,23,0.18)]",
  soft: "border-white/12 bg-white/[0.06] text-white/88",
  dim: "border-white/8 bg-white/[0.035] text-white/72",
};

export function HeroTechCloud() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative mx-auto h-[24rem] w-full max-w-[23rem] sm:h-[31rem] sm:max-w-[31rem]"
      aria-label="Floating technology skills box"
      role="img"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a1a1a] shadow-[0_34px_100px_rgba(0,0,0,0.34)]">
        <div className="hero-grid absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.13),transparent_24%),radial-gradient(circle_at_72%_72%,rgba(212,160,23,0.13),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/10" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-[#d4a017]/18 to-transparent" />
        <div className="pointer-events-none absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute left-5 top-5 h-2 w-2 rounded-full bg-[#d4a017] shadow-[0_0_20px_rgba(212,160,23,0.5)]" />
        <div className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-white/28" />

        {skillIcons.map((skill, index) => {
          const position = skillPositions[index % skillPositions.length];
          const size = sizeClasses[position.size];

          return (
            <div
              key={skill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: position.left, top: position.top }}
            >
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.85, rotate: -4 }
                }
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        scale: 1,
                        x: [0, 3, 0, -3, 0],
                        y: [0, -10, 0, 8, 0],
                        rotate: [-2, 2, -1, -2],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: { duration: 0.25, delay: position.delay },
                        scale: { duration: 0.35, delay: position.delay },
                        x: {
                          duration: 6.8 + index * 0.12,
                          delay: position.delay,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        y: {
                          duration: 7.5 + index * 0.1,
                          delay: position.delay,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 8.8 + index * 0.08,
                          delay: position.delay,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }
                }
                className={`${size.tile} ${toneClasses[position.tone]} group relative flex items-center justify-center rounded-2xl border shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-md transition hover:border-[#d4a017]/55 hover:bg-white/[0.085] hover:text-white`}
                title={skill.name}
                aria-label={skill.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`${size.icon} fill-current`}
                >
                  <path d={skill.icon.path} />
                </svg>
                <span className="pointer-events-none absolute top-[calc(100%+0.45rem)] z-20 whitespace-nowrap rounded-full border border-white/10 bg-neutral-950/95 px-2 py-1 text-[0.62rem] font-medium text-white/80 opacity-0 shadow-lg shadow-black/30 transition group-hover:opacity-100">
                  {skill.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(212,160,23,0.14),transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
