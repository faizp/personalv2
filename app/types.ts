import type { ComponentType } from "react";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "community"
  | "contact";

export interface IconProps {
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}

export type PhosphorIcon = ComponentType<IconProps>;
