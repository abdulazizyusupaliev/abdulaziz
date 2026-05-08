import { educationItems } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">Education</p>
            <h2 className="section-title">
              A student-led path focused on strong technical growth.
            </h2>
            <p className="section-copy">
              The emphasis is on independent learning, practical repetition,
              and building a foundation that can expand into internships,
              university applications, and future technical work.
            </p>
          </div>

          <div className="grid gap-4">
            {educationItems.map((item) => (
              <article key={item.title} className="card-surface p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/46">
                  {item.focus}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-6 text-base leading-8 text-white/66">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
