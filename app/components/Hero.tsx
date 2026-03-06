"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Envelope } from "@phosphor-icons/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-foreground mb-6"
            >
              Faiz P
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Senior Backend Engineer | Cloud, Security & AI Systems. I build production-grade platforms for{" "}
              <span className="text-foreground">video processing</span>,{" "}
              <span className="text-foreground">streaming</span>, and{" "}
              <span className="text-foreground">AI workflows</span>.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              4.8+ years building AI-powered platforms from scratch. Led teams,
              architected scalable infrastructure, and processed 10,000+ video
              hours monthly at Tessact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="mailto:faizkizhisseri@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm transition-all hover:shadow-lg hover:shadow-foreground/10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Envelope size={18} weight="regular" />
                Get in touch
              </motion.a>
              <motion.a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium text-sm text-foreground hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View experience
                <ArrowDownRight size={18} weight="regular" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Preview */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Terminal Window */}
              <motion.div
                className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-zinc-800"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 text-xs text-zinc-500 font-mono">
                    faiz@portfolio:~$
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-zinc-500">$</span>{" "}
                    <span className="text-emerald-400">whoami</span>
                  </motion.div>
                  <motion.div
                    className="text-zinc-300 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Senior Backend Engineer | Cloud, Security & AI
                  </motion.div>

                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <span className="text-zinc-500">$</span>{" "}
                    <span className="text-emerald-400">current_role</span>
                  </motion.div>
                  <motion.div
                    className="text-zinc-300 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    Senior Software Engineer @ Tessact{" "}
                    <span className="text-emerald-500">(4.8+ years)</span>
                  </motion.div>

                  <motion.div
                    className="mt-4 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <span className="text-zinc-500">$</span>{" "}
                    <span className="text-emerald-400">_</span>
                    <motion.span
                      className="w-2 h-4 bg-emerald-400 ml-0.5"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-500 font-mono text-lg">10K+</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Video hours</p>
                    <p className="text-sm font-medium">processed monthly</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
