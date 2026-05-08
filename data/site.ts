import type { SimpleIcon } from "simple-icons";
import {
  siBootstrap,
  siCss,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNpm,
  siNumpy,
  siPandas,
  siPug,
  siPython,
  siReact,
  siScikitlearn,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVscodium,
} from "simple-icons";
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

export type SkillCategory = {
  title: string;
  summary: string;
  items: string[];
};

export type SkillIcon = {
  name: string;
  icon: SimpleIcon;
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

export type HeroTechIcon = {
  name: string;
  icon: SimpleIcon;
  size: number;
  x: string;
  y: string;
  opacity: number;
  delay: number;
  duration: number;
  rotate: number;
};

export const siteMetadata = {
  title: "Abdulaziz Yusupaliev | Frontend Developer & Beginner AI Engineer",
  description:
    "Personal portfolio website of Abdulaziz Yusupaliev, a frontend developer from Tashkent learning AI engineering and machine learning.",
  keywords: [
    "Abdulaziz Yusupaliev",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "AI Engineering",
    "Machine Learning",
    "Tashkent",
    "Uzbekistan",
  ],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const greetings = [
  "Hello",
  "\u041F\u0440\u0438\u0432\u0435\u0442",
  "\u0645\u0631\u062D\u0628\u0627",
  "Salom",
  "Hola",
];

export const heroHighlights = [
  "Clean interface systems",
  "Responsive component architecture",
  "Practical AI and ML exploration",
];

export const heroDescription =
  "I build modern web interfaces with React, Next.js, TypeScript, and Tailwind CSS while expanding into AI engineering, machine learning, and practical Python tooling.";

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

export const heroTechCloud: HeroTechIcon[] = [
  { name: "React", icon: siReact, size: 42, x: "14%", y: "10%", opacity: 0.92, delay: 0, duration: 7.2, rotate: -6 },
  { name: "Next.js", icon: siNextdotjs, size: 38, x: "58%", y: "8%", opacity: 0.9, delay: 0.4, duration: 8.1, rotate: 4 },
  { name: "JavaScript", icon: siJavascript, size: 34, x: "78%", y: "18%", opacity: 0.82, delay: 0.2, duration: 7.8, rotate: -3 },
  { name: "TypeScript", icon: siTypescript, size: 40, x: "30%", y: "20%", opacity: 0.86, delay: 0.7, duration: 8.6, rotate: 6 },
  { name: "HTML", icon: siHtml5, size: 34, x: "8%", y: "34%", opacity: 0.76, delay: 0.5, duration: 7.5, rotate: -8 },
  { name: "CSS", icon: siCss, size: 36, x: "44%", y: "30%", opacity: 0.78, delay: 0.1, duration: 8.8, rotate: 5 },
  { name: "Tailwind", icon: siTailwindcss, size: 34, x: "70%", y: "34%", opacity: 0.8, delay: 0.9, duration: 7.9, rotate: -5 },
  { name: "GitHub", icon: siGithub, size: 36, x: "22%", y: "48%", opacity: 0.68, delay: 0.3, duration: 8.4, rotate: 4 },
  { name: "Git", icon: siGit, size: 32, x: "85%", y: "44%", opacity: 0.72, delay: 0.6, duration: 7.1, rotate: -4 },
  { name: "Python", icon: siPython, size: 40, x: "6%", y: "64%", opacity: 0.74, delay: 0.4, duration: 8.9, rotate: 6 },
  { name: "Pandas", icon: siPandas, size: 30, x: "37%", y: "58%", opacity: 0.62, delay: 0.8, duration: 7.7, rotate: -6 },
  { name: "NumPy", icon: siNumpy, size: 34, x: "58%", y: "62%", opacity: 0.72, delay: 0.5, duration: 8.2, rotate: 5 },
  { name: "Scikit-learn", icon: siScikitlearn, size: 36, x: "78%", y: "60%", opacity: 0.78, delay: 0.2, duration: 7.4, rotate: -5 },
  { name: "Vercel", icon: siVercel, size: 28, x: "26%", y: "78%", opacity: 0.56, delay: 0.7, duration: 8.5, rotate: 2 },
  { name: "VS Code", icon: siVscodium, size: 36, x: "64%", y: "80%", opacity: 0.7, delay: 0.9, duration: 7.6, rotate: -7 },
];

export const skillIcons: SkillIcon[] = [
  { name: "React", icon: siReact },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "HTML5", icon: siHtml5 },
  { name: "CSS3", icon: siCss },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Bootstrap", icon: siBootstrap },
  { name: "Pug", icon: siPug },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "GitLab", icon: siGitlab },
  { name: "npm", icon: siNpm },
  { name: "Vercel", icon: siVercel },
  { name: "Python", icon: siPython },
  { name: "Pandas", icon: siPandas },
  { name: "NumPy", icon: siNumpy },
  { name: "Scikit-learn", icon: siScikitlearn },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    summary: "Core languages for modern frontend work and AI/ML learning.",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    summary: "Frameworks and UI tools used to build modern web interfaces.",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Pug"],
  },
  {
    title: "Developer Tools",
    summary: "Workflow tools for version control, packages, and deployment.",
    items: ["Git", "GitHub", "GitLab", "npm", "Vercel"],
  },
  {
    title: "AI / ML",
    summary: "Current learning path around data, models, and practical deployment.",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine learning fundamentals",
      "ML deployment basics",
      "AI engineering basics",
    ],
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
