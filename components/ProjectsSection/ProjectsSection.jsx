import { motion } from "framer-motion";
import { lineWidth, fromBottom, fromRight, fromLeft } from "@/tools/variants";

import ProjectLayout from "../UI/ProjectLayout";

const projectItems = [
  {
    id: "p1",
    title: "Uma-lab",
    src: "../images/uma-lab.png",
    liveSite: "https://uma-lab.com.ua/",
    github: "https://github.com/shadow16305/uma-lab",
    tools: "React, React-Router, TailwindCSS, Framer Motion",
  },
  {
    id: "p2",
    title: "Bayview Clinic",
    src: "../images/bayview.png",
    liveSite: "https://bayviewdiagnostic.ca/",
    github: "https://github.com/shadow16305/BayView",
    tools: "React, TailwindCSS",
  },
  {
    id: "p3",
    title: "Dictionary Web-app",
    src: "../images/dictionary.png",
    liveSite: "https://playful-wisp-be75a2.netlify.app/",
    github: "https://github.com/shadow16305/dictionary-web-app",
    tools: "React, TailwindCSS, API",
  },
  {
    id: "p4",
    title: "Desgino",
    src: "../images/designo.png",
    liveSite: "https://designo-multipage-website-beta.vercel.app/",
    github: "https://github.com/shadow16305/designo-multipage-website",
    tools: "Next, TailwindCSS, Framer Motion",
  },
];

const ProjectsSection = ({ hovered }) => {
  const { setIsHovered } = hovered;

  const variantMap = {
    p1: fromBottom,
    p2: fromRight,
    p3: fromLeft,
    p4: fromBottom,
  };

  return (
    <div className="flex flex-col w-full gap-y-14 mt-28 lg:mt-40" id="projects">
      <div className="flex items-end justify-end gap-x-7 me-7">
        <motion.span
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
        />
        <h2 className="text-black text-4xl lg:text-[64px] font-['NeueMontrealMedium']">Projects</h2>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full overflow-hidden md:flex-row gap-x-5 gap-y-5">
        {projectItems.map((item) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variantMap[item.id]}
            className={`w-11/12 ${item.id === "p1" && "md:w-[60%] text-white"} ${item.id === "p2" && "md:w-[35%]"} ${
              item.id === "p3" && "md:w-[35%]"
            } ${item.id === "p4" && "md:w-[60%] text-white"}`}
          >
            <ProjectLayout
              title={item.title}
              bgUrl={item.src}
              site={item.liveSite}
              github={item.github}
              tools={item.tools}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
