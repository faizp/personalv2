"use client";

import { motion } from "framer-motion";
import { ArrowRight, Envelope } from "@phosphor-icons/react";
import { MagneticButton } from "../components/ui/MagneticButton";
import { useScroll } from "../providers/scroll-provider";
import { stats, highlights } from "../data/hero";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export default function HeroSection() {
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="scroll-section relative overflow-hidden">
      {/* Animated Background - Minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="space-y-16">
            {/* Content */}
            <div>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Available for opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-foreground">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    Senior Backend
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    Engineer
                  </motion.span>
                </h1>
                <motion.p
                  className="text-xl sm:text-2xl font-light text-muted-foreground mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Cloud, Security & AI
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base text-muted-foreground leading-relaxed mb-8 max-w-[65ch]"
              >
                Building reliable video, streaming, and AI platforms at scale.
              </motion.p>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-2 mb-10"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.9 + index * 0.08,
                      ...springTransition,
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground border border-border/50"
                  >
                    <item.icon size={14} weight="regular" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap items-center gap-6"
              >
                <MagneticButton>
                  <button onClick={() => scrollToSection("contact")}>
                    <motion.span
                      className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium text-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={springTransition}
                    >
                      <Envelope size={18} weight="regular" />
                      Get in touch
                    </motion.span>
                  </button>
                </MagneticButton>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  View Projects
                  <ArrowRight size={14} weight="regular" />
                </button>
              </motion.div>
            </div>

            {/* Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative">
                {/* Main Terminal */}
                <motion.div
                  className="relative bg-zinc-950 rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-zinc-800/50"
                  whileHover={{ y: -4 }}
                  transition={springTransition}
                >
                  {/* Inner refraction border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.04] pointer-events-none" />

                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-5 py-4 bg-zinc-900/80 border-b border-zinc-800/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="ml-4 text-xs text-zinc-500 font-mono">
                      faiz@portfolio
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-zinc-600">$</span>{" "}
                      <span className="text-zinc-300">whoami</span>
                    </motion.div>
                    <motion.div
                      className="text-zinc-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Senior Backend Engineer | Cloud, Security & AI
                    </motion.div>

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <span className="text-zinc-600">$</span>{" "}
                      <span className="text-zinc-300">
                        cat current_role.json
                      </span>
                    </motion.div>
                    <motion.pre
                      className="text-zinc-400 mt-2 text-xs overflow-x-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      {`{
  "role": "Senior Software Engineer",
  "company": "Tessact Pvt Ltd",
  "duration": "4.8+ years",
  "location": "Bengaluru, India",
  "focus": ["AI", "Video", "Cloud"]
}`}
                    </motion.pre>

                    <motion.div
                      className="mt-4 flex items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      <span className="text-zinc-600">$</span>{" "}
                      <span className="text-zinc-300">_</span>
                      <motion.span
                        className="w-2 h-4 bg-zinc-500 ml-0.5"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Stats */}
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="absolute bg-card rounded-xl p-4 border border-border shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]"
                    style={{ bottom: -20, left: -20 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 2,
                      ...springTransition,
                    }}
                    whileHover={{ y: -4, scale: 1.03 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <stat.icon
                          size={20}
                          weight="regular"
                          className="text-muted-foreground"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-display font-semibold text-foreground tabular-nums">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
