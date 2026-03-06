import { Lightning, Cpu, VideoCamera, Cloud } from "@phosphor-icons/react";
import type { PhosphorIcon } from "../types";

export interface Stat {
  value: string;
  label: string;
  icon: PhosphorIcon;
}

export interface Highlight {
  icon: PhosphorIcon;
  text: string;
}

export const stats: Stat[] = [
  { value: "4.8+", label: "Years Experience", icon: Lightning },
];

export const highlights: Highlight[] = [
  { icon: Cpu, text: "AI/ML & Agentic Systems" },
  { icon: VideoCamera, text: "Video & Streaming" },
  { icon: Cloud, text: "Cloud (AWS & GCP)" },
];
