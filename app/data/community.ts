import { Users, Heart } from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface VolunteerWork {
  role: string;
  organization: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: PhosphorIcon;
  stats: string;
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  achievements: string[];
}

export const volunteerWork: VolunteerWork[] = [
  {
    role: "Chief Creative Officer",
    organization: "Pygrammers",
    location: "Calicut, India",
    period: "February 2021 – Present",
    duration: "4+ Years",
    description:
      "Leading a Kerala-based Python developers community dedicated to guiding students and newcomers into the software industry through mentorship, workshops, and educational content.",
    achievements: [
      "Organize and deliver free mentorship sessions and workshops",
      "Oversee cross-functional team of designers, video editors, and content writers",
      "Shape strategy, partnerships, and programs for 400K+ community members",
      "Create educational content reaching millions of learners",
    ],
    icon: Users,
    stats: "400K+ Members",
  },
  {
    role: "Social Worker",
    organization: "National Service Scheme",
    location: "Kerala, India",
    period: "June 2017 – March 2019",
    duration: "2 Years",
    description:
      "Contributed to community development initiatives and social welfare programs as part of India's largest youth movement focused on social service.",
    achievements: [
      "Participated in community welfare programs",
      "Contributed to social development initiatives",
      "Organized blood donation camps",
      "Conducted awareness programs",
    ],
    icon: Heart,
    stats: "2+ Years",
  },
];

export const education: Education = {
  degree: "Bachelor's Degree in Computer Science",
  university: "Calicut University",
  location: "Malappuram, India",
  period: "June 2017 – March 2020",
  achievements: [],
};
