import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderGit2,
  Mail,
  Network,
  Send,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
};

export type ExperienceItem = {
  title: string;
  type: string;
  companyUrl?: string;
  period?: string;
  description: string;
  tech: string[];
};

export type ProjectItem = {
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
};

export type EducationItem = {
  title: string;
  focus: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type HeroSocialIconName = "github" | "linkedin" | "telegram" | "email";

export type HeroSocialLink = {
  label: string;
  href: string;
  icon: HeroSocialIconName;
};

export const siteMetadata = {
  title: "Abdulaziz Yusupaliev | Frontend Developer & AI Engineer",
  description:
    "Personal portfolio website of Abdulaziz Yusupaliev, a frontend developer from Tashkent focused on modern interfaces and practical AI engineering growth.",
  keywords: [
    "Abdulaziz Yusupaliev",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "AI Engineer",
    "Machine Learning",
    "Tashkent",
    "Uzbekistan",
  ],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const greetings = [
  "Hello",
  "\u041F\u0440\u0438\u0432\u0435\u0442",
  "Salom",
  "Assalomu alaykum",
  "Hi",
];

export const heroHighlights = [
  "Clean interface systems",
  "Responsive component architecture",
  "Practical AI and ML exploration",
];

export const heroDescription =
  "I build clean, responsive web interfaces with React, Next.js, TypeScript, and Tailwind CSS while growing into AI engineering, machine learning, and practical Python tooling.";

export const heroLocation = "Tashkent, Uzbekistan";

export const heroSocialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abdulazizyusupaliev",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulaziz-yusupaliev-521166377",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:abdulazizyusupaliev009@gmail.com",
    icon: "email",
  },
  {
    label: "Telegram",
    href: "https://t.me/d_vaderrr",
    icon: "telegram",
  },
] satisfies HeroSocialLink[];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Frontend Engineer",
    type: "Hiwelcome.uz",
    companyUrl: "https://hiwelcome.uz",
    period: "January 2026 - Present",
    description:
      "Worked as a frontend engineer, building responsive website interfaces with React and Next.js. Focused on clean component structure, TypeScript implementation, and Tailwind CSS styling.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    type: "Delever.uz",
    companyUrl: "https://delever.uz",
    period: "February 2026",
    description:
      "Worked as a frontend developer, building and improving responsive website interfaces with React and Next.js. Focused on clean component structure, Tailwind CSS styling, and practical frontend implementation in a team environment.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Frontend Project Pipeline",
    category: "React / Next.js",
    status: "Planned",
    description:
      "A future set of UI-focused projects that will showcase clean implementation, responsive design, and component-driven frontend development.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Engineering Experiments",
    category: "AI / Machine Learning",
    status: "In preparation",
    description:
      "Upcoming practical projects around data analysis, ML fundamentals, and lightweight model deployment that document technical growth over time.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "Independent Technical Learning",
    focus: "Frontend Development & AI Engineering",
    description:
      "Student based in Tashkent, Uzbekistan, studying modern web development alongside practical AI engineering and machine learning fundamentals.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "abdulazizyusupaliev009@gmail.com",
    href: "mailto:abdulazizyusupaliev009@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "abdulazizyusupaliev",
    href: "https://github.com/abdulazizyusupaliev",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    value: "Abdulaziz Yusupaliev",
    href: "https://www.linkedin.com/in/abdulaziz-yusupaliev-521166377",
    icon: BriefcaseBusiness,
  },
  {
    label: "Telegram",
    value: "d_vaderrr",
    href: "https://t.me/d_vaderrr",
    icon: Send,
  },
];

export const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abdulazizyusupaliev",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulaziz-yusupaliev-521166377",
    icon: Network,
  },
  {
    label: "Email",
    href: "mailto:abdulazizyusupaliev009@gmail.com",
    icon: ArrowUpRight,
  },
];
