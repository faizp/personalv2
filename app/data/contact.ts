import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface ContactLink {
  name: string;
  href: string;
  value: string;
  icon: PhosphorIcon;
  description: string;
}

export interface Availability {
  timezone: string;
  location: string;
  status: string;
  response: string;
}

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:faizkizhisseri@gmail.com",
    value: "faizkizhisseri@gmail.com",
    icon: Envelope,
    description: "Direct email for inquiries",
  },
  {
    name: "GitHub",
    href: "https://github.com/faizp",
    value: "@faizp",
    icon: GithubLogo,
    description: "Open source projects",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/faiz-p",
    value: "@faiz-p",
    icon: LinkedinLogo,
    description: "Professional network",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/sanu_faiz",
    value: "@sanu_faiz",
    icon: XLogo,
    description: "Tech thoughts & updates",
  },
];

export const availability: Availability = {
  timezone: "IST (UTC+5:30)",
  location: "Bengaluru, India",
  status: "Open to opportunities",
  response: "Usually within 24 hours",
};

export const interests = [
  "Backend Engineering",
  "Video Platforms",
  "AI/ML Infra",
  "Cloud & DevOps",
  "Technical Leadership",
  "Open Source",
];
