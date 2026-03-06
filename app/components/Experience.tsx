"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Cpu,
  VideoCamera,
  Cloud,
  Database,
  Users,
  GitBranch,
} from "@phosphor-icons/react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tessact Pvt Ltd",
    location: "Bengaluru (On-site)",
    period: "January 2026 – Present",
    duration: "Current",
    description:
      "Promoted to Senior Software Engineer, leading backend architecture and platform reliability for AI-powered video systems at scale.",
    achievements: [
      {
        icon: Users,
        title: "Team Leadership",
        description:
          "Led backend team; mentored junior engineers and established software development best practices",
      },
      {
        icon: Cloud,
        title: "Infrastructure",
        description:
          "Built fault-tolerant, scalable infrastructure from scratch using Docker and Kubernetes on AWS",
      },
      {
        icon: Cpu,
        title: "AI & LLM",
        description:
          "Deployed detection models on AWS SageMaker and GCP Vertex AI for content moderation",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Tessact Pvt Ltd",
    location: "Bengaluru (On-site)",
    period: "August 2021 – December 2025",
    duration: "4.5 years",
    description:
      "Built an AI-powered platform from scratch at an early-stage startup, now powering daily operations at a leading Indian entertainment group.",
    achievements: [
      {
        icon: VideoCamera,
        title: "Media Processing",
        description:
          "Implemented GPU-accelerated ML-driven video processing pipeline for 10,000+ video hours/month",
      },
      {
        icon: Cloud,
        title: "Infrastructure",
        description:
          "Built fault-tolerant, scalable infrastructure from scratch using Docker and Kubernetes on AWS",
      },
      {
        icon: GitBranch,
        title: "CI/CD",
        description:
          "Automated CI/CD with GitHub Actions enabling one-click deployments and 70% faster releases",
      },
      {
        icon: Database,
        title: "Search & Indexing",
        description:
          "Implemented ElasticSearch indexing for video, audio, and image assets for contextual search",
      },
    ],
  },
  {
    role: "Content Creator & Instructor",
    company: "Tech Channel",
    location: "Calicut (On-site)",
    period: "January 2021 – March 2021",
    duration: "3 months",
    description:
      "Created educational content for a top Malayalam tech channel, contributing to 400K+ subscriber growth.",
    achievements: [
      {
        icon: VideoCamera,
        title: "DSA Series",
        description:
          "Created 22-video series on data structures and algorithms in Malayalam",
      },
      {
        icon: Users,
        title: "Education Impact",
        description:
          "Broke down complex concepts into clear, engaging lessons for 400K+ subscribers",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-emerald-500 mb-3 tracking-wide uppercase">
            Professional Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Building scalable systems and leading teams in the video tech and AI
            space.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left - Company Info */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <div className="flex items-center gap-2 text-emerald-500 mb-2">
                      <Calendar size={16} weight="regular" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} weight="regular" />
                      {exp.location}
                    </div>
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Right - Achievements */}
                <div className="lg:col-span-8">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={achievement.title}
                        className="group p-5 bg-card rounded-2xl border border-border hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                            <achievement.icon
                              size={20}
                              weight="regular"
                              className="text-emerald-500"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">
                              {achievement.title}
                            </h4>
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
                <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
