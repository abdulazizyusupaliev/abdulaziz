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
} from "simple-icons";

export type SkillIcon = {
  name: string;
  icon: SimpleIcon;
};

export type PortfolioSkill = {
  name: string;
  shortName?: string;
  assetSrc?: string;
  assetWidth?: number;
  assetHeight?: number;
  fallbackLabel?: string;
  fallbackColor?: string;
  showLabel?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: PortfolioSkill[];
};

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

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", showLabel: true },
      { name: "TypeScript", showLabel: true },
      { name: "Python", showLabel: true },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", showLabel: true },
      { name: "Next.js", shortName: "NextJS", showLabel: true },
      { name: "HTML5", shortName: "HTML", showLabel: true },
      { name: "CSS3", shortName: "CSS", showLabel: true },
      { name: "Tailwind CSS", shortName: "Tailwind", showLabel: true },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", showLabel: true },
      { name: "GitHub", shortName: "Github", showLabel: true },
      { name: "GitLab", showLabel: true },
      { name: "Bootstrap", showLabel: true },
      { name: "Pug", showLabel: true },
      { name: "npm", showLabel: true },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Pandas", showLabel: true },
      { name: "Scikit-learn", showLabel: true },
      {
        name: "Matplotlib",
        assetSrc: "/matplotlib-logo.svg",
        assetWidth: 80,
        assetHeight: 80,
        showLabel: true,
      },
      {
        name: "Seaborn",
        assetSrc: "/seaborn-logo.svg",
        assetWidth: 150,
        assetHeight: 44,
        showLabel: true,
      },
      { name: "Python", showLabel: true },
    ],
  },
];
