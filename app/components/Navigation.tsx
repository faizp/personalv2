"use client";

import { useState } from "react";
import { motion, AnimatePresence, useTransform } from "framer-motion";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../providers/theme-provider";
import { useScroll } from "../providers/scroll-provider";
import { navLinks, socialLinks } from "../data/navigation";
import type { SectionId } from "../types";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { activeSection, scrollToSection, isScrolled, scrollY } = useScroll();

  // Phase 1: Letters "a","i","z","." merge toward "f" (150–900px)
  const mergeOpacity = useTransform(scrollY, [150, 850], [1, 0]);
  const aX = useTransform(scrollY, [150, 900], [0, -10]);
  const iX = useTransform(scrollY, [150, 900], [0, -22]);
  const zX = useTransform(scrollY, [150, 900], [0, -32]);
  const dotX = useTransform(scrollY, [150, 900], [0, -42]);
  const dotOpacity = useTransform(scrollY, [150, 750], [1, 0]);

  // Phase 2: "f" crossfades to "F" (800–1200px)
  const lowercaseOpacity = useTransform(scrollY, [800, 1200], [1, 0]);
  const uppercaseOpacity = useTransform(scrollY, [800, 1200], [0, 1]);

  // Phase 3: "F" becomes italic (1100–1600px)
  const italicSkew = useTransform(scrollY, [1100, 1600], [0, -12]);

  // Phase 4: Italic F scales up (1500–2000px)
  const finalScale = useTransform(scrollY, [1500, 2000], [1, 1.25]);

  const handleNavClick = (sectionId: SectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 liquid-glass" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")}>
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-display font-semibold tracking-tight text-foreground inline-flex items-baseline">
                {/* f / F crossfade */}
                <span className="relative inline-flex">
                  <motion.span style={{ opacity: lowercaseOpacity }}>
                    f
                  </motion.span>
                  <motion.span
                    className="absolute left-0 top-0 origin-left italic"
                    style={{
                      opacity: uppercaseOpacity,
                      skewX: italicSkew,
                      scale: finalScale,
                      fontWeight: 600,
                      fontFamily: "var(--font-exo2)",
                    }}
                  >
                    F
                  </motion.span>
                </span>

                {/* Letters that merge into f */}
                <motion.span style={{ x: aX, opacity: mergeOpacity }}>
                  a
                </motion.span>
                <motion.span style={{ x: iX, opacity: mergeOpacity }}>
                  i
                </motion.span>
                <motion.span style={{ x: zX, opacity: mergeOpacity }}>
                  z
                </motion.span>
                <motion.span
                  className="text-muted-foreground"
                  style={{ x: dotX, opacity: dotOpacity }}
                >
                  .
                </motion.span>
              </span>
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
              >
                <motion.span
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    activeSection === link.sectionId
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  {activeSection === link.sectionId && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-secondary rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.span>
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Social Links */}
            <div className="flex items-center gap-1 mr-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={18} weight="regular" />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} weight="regular" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} weight="regular" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}
            <motion.button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-0 right-0 p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.sectionId)}
                  className="text-left"
                >
                  <motion.span
                    className={`block text-3xl font-display font-medium py-4 border-b border-border ${
                      activeSection === link.sectionId
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {link.name}
                  </motion.span>
                </button>
              ))}

              <div className="flex gap-4 mt-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-secondary rounded-full text-foreground"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
