"use client";

import { motion } from "framer-motion";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  Envelope,
  ArrowUpRight,
} from "@phosphor-icons/react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/faizp",
    icon: GithubLogo,
    handle: "@faizp",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/faiz-p",
    icon: LinkedinLogo,
    handle: "@faiz-p",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/sanu_faiz",
    icon: XLogo,
    handle: "@sanu_faiz",
  },
  {
    name: "Email",
    href: "mailto:faizkizhisseri@gmail.com",
    icon: Envelope,
    handle: "faizkizhisseri@gmail.com",
  },
];

const quickLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Impact", href: "#impact" },
  { name: "Community", href: "#community" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Let&apos;s build something
            <br />
            <span className="text-emerald-500">extraordinary</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Open to opportunities in backend engineering, video platforms, and
            infrastructure architecture.
          </p>
          <motion.a
            href="mailto:faizkizhisseri@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-medium transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Envelope size={20} weight="regular" />
            Get in touch
            <ArrowUpRight size={18} weight="regular" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-12" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-semibold tracking-tight text-white mb-4 inline-block"
            >
              faiz<span className="text-emerald-500">.</span>
            </a>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Senior Backend Engineer with 4.8+ years of experience
              building production-grade platforms for video processing, streaming, and AI workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wide mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors text-sm group"
                  >
                    <link.icon
                      size={16}
                      weight="regular"
                      className="group-hover:text-emerald-500"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            {currentYear} Faiz P. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
