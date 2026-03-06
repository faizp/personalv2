import { Rocket, Target, Heart, Lightning } from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface Value {
  icon: PhosphorIcon;
  title: string;
  description: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: Rocket,
    title: "Build to Scale",
    description:
      "Every system I architect is designed with growth in mind. From day one, I consider performance, reliability, and future expansion.",
  },
  {
    icon: Target,
    title: "Precision Over Speed",
    description:
      "While delivery matters, I believe in getting the foundation right. Quality code reduces technical debt and accelerates future development.",
  },
  {
    icon: Heart,
    title: "User-Centric Engineering",
    description:
      "Behind every API and pipeline are real users. I build with empathy, ensuring my systems serve people effectively.",
  },
  {
    icon: Lightning,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I dedicate time to learn new tools, patterns, and best practices to stay at the forefront.",
  },
];

export const journey: JourneyItem[] = [
  {
    year: "2021",
    title: "Joined Tessact",
    description:
      "Started as a Software Engineer at an early-stage AI startup, building the backend from scratch.",
  },
  {
    year: "2022",
    title: "Led Video Platform",
    description:
      "Architected and deployed the video processing pipeline handling 10K+ hours monthly.",
  },
  {
    year: "2023",
    title: "Team Leadership",
    description:
      "Took on backend team leadership, mentoring junior engineers and establishing best practices.",
  },
  {
    year: "2024",
    title: "ML Infrastructure",
    description:
      "Expanded into ML ops, deploying models on SageMaker and Vertex AI for content moderation.",
  },
  {
    year: "2026",
    title: "Senior Software Engineer",
    description:
      "Promoted to Senior Software Engineer, leading backend architecture and platform reliability at scale.",
  },
];
