"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroTechCloud } from "@/data/site";

export function HeroTechCloud() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#040404]">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {heroTechCloud.map((item) => (
        <motion.div
          key={item.name}
          className="absolute rounded-2xl border border-white/8 bg-white/[0.03] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          style={{
            left: item.x,
            top: item.y,
            opacity: item.opacity,
            color: "rgba(255,255,255,0.92)",
          }}
          initial={reduceMotion ? false : { y: 0, rotate: item.rotate, opacity: item.opacity }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -10, 0, 8, 0],
                  x: [0, 4, 0, -4, 0],
                  rotate: [item.rotate, item.rotate + 2, item.rotate - 2, item.rotate],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: item.duration,
                  delay: item.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
          aria-label={item.name}
          title={item.name}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="fill-current"
            style={{ width: item.size, height: item.size }}
          >
            <path d={item.icon.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
