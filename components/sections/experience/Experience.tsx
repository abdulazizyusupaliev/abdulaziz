import { experienceItems } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "../../shared/SectionReveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-4xl">
        <div className="section-heading">
          <h2 className="section-kicker">Experience</h2>
        </div>

        <div className="mt-12 space-y-12">
          {experienceItems.map((item, index) => (
            <SectionReveal
              key={`${item.title}-${item.type}-${index}`}
              delay={index * 0.08}
              className="border-l border-white/12 pl-5 sm:pl-7"
            >
              <article className="text-white/72">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                  {item.type}
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/48 sm:text-base">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      {item.type}
                    </a>
                  ) : (
                    item.type
                  )}
                  {item.period ? ` | ${item.period}` : null}
                </p>

                <p className="mt-5 text-sm leading-8 sm:text-base">
                  {item.description}
                </p>

                {item.companyUrl ? (
                  <div className="mt-6">
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--hero-accent)] px-5 py-3 text-sm font-medium text-black transition hover:brightness-105"
                    >
                      Visit the website
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                ) : null}

                <div className="mt-6">
                  <h4 className="font-display text-base font-semibold text-white">
                    Key contributions
                  </h4>

                  <ul className="mt-3 space-y-3 text-sm leading-7 sm:text-base">
                    {item.details.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="before:mr-3 before:text-[var(--hero-accent)] before:content-['-']"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/62 sm:text-base">
                  <span className="font-medium text-white">Technologies:</span>{" "}
                  {item.tech.join(", ")}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
