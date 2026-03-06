import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import type { SectionId, PhosphorIcon } from "../types";

export interface NavLink {
  name: string;
  sectionId: SectionId;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: PhosphorIcon;
}

export const navLinks: NavLink[] = [
  { name: "Home", sectionId: "home" },
  { name: "About", sectionId: "about" },
  { name: "Experience", sectionId: "experience" },
  { name: "Projects", sectionId: "projects" },
  { name: "Community", sectionId: "community" },
  { name: "Contact", sectionId: "contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/faizp", icon: GithubLogo },
  { name: "LinkedIn", href: "https://linkedin.com/in/faiz-p", icon: LinkedinLogo },
  { name: "X", href: "https://x.com/sanu_faiz", icon: XLogo },
];
