import { useState } from "react";
import Head from "next/head";

import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import DotCursor from "@/components/UI/DotCursor";

const MainPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Head>
        <title>Chris</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <DotCursor hovered={{ isHovered }} />
      <div className="px-4 md:px-10">
        <HeroSection hovered={{ setIsHovered }} />
        <SkillsSection />
        <ProjectsSection hovered={{ setIsHovered }} />
        <div className="lg:px-20">
          <AboutSection />
          <EducationSection hovered={{ setIsHovered }} />
        </div>
      </div>
      <ContactSection hovered={{ setIsHovered }} />
    </>
  );
};

export default MainPage;
