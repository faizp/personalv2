"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Reveal, StaggerContainer, StaggerItem } from "../components/ui/Reveal";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { useScroll } from "../providers/scroll-provider";
import { values, journey } from "../data/about";

export default function AboutSection() {
  const { scrollToSection } = useScroll();

  return (
    <section id="about" className="scroll-section py-20">
      {/* Header */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-20 pt-12">
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            About Me
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mt-4 mb-6">
            The Story So Far
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From writing my first Python script to architecting video platforms
            processing thousands of hours of content, my journey has been driven
            by curiosity and a passion for building things that matter.
          </p>
        </Reveal>
      </div>

      {/* Bio Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-32">
        <div className="space-y-16">
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m Faiz, a Senior Backend Engineer based in Bengaluru,
                India. Currently, I&apos;m building AI-powered video platforms at
                Tessact, where I&apos;ve spent the last 4.8+ years transforming
                ideas into production systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies at the intersection of video technology and
                backend engineering. I&apos;ve architected systems that process
                10,000+ video hours monthly, built fault-tolerant infrastructure
                on AWS and GCP, and led teams to deliver high-impact projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me mentoring aspiring
                developers through Pygrammers, a community of 400K+ Python
                enthusiasts that I help lead.
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-32">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-4">
            What Drives Me
          </h2>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <SpotlightCard className="h-full">
                <div className="p-8 bg-card rounded-xl border border-border h-full card-premium">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <value.icon
                      size={24}
                      weight="regular"
                      className="text-muted-foreground"
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Journey Timeline */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 mb-32">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Timeline
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-4">
            My Journey
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {journey.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1}>
                <div className="flex items-start gap-6 pl-4">
                  {/* Year Badge */}
                  <div className="relative shrink-0">
                    <div className="w-3 h-3 rounded-full bg-foreground ring-4 ring-background relative -left-[7px]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 -mt-1">
                    <span className="font-display text-sm font-bold text-muted-foreground">
                      {item.year}
                    </span>
                    <div className="p-6 bg-card rounded-xl border border-border card-premium mt-2">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="relative p-12 bg-card rounded-xl border border-border overflow-hidden">
            <div className="relative text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
                Want to know more?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Check out my experience, projects, or get in touch to discuss
                how we can work together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => scrollToSection("experience")}>
                  <motion.span
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Experience
                    <ArrowRight size={16} />
                  </motion.span>
                </button>
                <button onClick={() => scrollToSection("projects")}>
                  <motion.span
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium text-sm text-foreground hover:bg-secondary transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    See Projects
                  </motion.span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
