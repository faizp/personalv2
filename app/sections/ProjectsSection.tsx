"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  GithubLogo,
  ArrowSquareOut,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { Reveal } from "../components/ui/Reveal";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

type CursorVariant = "default" | "view" | "source" | "left" | "right";

const CARD_W = 420;
const PEEK_W = CARD_W * 0.2; // 84px visible for stacked cards

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isInCarousel, setIsInCarousel] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < projects.length) setActiveIndex(i);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  const active = projects[activeIndex];

  return (
    <section id="projects" className="scroll-section py-20 overflow-x-clip">
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-16 pt-12">
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Portfolio
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 mb-6">
            Projects
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Systems I&apos;ve built across video tech, AI/ML, and real-time
            infrastructure.
          </p>
        </Reveal>
      </div>

      {/* Custom Cursor */}
      <AnimatePresence>
        {isInCarousel && cursorVariant !== "default" && (
          <motion.div
            className="fixed top-0 left-0 z-[100] pointer-events-none hidden sm:flex"
            style={{ x: springX, y: springY }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1.5 rounded-full bg-foreground/90 text-background backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)]"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                padding:
                  cursorVariant === "view" || cursorVariant === "source"
                    ? "8px 16px"
                    : "10px",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {cursorVariant === "view" && (
                <>
                  <ArrowSquareOut size={13} />
                  View Project
                </>
              )}
              {cursorVariant === "source" && (
                <>
                  <GithubLogo size={13} />
                  View Source
                </>
              )}
              {cursorVariant === "left" && (
                <CaretLeft size={16} weight="bold" />
              )}
              {cursorVariant === "right" && (
                <CaretRight size={16} weight="bold" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Stack */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <Reveal delay={0.3}>
          {/* Desktop — track-based carousel */}
          <div
            className="relative hidden sm:block"
            style={{ height: 480 }}
            onMouseEnter={() => {
              setIsPaused(true);
              setIsInCarousel(true);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setIsInCarousel(false);
              setCursorVariant("default");
            }}
          >
            {/* Fixed-width anchor centered in parent, overflow visible so peeks show */}
            <div
              className="absolute top-0 h-full"
              style={{
                width: CARD_W,
                left: "50%",
                marginLeft: -(CARD_W / 2),
                overflow: "visible",
              }}
            >
              {/* Track — slides all cards as one connected unit */}
              <motion.div
                className="relative h-full"
                animate={{ x: -activeIndex * PEEK_W }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
              >
                {projects.map((project, i) => {
                  const isActive = i === activeIndex;
                  const isLeft = i < activeIndex;
                  const zIndex = isActive
                    ? projects.length + 1
                    : projects.length - Math.abs(i - activeIndex);

                  return (
                    <div
                      key={project.id}
                      className="absolute top-0 h-full sm:cursor-none"
                      style={{
                        width: CARD_W,
                        left: i * PEEK_W,
                        zIndex,
                      }}
                    >
                      {isActive ? (
                        <a
                          href={project.link || project.github || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full cursor-none"
                          onMouseEnter={() =>
                            setCursorVariant(
                              project.link ? "view" : "source"
                            )
                          }
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <ProjectCard project={project} isActive />
                        </a>
                      ) : (
                        <button
                          onClick={() => goTo(i)}
                          className="block w-full h-full text-left cursor-none"
                          onMouseEnter={() =>
                            setCursorVariant(isLeft ? "left" : "right")
                          }
                          onMouseLeave={() => setCursorVariant("default")}
                          aria-label={`Go to ${project.title}`}
                        >
                          <ProjectCard project={project} isActive={false} />
                        </button>
                      )}

                      {/* Mask — fades in/out with CSS transition */}
                      <div
                        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ease-out bg-background/60 dark:bg-background/50 ${
                          isActive ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <a
                  href={active.link || active.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-[500px]"
                >
                  <ProjectCard project={active} isActive />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative p-1"
                aria-label={`Go to project ${i + 1}`}
              >
                <motion.div
                  className={`h-1.5 rounded-full transition-colors duration-300 ${
                    i === activeIndex
                      ? "bg-foreground"
                      : "bg-muted-foreground/20 group-hover:bg-muted-foreground/40"
                  }`}
                  animate={{ width: i === activeIndex ? 24 : 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </button>
            ))}
          </div>

          {/* Mobile prev/next */}
          <div className="flex items-center justify-center gap-3 mt-5 sm:hidden">
            <motion.button
              onClick={() =>
                goTo(
                  activeIndex - 1 >= 0
                    ? activeIndex - 1
                    : projects.length - 1
                )
              }
              className="p-2.5 rounded-full bg-secondary/80 text-foreground border border-border/50"
              whileTap={{ scale: 0.92 }}
            >
              <CaretLeft size={18} weight="bold" />
            </motion.button>
            <motion.button
              onClick={() =>
                goTo(
                  activeIndex + 1 < projects.length ? activeIndex + 1 : 0
                )
              }
              className="p-2.5 rounded-full bg-secondary/80 text-foreground border border-border/50"
              whileTap={{ scale: 0.92 }}
            >
              <CaretRight size={18} weight="bold" />
            </motion.button>
          </div>
        </Reveal>
      </div>

      {/* CTA */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mt-20">
        <Reveal>
          <div className="text-center">
            <motion.a
              href="mailto:faizkizhisseri@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Discuss a project
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Card ──────────────────────────────────────────────────── */

function ProjectCard({
  project,
  isActive,
}: {
  project: Project;
  isActive: boolean;
}) {
  return (
    <div
      className={`h-full rounded-2xl border overflow-hidden flex flex-col ${
        isActive
          ? "border-border shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]"
          : "border-border/60 shadow-none"
      }`}
    >
      {/* Visual — 60% */}
      <div
        className={`relative flex-[3] min-h-0 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
            <motion.div
              className="relative z-[1] w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
              transition={
                isActive
                  ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.4 }
              }
            >
              <project.icon
                size={36}
                weight="regular"
                className="text-white/70"
              />
            </motion.div>
          </>
        )}
      </div>

      {/* Content — 40% */}
      <div className="flex-[2] min-h-0 bg-card p-6 flex flex-col justify-center">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded-full bg-secondary/60 text-muted-foreground border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
