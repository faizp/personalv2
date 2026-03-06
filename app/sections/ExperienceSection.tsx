"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "@phosphor-icons/react";
import { Reveal, StaggerContainer, StaggerItem } from "../components/ui/Reveal";
import { experiences, metrics } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-section py-20">
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20 pt-12">
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Career
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 mb-6">
            Experience
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable systems and leading teams in the video tech and AI
            space. Here&apos;s a detailed look at my professional journey.
          </p>
        </Reveal>
      </div>

      {/* Metrics */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20">
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <motion.div
                className="p-6 bg-card rounded-xl border border-border text-center card-premium"
                whileHover={{ y: -4 }}
              >
                <p className="text-3xl font-display font-semibold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.1}>
              <div className="space-y-8">
                {/* Company Info */}
                <div>
                  <div className="space-y-4">
                    {/* Company Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                      {exp.type}
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} weight="regular" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>

                    {/* Role */}
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <span className="text-lg font-display font-bold text-foreground">
                          {exp.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin size={14} weight="regular" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground">
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">
                    Key Achievements
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement) => (
                      <motion.div
                        key={achievement.title}
                        className="group p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all duration-300 card-premium"
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                            <achievement.icon
                              size={20}
                              weight="regular"
                              className="text-muted-foreground group-hover:text-foreground transition-colors"
                            />
                          </div>
                          <div>
                            <h5 className="font-display font-semibold text-foreground mb-1">
                              {achievement.title}
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="section-divider mt-20" />
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Resume CTA */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mt-32">
        <Reveal>
          <div className="p-12 bg-card rounded-xl border border-border text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Want the full details?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Download my resume for a comprehensive overview of my
                experience, skills, and achievements.
              </p>
              <motion.a
                href="mailto:faizkizhisseri@gmail.com?subject=Resume Request"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Resume
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
