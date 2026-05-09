import { skillCategories, skillIcons } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Skills() {
  const iconMap = new Map(skillIcons.map((item) => [item.name, item.icon]));

  return (
    <section
      id="skills"
      className="border-t border-white/10 px-4 py-20 sm:px-6"
    >
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b10] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem]">
              Skills &amp; Tools
            </h2>
            <span className="hidden text-xs uppercase tracking-[0.28em] text-white/38 sm:block">
              Frontend + AI/ML
            </span>
          </div>

          <div className="px-5 py-8 sm:px-7 sm:py-9">
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5 xl:gap-8">
              {skillCategories.map((category) => (
                <section
                  key={category.title}
                  className="flex flex-col items-center"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.7rem]">
                    {category.title}
                  </h3>

                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-8">
                    {category.items.map((item) => {
                      const icon = iconMap.get(item);

                      if (!icon) {
                        return null;
                      }

                      return (
                        <div
                          key={item}
                          className="group flex flex-col items-center gap-3 text-center"
                          title={item}
                          aria-label={item}
                        >
                          <div
                            className="flex h-16 w-16 items-center justify-center transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                            style={{ color: `#${icon.hex}` }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-14 w-14 fill-current"
                            >
                              <path d={icon.path} />
                            </svg>
                          </div>
                          <span className="block text-sm text-white/82">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <ul className="space-y-3 text-base leading-8 text-white/92">
                <li>
                  <span className="font-semibold text-white">Languages:</span>{" "}
                  <span className="text-white/82">
                    JavaScript, TypeScript, Python.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-white">Frontend:</span>{" "}
                  <span className="text-white/82">React, Next.js.</span>
                </li>
                <li>
                  <span className="font-semibold text-white">Styling:</span>{" "}
                  <span className="text-white/82">
                    HTML5, CSS3, Tailwind CSS, Bootstrap, Pug.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-white">Tools:</span>{" "}
                  <span className="text-white/82">
                    Git, GitHub, GitLab, npm, Vercel.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-white">AI / ML:</span>{" "}
                  <span className="text-white/82">
                    Python, Pandas, NumPy, Scikit-learn.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
