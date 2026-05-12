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
  period: string;
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
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulaziz-yusupaliev-521166377",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    href: "mailto:abdulazizyusupaliev009@gmail.com",
    icon: Mail,
  },
  {
    label: "Telegram",
    href: "https://t.me/d_vaderrr",
    icon: Send,
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Frontend Development Practice",
    type: "Personal Learning / Practice",
    period: "Current focus",
    description:
      "Building responsive layouts, reusable UI sections, and cleaner frontend workflows with a strong focus on readability, spacing, and polished interaction.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Engineering Learning Journey",
    type: "Technical Growth",
    period: "Ongoing",
    description:
      "Expanding from frontend work into Python-based data and model tooling, with attention to practical ML workflows and early deployment concepts.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
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
