import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/55">
          © 2026 Abdulaziz Yusupaliev. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {footerLinks.map((link) => {
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
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/72 transition hover:bg-white hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
