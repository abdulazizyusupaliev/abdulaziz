import { skillCategories } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Skills &amp; Tools</p>
          <h2 className="section-title">
            The technologies shaping my current frontend and AI/ML path.
          </h2>
          <p className="section-copy">
            I focus on modern interface development first, then extend that
            foundation into data, machine learning, and practical deployment
            workflows.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SectionReveal
              key={category.title}
              delay={index * 0.05}
              className="h-full"
            >
              <article className="card-surface h-full p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-white/46">
                  {category.title}
                </p>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {category.summary}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/10 pb-3 text-sm text-white/82"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
