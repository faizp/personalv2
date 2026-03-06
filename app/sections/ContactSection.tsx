"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Envelope,
  ArrowUpRight,
  Copy,
  Check,
} from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "../components/ui/Reveal";
import { MagneticButton } from "../components/ui/MagneticButton";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { contactLinks, availability, interests } from "../data/contact";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Copy to clipboard"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Check size={16} weight="bold" className="text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Copy size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-section">
      <div className="py-20">
        {/* Header */}
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20 pt-12">
          <Reveal>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 mb-6">
              Let&apos;s Connect
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Open to opportunities in backend engineering, cloud & security
              infrastructure, and AI systems. Whether you have a question or just
              want to say hi, I&apos;ll do my best to get back to you!
            </p>
          </Reveal>
        </div>

        {/* Contact Grid */}
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {contactLinks.map((link) => (
                  <StaggerItem key={link.name}>
                    <SpotlightCard className="h-full">
                      <motion.a
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={
                          link.name !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border card-premium group"
                        whileHover={{ y: -2 }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                          <link.icon
                            size={28}
                            weight="regular"
                            className="text-muted-foreground group-hover:text-foreground transition-colors"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display font-semibold text-foreground">
                              {link.name}
                            </h3>
                            <ArrowUpRight
                              size={16}
                              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>

                        <div className="hidden sm:flex items-center gap-3">
                          <span className="text-sm font-medium text-foreground">
                            {link.value}
                          </span>
                          <CopyButton text={link.value} />
                        </div>
                      </motion.a>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Quick Email CTA */}
              <Reveal delay={0.4}>
                <div className="mt-8 p-8 bg-card rounded-xl border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Prefer email?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Shoot me a direct message and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <MagneticButton>
                    <motion.a
                      href="mailto:faizkizhisseri@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Envelope size={18} />
                      Send Email
                      <ArrowUpRight size={16} />
                    </motion.a>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Availability & Looking for — side by side */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Availability
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Status</span>
                      <span className="text-foreground font-medium">Open to work</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Timezone</span>
                      <span className="text-foreground">{availability.timezone}</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="text-foreground">{availability.location}</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Remote</span>
                      <span className="text-foreground">Yes</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Interested in
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Faiz P</span>
              <span className="hidden sm:inline">·</span>
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/faizp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/faiz-p" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://x.com/sanu_faiz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
              <a href="mailto:faizkizhisseri@gmail.com" className="hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
