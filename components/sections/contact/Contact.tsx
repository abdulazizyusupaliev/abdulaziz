import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/data/site";
import { SectionReveal } from "../../shared/SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="space-y-12">
          <div className="section-heading">
            <h2 className="section-kicker">Contact</h2>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group card-surface flex items-center justify-between gap-4 p-5 transition hover:bg-white hover:text-black"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 group-hover:border-black/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-white/42 group-hover:text-black/45">
                        {link.label}
                      </p>
                      <p className="mt-2 text-base text-white transition group-hover:text-black">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-45" />
                </a>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
