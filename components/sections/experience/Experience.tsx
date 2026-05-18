"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { experienceItems, type ExperienceItem } from "@/data/site";
import { SectionReveal } from "../../shared/SectionReveal";

export function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selectedExperience) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedExperience]);

  return (
    <section
      id="experience"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="section-heading">
          <h2 className="section-kicker">Experience</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4">
          {experienceItems.map((item, index) => {
            const isCurrent = item.period?.includes("Present");

            return (
              <SectionReveal
                key={`${item.type}-${item.title}`}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelectedExperience(item)}
                    className="card-surface h-full cursor-pointer p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--hero-accent)]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                          {item.type}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.period ? (
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white/68">
                            {item.period}
                          </span>
                        ) : null}
                        {isCurrent ? (
                          <span className="rounded-full border border-[var(--hero-accent)]/35 bg-[var(--hero-accent)]/10 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[var(--hero-accent)]">
                            Current
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-2.5 py-1.5 text-xs text-white/78 sm:px-3 sm:py-2 sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </button>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </SectionReveal>

      <ExperienceDrawer
        item={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}

function ExperienceDrawer({
  item,
  onClose,
}: {
  item: ExperienceItem | null;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        item ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!item}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 z-0 cursor-default bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          item ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close experience details"
      />

      <aside
        className={`absolute bottom-0 right-0 top-0 z-10 flex h-full w-full max-w-xl flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#171717] p-6 shadow-[-28px_0_70px_rgba(0,0,0,0.45)] transition-transform duration-300 touch-pan-y sm:p-8 ${
          item ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={item ? `${item.title} details` : "Experience details"}
      >
        {item ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                  {item.type}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                {item.period ? (
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/48">
                    {item.period}
                  </p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-[var(--hero-accent)]/50 hover:text-white"
                aria-label="Close experience details"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-8 text-base leading-8 text-white/68">
              {item.description}
            </p>

            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-white">
                Full Explanation
              </h4>
              <div className="mt-4 grid gap-3">
                {item.details.map((detail) => (
                  <p
                    key={detail}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/68"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-white">
                Skills Used
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--hero-accent)]/25 bg-[var(--hero-accent)]/10 px-3 py-2 text-sm text-white/82"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {item.companyUrl ? (
              <div className="pt-4">
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/78 transition hover:border-[var(--hero-accent)]/50 hover:text-white"
                >
                  Visit company website
                </a>
              </div>
            ) : null}
          </>
        ) : null}
      </aside>
    </div>
  );
}
