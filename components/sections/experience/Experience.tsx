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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experienceItems.map((item, index) => (
            <SectionReveal
              key={item.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="card-surface h-full p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                      {item.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/68">
                    {item.period}
                  </span>
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
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
