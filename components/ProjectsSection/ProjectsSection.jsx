import { motion } from "framer-motion";
import { lineWidth, fromBottom, fromRight, fromLeft } from "@/tools/variants";

import ProjectLayout from "../UI/ProjectLayout";

let cardPositionBottom = {};
let cardPositionRight = {};
let cardPositionLeft = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    cardPositionBottom = fromBottom;
    cardPositionRight = fromRight;
    cardPositionLeft = fromLeft;
  }
}

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
    src: "../images/dictionary.webp",
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

const variantMap = {
  p1: cardPositionBottom,
  p2: cardPositionRight,
  p3: cardPositionLeft,
  p4: cardPositionBottom,
};

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-y-14 mt-28 lg:mt-40 w-full">
      <div className="flex items-end justify-end gap-x-7 me-7">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
        />
        <h2 className="text-black text-4xl lg:text-[64px] font-['NeueMontrealMedium']">
          Projects
        </h2>
      </div>
      <div className="flex flex-col items-center lg:flex-row flex-wrap justify-center w-full gap-x-7 gap-y-7">
        {projectItems.map((item) => (
          <motion.div
            key={item.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={variantMap[item.id]}
            className={`w-11/12 ${
              item.id === "p1" && "lg:w-[60%] text-white"
            } ${item.id === "p2" && "lg:w-[30%]"} ${
              item.id === "p3" && "lg:w-[30%]"
            } ${item.id === "p4" && "lg:w-[60%] text-white"}`}
          >
            <ProjectLayout
              title={item.title}
              bgUrl={item.src}
              site={item.liveSite}
              github={item.github}
              tools={item.tools}
              toolClassName={`${item.id === "p2" && "border-black"} ${
                item.id === "p3" && "border-black"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
