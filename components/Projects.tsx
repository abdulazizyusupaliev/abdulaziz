import { projectItems } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">
            The structure is ready for real project launches.
          </h2>
          <p className="section-copy">
            Projects are coming soon. This version keeps the section visible so
            the portfolio already reflects where frontend and AI engineering
            work will be published next.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projectItems.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="card-surface h-full p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/68">
                    {project.status}
                  </span>
                </div>

                <p className="mt-6 text-base leading-8 text-white/66">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/78"
                    >
                      {item}
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
