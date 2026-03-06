import {
  Users,
  Cloud,
  VideoCamera,
  Cpu,
  GitBranch,
  Database,
} from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface Achievement {
  icon: PhosphorIcon;
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  achievements: Achievement[];
}

export interface Metric {
  label: string;
  value: string;
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tessact Pvt Ltd",
    location: "Bengaluru (On-site)",
    period: "August 2021 – Present",
    duration: "3.8+ years",
    type: "Full-time",
    description:
      "Built an AI-powered platform from scratch at an early-stage startup, now powering daily operations at a leading Indian entertainment group.",
    achievements: [
      {
        icon: Users,
        title: "Team Leadership",
        description:
          "Led backend team; mentored junior engineers and established software development best practices including code reviews, testing standards, and documentation.",
      },
      {
        icon: Cloud,
        title: "Infrastructure Architecture",
        description:
          "Built fault-tolerant, scalable infrastructure from scratch using Docker and Kubernetes on AWS, achieving 99.9% uptime.",
      },
      {
        icon: VideoCamera,
        title: "Media Processing Pipeline",
        description:
          "Implemented GPU-accelerated ML-driven video processing pipeline for 10,000+ video hours monthly with intelligent job scheduling.",
      },
      {
        icon: Cpu,
        title: "AI/ML Integration",
        description:
          "Deployed detection models (object, profanity, face, shot) on AWS SageMaker and GCP Vertex AI for automated content moderation.",
      },
      {
        icon: GitBranch,
        title: "CI/CD Automation",
        description:
          "Automated CI/CD with GitHub Actions enabling one-click deployments and 70% faster release cycles.",
      },
      {
        icon: Database,
        title: "Search Infrastructure",
        description:
          "Implemented ElasticSearch indexing for video, audio, and image assets enabling sub-100ms contextual search.",
      },
    ],
  },
  {
    role: "Content Creator & Instructor",
    company: "Tech Channel",
    location: "Calicut (On-site)",
    period: "January 2021 – March 2021",
    duration: "3 months",
    type: "Contract",
    description:
      "Created educational content for a top Malayalam tech channel, contributing to 400K+ subscriber growth through clear, engaging explanations of complex topics.",
    achievements: [
      {
        icon: VideoCamera,
        title: "DSA Video Series",
        description:
          "Created 22-video series on data structures and algorithms in Malayalam, reaching thousands of learners.",
      },
      {
        icon: Users,
        title: "Education Impact",
        description:
          "Broke down complex computer science concepts into clear, engaging lessons for 400K+ subscribers.",
      },
    ],
  },
];

export const metrics: Metric[] = [
  { label: "Years Experience", value: "3.8+" },
  { label: "Companies", value: "2" },
  { label: "Projects Led", value: "10+" },
  { label: "Team Members Mentored", value: "5+" },
];
