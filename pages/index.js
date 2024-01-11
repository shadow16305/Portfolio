import Head from "next/head";

import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

const index = () => {
  return (
    <>
      <Head>
        <title>Chris</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <div className="px-4 md:px-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <div className="lg:px-20">
          <AboutSection />
          <EducationSection />
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default index;
