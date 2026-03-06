"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

import type { SectionId } from "../types";

interface ScrollContextType {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  isScrolled: boolean;
  scrollY: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollY = useMotionValue(0);

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionIds: SectionId[] = [
      "home",
      "about",
      "experience",
      "projects",
      "community",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            setActiveSection(id);
            history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
          }
        }
      },
      {
        root: container,
        threshold: 0.3,
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll detection for nav glass effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
      scrollY.set(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Handle initial hash on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (hash && hash !== "home") {
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView();
        }
      });
    }
  }, []);

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollToSection, scrollContainerRef, isScrolled, scrollY }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
