"use client";

import { motion } from "framer-motion";
import {
  Student,
  Calendar,
  ArrowRight,
  Globe,
  Trophy,
} from "@phosphor-icons/react";
import { Reveal, StaggerContainer, StaggerItem } from "../components/ui/Reveal";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { useScroll } from "../providers/scroll-provider";
import { volunteerWork, education } from "../data/community";

export default function CommunitySection() {
  const { scrollToSection } = useScroll();

  return (
    <section id="community" className="scroll-section py-20">
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20 pt-12">
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Beyond Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 mb-6">
            Community & Education
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Giving back to the community and continuous learning are core values.
            Here&apos;s how I contribute beyond my professional work.
          </p>
        </Reveal>
      </div>

      {/* Education Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
            Education
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full">
            <div className="p-8 bg-card rounded-xl border border-border card-premium">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Student
                    size={32}
                    weight="regular"
                    className="text-muted-foreground"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                        {education.degree}
                      </h4>
                      <p className="text-muted-foreground">
                        {education.university}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                    <Globe size={14} />
                    {education.location}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {education.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground"
                      >
                        <Trophy size={12} />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>

      {/* Volunteer Work Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
            Community Involvement
          </h3>
        </Reveal>

        <div className="space-y-8">
          {volunteerWork.map((work, index) => {
            return (
              <Reveal key={work.organization} delay={index * 0.1}>
                <SpotlightCard className="h-full">
                  <div className="p-8 bg-card rounded-xl border border-border card-premium">
                    <div className="space-y-8">
                      {/* Header */}
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                            <work.icon
                              size={28}
                              weight="regular"
                              className="text-muted-foreground"
                            />
                          </div>
                          <div>
                            <h4 className="font-display text-xl font-semibold text-foreground">
                              {work.role}
                            </h4>
                            <p className="text-muted-foreground font-medium">
                              {work.organization}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Globe size={14} />
                            {work.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <Calendar size={14} />
                            {work.period}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground mt-4">
                          <Trophy size={14} />
                          {work.stats}
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {work.description}
                        </p>

                        <h5 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                          Key Contributions
                        </h5>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {work.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                            >
                              <div className="w-6 h-6 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                                <Trophy
                                  size={12}
                                  className="text-muted-foreground"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mt-20">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Community Impact
          </h3>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          <StaggerItem>
            <motion.div
              className="p-6 bg-card rounded-xl border border-border text-center card-premium"
              whileHover={{ y: -4 }}
            >
              <p className="text-4xl font-display font-semibold text-foreground mb-1">
                400K+
              </p>
              <p className="text-sm text-muted-foreground">
                Community Members
              </p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              className="p-6 bg-card rounded-xl border border-border text-center card-premium"
              whileHover={{ y: -4 }}
            >
              <p className="text-4xl font-display font-semibold text-foreground mb-1">
                50+
              </p>
              <p className="text-sm text-muted-foreground">
                Workshops Conducted
              </p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              className="p-6 bg-card rounded-xl border border-border text-center card-premium"
              whileHover={{ y: -4 }}
            >
              <p className="text-4xl font-display font-semibold text-foreground mb-1">
                6+
              </p>
              <p className="text-sm text-muted-foreground">
                Years Volunteering
              </p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              className="p-6 bg-card rounded-xl border border-border text-center card-premium"
              whileHover={{ y: -4 }}
            >
              <p className="text-4xl font-display font-semibold text-foreground mb-1">
                1000s
              </p>
              <p className="text-sm text-muted-foreground">Lives Impacted</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mt-20">
        <Reveal>
          <div className="p-12 bg-card rounded-xl border border-border text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Want to collaborate?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Always open to community initiatives, mentorship opportunities,
                and educational partnerships.
              </p>
              <button onClick={() => scrollToSection("contact")}>
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </motion.span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
