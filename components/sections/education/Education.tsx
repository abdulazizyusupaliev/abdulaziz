import { educationItems } from "@/data/site";
import { SectionReveal } from "../../shared/SectionReveal";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-4xl">
        <div className="section-heading">
          <h2 className="section-kicker">Education</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white/58 sm:text-base">
            My learning path started with web fundamentals, moved into modern
            frontend development, and now continues into AI and machine
            learning.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {educationItems.map((item, index) => (
            <SectionReveal
              key={`${item.provider}-${item.period}-${index}`}
              delay={index * 0.08}
            >
              <article className="grid gap-6 text-white/72 sm:grid-cols-[9rem_1fr] sm:gap-10">
                <div>
                  <p className="font-display text-4xl font-semibold text-white/12 sm:text-5xl">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                    {item.period}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                        {item.provider}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-white/48">{item.location}</p>
                  </div>

                  <p className="mt-6 text-sm leading-8 sm:text-base">
                    {item.description}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                    <span className="font-medium text-white">Focus:</span>{" "}
                    {item.focus}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/58 sm:text-base">
                    <span className="font-medium text-white">Tools studied:</span>{" "}
                    {item.subjects.join(", ")}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
