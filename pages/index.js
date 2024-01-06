import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
      </div>
      <ContactSection />
    </>
  );
};

export default index;
