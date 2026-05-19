import { ArrowUpRight } from "lucide-react";
import { heroSocialLinks, type HeroSocialIconName } from "@/data/site";
import { HeroSocialIcon } from "../hero/HeroSocialIcon";
import { SectionReveal } from "../../shared/SectionReveal";

const contactDetails: Record<
  HeroSocialIconName,
  {
    value: string;
    label: string;
  }
> = {
  github: {
    value: "abdulazizyusupaliev",
    label: "GitHub",
  },
  linkedin: {
    value: "Abdulaziz Yusupaliev",
    label: "LinkedIn",
  },
  email: {
    value: "abdulazizyusupaliev009@gmail.com",
    label: "Email",
  },
  telegram: {
    value: "d_vaderrr",
    label: "Telegram",
  },
};

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="section-heading">
          <h2 className="section-kicker">Contact</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/58 sm:text-base">
            You can reach me here.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {heroSocialLinks.map((link, index) => {
            const detail = contactDetails[link.icon];

            return (
              <SectionReveal key={link.label} delay={index * 0.08}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group card-surface flex h-full items-center justify-between gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--hero-accent)]/40"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-white/90 transition group-hover:border-[var(--hero-accent)]/45 group-hover:bg-[var(--hero-accent)]/10">
                      <HeroSocialIcon
                        name={link.icon}
                        className="h-full w-full"
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                        {detail.label}
                      </p>
                      <p className="mt-2 break-words text-base font-medium text-white sm:text-lg">
                        {detail.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--hero-accent)]" />
                </a>
              </SectionReveal>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
