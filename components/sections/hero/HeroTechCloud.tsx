"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Cpu, GitBranch, Sparkles } from "lucide-react";
import { skillIcons, type SkillIcon } from "@/data/skills";

const featuredTools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Scikit-learn",
];

const focusItems = [
  {
    icon: Code2,
    title: "Interface craft",
    text: "Responsive layouts, clean components, and readable UI systems.",
  },
  {
    icon: Cpu,
    title: "AI learning",
    text: "Python, data tooling, ML basics, and practical model workflows.",
  },
  {
    icon: GitBranch,
    title: "Shipping habits",
    text: "Git, GitHub, Vercel, typed code, and portfolio-ready projects.",
  },
];

function renderSkillIcon(skill: SkillIcon) {
  if (skill.icon) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d={skill.icon.path} />
      </svg>
    );
  }

  if (skill.assetSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={skill.assetSrc} alt="" className="h-4 w-4 object-contain grayscale invert" />
    );
  }

  return <span className="font-display text-[0.58rem] font-bold">{skill.glyph}</span>;
}

export function HeroTechCloud() {
  const reduceMotion = useReducedMotion();
  const tools = featuredTools
    .map((name) => skillIcons.find((skill) => skill.name === name))
    .filter(Boolean) as SkillIcon[];

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[24rem] sm:max-w-[32rem]"
      aria-label="Developer snapshot"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1a1a]/92 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-5">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(212,160,23,0.13),transparent_28%),radial-gradient(circle_at_80%_84%,rgba(255,255,255,0.055),transparent_34%)]" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-lg font-semibold leading-none text-white">
              Current Focus
            </p>
            <p className="mt-1 max-w-[17rem] text-xs leading-5 text-white/46">
              Building NLP AI models and crafting clean React interfaces.
            </p>
          </div>
        </div>

        <div className="relative mt-5 rounded-[1.35rem] border border-white/10 bg-black/28 p-4">
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d4a017]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="ml-2 text-[0.65rem] font-medium text-white/34">
              portfolio.ts
            </span>
          </div>

          <pre className="overflow-hidden whitespace-pre-wrap font-mono text-[0.72rem] leading-6 text-white/64 sm:text-xs">
            <code>
              <span className="text-white/35">const</span>{" "}
              <span className="text-[#f4d37a]">craft</span>{" "}
              <span className="text-white/35">=</span> {"{"}
              {"\n  "}pixels:{" "}
              <span className="text-white">
                &quot;polished until quiet&quot;
              </span>
              ,
              {"\n  "}logic:{" "}
              <span className="text-white">
                &quot;typed, tested, intentional&quot;
              </span>
              ,
              {"\n  "}models:{" "}
              <span className="text-white">
                &quot;learning from real data&quot;
              </span>
              ,
              {"\n  "}mission:{" "}
              <span className="text-white">
                &quot;build useful things beautifully&quot;
              </span>
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        <div className="relative mt-4 grid gap-2 sm:grid-cols-3">
          {focusItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : index * 0.05,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-white/8 bg-white/[0.035] p-3"
              >
                <Icon className="h-4 w-4 text-[#d4a017]" />
                <p className="mt-3 text-sm font-semibold leading-tight text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.68rem] leading-4 text-white/44">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle,rgba(212,160,23,0.1),transparent_72%)] blur-2xl" />
    </motion.aside>
  );
}
