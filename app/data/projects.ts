import { Brain, WebhooksLogo, ListChecks } from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: PhosphorIcon;
  gradient: string;
  link: string | null;
  github: string | null;
  image: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tessact AI",
    tagline: "AI-powered video platform",
    description:
      "Intelligent workflows for video content analysis, metadata extraction, and automated processing pipelines.",
    tags: ["Python", "Django", "AWS", "Kubernetes", "ElasticSearch", "SageMaker"],
    icon: Brain,
    gradient: "from-zinc-900 via-emerald-950/80 to-zinc-950",
    link: "https://tessact.ai",
    github: null,
    image: null,
  },
  {
    id: 2,
    title: "OpenRTC",
    tagline: "Open-source real-time communication",
    description:
      "An open-source real-time communication layer built on three primitives: connections, rooms, and events over WebSocket.",
    tags: ["Go", "TypeScript", "Python", "WebSocket"],
    icon: WebhooksLogo,
    gradient: "from-slate-900 via-slate-800 to-zinc-950",
    link: null,
    github: "https://github.com/faizp/OpenRTC",
    image: null,
  },
  {
    id: 3,
    title: "ZenList",
    tagline: "AI-native task management",
    description:
      "A minimalist task manager powered by the Model Context Protocol, enabling AI-native task management through structured tool use.",
    tags: ["Go", "GraphQL", "React", "PostgreSQL", "Docker"],
    icon: ListChecks,
    gradient: "from-neutral-900 via-stone-900/90 to-zinc-950",
    link: null,
    github: "https://github.com/faizp/ZenList",
    image: null,
  },
];
