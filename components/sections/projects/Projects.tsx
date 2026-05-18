"use client";

import {
  useEffect,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight, FolderGit2, Globe, X } from "lucide-react";
import { projectItems, type ProjectItem } from "@/data/site";
import { SectionReveal } from "../../shared/SectionReveal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const openProject = (project: ProjectItem) => setSelectedProject(project);

  const handleCardKeyDown =
    (project: ProjectItem) => (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(project);
      }
    };

  return (
    <section id="projects" className="border-t border-white/10 px-4 py-20 sm:px-6">
      <SectionReveal className="mx-auto w-full max-w-6xl">
        <div className="section-heading">
          <h2 className="section-kicker">Projects</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projectItems.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article
                role="button"
                tabIndex={0}
                onClick={() => openProject(project)}
                onKeyDown={handleCardKeyDown(project)}
                className="card-surface flex h-full cursor-pointer flex-col p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--hero-accent)]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
                aria-label={`Open details for ${project.title}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[var(--hero-accent)]/25 bg-[var(--hero-accent)]/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-[var(--hero-accent)]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-6 text-base leading-8 text-white/66">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/78"
                    >
                      {item}
                    </span>
                  ))}
                  {project.stack.length > 5 ? (
                    <span className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/52">
                      +{project.stack.length - 5} more
                    </span>
                  ) : null}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3">
                    <ProjectLink
                      href={project.repoUrl}
                      icon={<FolderGit2 size={16} />}
                      label="Repository"
                    />
                    {project.liveUrl ? (
                      <ProjectLink
                        href={project.liveUrl}
                        icon={<Globe size={16} />}
                        label="Website"
                      />
                    ) : null}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/56">
                    View details
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>

      <ProjectDrawer
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/78 transition hover:border-[var(--hero-accent)]/50 hover:text-white"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ProjectDrawer({
  item,
  onClose,
}: {
  item: ProjectItem | null;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        item ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!item}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 z-0 cursor-default bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          item ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close project details"
      />

      <aside
        className={`absolute bottom-0 right-0 top-0 z-10 flex h-full w-full max-w-xl flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#171717] p-6 shadow-[-28px_0_70px_rgba(0,0,0,0.45)] transition-transform duration-300 touch-pan-y sm:p-8 ${
          item ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={item ? `${item.title} details` : "Project details"}
      >
        {item ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--hero-accent)]">
                  {item.category}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/48">
                  {item.status}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-[var(--hero-accent)]/50 hover:text-white"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-8 text-base leading-8 text-white/68">
              {item.description}
            </p>

            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-white">
                What&apos;s In It
              </h4>
              <div className="mt-4 grid gap-3">
                {item.details.map((detail) => (
                  <p
                    key={detail}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/68"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-white">
                Tech Stack
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--hero-accent)]/25 bg-[var(--hero-accent)]/10 px-3 py-2 text-sm text-white/82"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/78 transition hover:border-[var(--hero-accent)]/50 hover:text-white"
              >
                <FolderGit2 size={16} />
                Repository
              </a>

              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--hero-accent)] px-5 py-3 text-sm font-medium text-black transition hover:brightness-105"
                >
                  <Globe size={16} />
                  Website
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </aside>
    </div>
  );
}
