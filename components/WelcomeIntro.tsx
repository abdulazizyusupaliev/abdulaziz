"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { greetings } from "@/data/site";

const STEP_MS = 520;
const EXIT_MS = 450;

export function WelcomeIntro() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const totalDuration = useMemo(() => {
    if (reduceMotion) {
      return 1700;
    }

    return greetings.length * STEP_MS + EXIT_MS;
  }, [reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (!reduceMotion) {
      const intervalId = window.setInterval(() => {
        setIndex((current) => (current + 1) % greetings.length);
      }, STEP_MS);

      const closeId = window.setTimeout(() => {
        window.clearInterval(intervalId);
        setIsVisible(false);
      }, totalDuration);

      return () => {
        document.body.style.overflow = "";
        window.clearInterval(intervalId);
        window.clearTimeout(closeId);
      };
    }

    const closeId = window.setTimeout(() => {
      setIsVisible(false);
    }, totalDuration);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(closeId);
    };
  }, [reduceMotion, totalDuration]);

  useEffect(() => {
    if (!isVisible) {
      const releaseId = window.setTimeout(() => {
        document.body.style.overflow = "";
      }, 700);

      return () => window.clearTimeout(releaseId);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
          }
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          aria-label="Welcome intro"
        >
          <div className="flex flex-col items-center gap-8 px-6 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-white/40">
              Welcome
            </p>

            <div className="min-h-[5.5rem] sm:min-h-[7rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={greetings[index]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
                  dir={index === 2 ? "rtl" : "ltr"}
                >
                  {greetings[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
