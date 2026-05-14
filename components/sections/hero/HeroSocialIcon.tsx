import { Mail } from "lucide-react";
import { siGithub, siTelegram } from "simple-icons";

import type { HeroSocialIconName } from "@/data/site";

type HeroSocialIconProps = {
  name: HeroSocialIconName;
  className?: string;
};

function SimpleIcon({
  icon,
  className,
}: {
  icon: { path: string };
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.75" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.1 10.2h2.05v6.1H7.1z" />
      <circle cx="8.13" cy="7.55" r="1.03" />
      <path d="M11.65 10.2h1.96v.93h.03c.46-.72 1.26-1.1 2.32-1.1 2.05 0 2.88 1.18 2.88 3.4v2.87h-2.12v-2.55c0-.95-.03-1.74-1.06-1.74-1.08 0-1.58.72-1.58 1.7v2.59h-2.43z" />
    </svg>
  );
}

export function HeroSocialIcon({ name, className }: HeroSocialIconProps) {
  if (name === "github") {
    return <SimpleIcon icon={siGithub} className={className} />;
  }

  if (name === "linkedin") {
    return <LinkedInIcon className={className} />;
  }

  if (name === "telegram") {
    return <SimpleIcon icon={siTelegram} className={className} />;
  }

  return <Mail className={className} />;
}
