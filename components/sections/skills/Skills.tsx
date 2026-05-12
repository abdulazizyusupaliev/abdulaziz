"use client";

import Image from "next/image";
import type { SimpleIcon } from "simple-icons";
import { type PortfolioSkill, skillGroups, skillIcons } from "@/data/skills";
import { SectionReveal } from "../../shared/SectionReveal";

function findSkillIcon(name: string) {
  return skillIcons.find((skill) => skill.name === name)?.icon;
}

function getIconColor(icon: SimpleIcon) {
  return icon.hex.toLowerCase() === "000000" ? "#ffffff" : `#${icon.hex}`;
}

function BrandSkillTile({ skill }: { skill: PortfolioSkill }) {
  const icon = findSkillIcon(skill.name);
  const shouldShowLabel = Boolean(skill.showLabel);

  if (skill.assetSrc) {
    return (
      <div
        className="group flex min-h-[5.5rem] flex-col items-center justify-start text-center"
        title={skill.name}
        aria-label={skill.name}
      >
        <div className="flex h-20 w-full items-center justify-center transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:h-24">
          <Image
            src={skill.assetSrc}
            alt={`${skill.name} logo`}
            width={skill.assetWidth ?? 96}
            height={skill.assetHeight ?? 96}
            className="h-auto max-h-16 w-auto max-w-full object-contain sm:max-h-20"
            unoptimized
          />
        </div>
        {shouldShowLabel ? (
          <span className="mt-3 text-sm font-medium leading-none text-white/72 sm:text-base">
            {skill.shortName ?? skill.name}
          </span>
        ) : null}
      </div>
    );
  }

  if (!icon) {
    return (
      <div
        className="group flex min-h-[5.5rem] flex-col items-center justify-start text-center"
        title={skill.name}
        aria-label={skill.name}
      >
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] font-display text-2xl font-bold text-white shadow-[0_14px_22px_rgba(0,0,0,0.42)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:h-24 sm:w-24 sm:text-3xl"
          style={{ color: skill.fallbackColor ?? "#ffffff" }}
        >
          {skill.fallbackLabel ?? skill.name.slice(0, 2)}
        </div>
        {shouldShowLabel ? (
          <span className="mt-3 text-sm font-medium leading-none text-white/72 sm:text-base">
            {skill.shortName ?? skill.name}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="group flex min-h-[5.5rem] flex-col items-center justify-start text-center"
      title={skill.name}
      aria-label={skill.name}
    >
      <div className="flex h-20 w-20 items-center justify-center transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:h-24 sm:w-24">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-16 w-16 fill-current drop-shadow-[0_14px_22px_rgba(0,0,0,0.42)] sm:h-20 sm:w-20"
          style={{ color: getIconColor(icon) }}
        >
          <path d={icon.path} />
        </svg>
      </div>
      {shouldShowLabel ? (
        <span className="mt-3 text-sm font-medium leading-none text-white/72 sm:text-base">
          {skill.shortName ?? skill.name}
        </span>
      ) : null}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-[#161616] px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <section key={group.title} aria-labelledby={`${group.title}-skills`}>
              <h3
                id={`${group.title}-skills`}
                className="font-display text-2xl text-center font-bold tracking-[-0.03em] text-white sm:text-3xl"
              >
                {group.title}
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-9">
                {group.skills.map((skill) => (
                  <BrandSkillTile key={skill.name} skill={skill} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
