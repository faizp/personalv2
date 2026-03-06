"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  VideoCamera,
  Lightning,
  Globe,
  MagnifyingGlass,
  Brain,
  Rocket,
} from "@phosphor-icons/react";

const impactMetrics = [
  {
    icon: VideoCamera,
    value: "10K+",
    label: "Video Hours",
    description: "Processed monthly through ML-driven pipelines",
    color: "emerald",
  },
  {
    icon: Lightning,
    value: "70%",
    label: "Faster Releases",
    description: "Through automated CI/CD pipelines",
    color: "amber",
  },
  {
    icon: Globe,
    value: "100%",
    label: "Global Streaming",
    description: "Multi-bitrate HLS with CloudFront CDN",
    color: "blue",
  },
  {
    icon: MagnifyingGlass,
    value: "Sub-100ms",
    label: "Search Latency",
    description: "For video/audio/image assets via Elasticsearch",
    color: "purple",
  },
];

const projects = [
  {
    title: "Auto Compliance Platform",
    description:
      "AI-powered content moderation system processing 10,000+ video hours monthly for leading Indian entertainment groups.",
    tags: ["Python", "AWS SageMaker", "FFmpeg", "Elasticsearch"],
    icon: Brain,
    stats: "10K+ hours/month",
  },
  {
    title: "Global Streaming Infrastructure",
    description:
      "Multi-bitrate HLS streaming platform with CloudFront CDN for smooth global playback experience.",
    tags: ["HLS", "CloudFront", "S3", "FFmpeg"],
    icon: Globe,
    stats: "Global reach",
  },
  {
    title: "ML Model Deployment Pipeline",
    description:
      "Automated deployment of detection models (object, profanity, face, shot) on AWS and GCP.",
    tags: ["SageMaker", "Vertex AI", "Docker", "Kubernetes"],
    icon: Rocket,
    stats: "Multiple models",
  },
];

const colorMap: Record<string, { bg: string; text: string; gradient: string }> =
  {
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-500",
      gradient: "from-emerald-500/20 to-transparent",
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-500",
      gradient: "from-amber-500/20 to-transparent",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      gradient: "from-blue-500/20 to-transparent",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      gradient: "from-purple-500/20 to-transparent",
    },
  };

function CountUpCard({
  metric,
  index,
}: {
  metric: (typeof impactMetrics)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const colors = colorMap[metric.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group"
    >
      <div
        className={`relative p-8 bg-card rounded-3xl border border-border overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5`}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative">
          <div
            className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
          >
            <metric.icon size={24} weight="regular" className={colors.text} />
          </div>

          <motion.div
            className="text-5xl font-semibold tracking-tight text-foreground mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
          >
            {metric.value}
          </motion.div>

          <p className="text-lg font-medium text-foreground mb-1">
            {metric.label}
          </p>
          <p className="text-sm text-muted-foreground">{metric.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-emerald-500 mb-3 tracking-wide uppercase">
            Results & Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Measurable outcomes from building scalable systems and leading
            technical initiatives.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((metric, index) => (
            <CountUpCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Key Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 bg-card rounded-3xl border border-border hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5"
              whileHover={{ y: -8 }}
            >
              {/* Spotlight Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <project.icon
                      size={24}
                      weight="regular"
                      className="text-emerald-500"
                    />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
                    {project.stats}
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
