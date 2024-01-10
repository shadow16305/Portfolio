import { motion } from "framer-motion";
import { lineWidth } from "@/tools/variants";
import Skills from "./Skills";

const SkillsSection = () => {
  return (
    <div
      className="flex flex-col md:items-start mt-28 lg:mt-40 lg:flex-row lg:justify-between xl:gap-x-10 2xl:gap-x-16 gap-y-7"
      id="skills"
    >
      <div className="flex lg:items-center">
        <div className="flex items-end lg:gap-x-3 2xl:gap-x-7">
          <h2 className="text-black text-4xl lg:text-5xl 2xl:text-[64px] font-['NeueMontrealMedium']">My Skills</h2>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={lineWidth}
            className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
          />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default SkillsSection;
