import { experienceItems } from "@/data/site";
import { SectionReveal } from "../../shared/SectionReveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="section-heading">
          <h2 className="section-kicker">Experience</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {experienceItems.map((item, index) => (
            <SectionReveal
              key={`${item.type}-${item.title}`}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="relative h-full pl-8 sm:pl-10">
                <div className="absolute bottom-6 left-2 top-6 w-px bg-gradient-to-b from-transparent via-[var(--hero-accent)]/70 to-transparent sm:left-3" />
                <div className="absolute left-0 top-8 size-4 rounded-full border border-[var(--hero-accent)] bg-background shadow-[0_0_24px_rgba(212,160,23,0.35)] sm:left-1" />

                <div className="card-surface h-full p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-[var(--hero-accent)]"
                          >
                            {item.type}
                          </a>
                        ) : (
                          item.type
                        )}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    {item.period ? (
                      <span className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/68">
                        {item.period}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-6 text-base leading-8 text-white/66">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/78"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
