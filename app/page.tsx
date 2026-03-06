"use client";

import { useScroll } from "./providers/scroll-provider";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CommunitySection from "./sections/CommunitySection";
import ContactSection from "./sections/ContactSection";

export default function HomePage() {
  const { scrollContainerRef } = useScroll();

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CommunitySection />
      <ContactSection />
    </div>
  );
}
