import { motion } from "framer-motion";
import { fromBottom, lineWidth } from "@/tools/variants";

import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="relative flex flex-col px-3 gap-y-9 mt-28 lg:mt-40 md:px-0" id="about">
      <div className="flex items-end lg:gap-x-3 2xl:gap-x-7">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          tranisiton={{ duration: 1 }}
          variants={fromBottom}>
          <h2 className="text-black text-4xl lg:text-5xl 2xl:text-[64px] font-['NeueMontrealMedium']">About</h2>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          tranisiton={{ duration: 1 }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-neon-blue"
        />
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fromBottom}>
        <p className="text-base lg:text-lg font-['NeueMontreal'] leading-[28px] lg:max-w-[554px]">
          I'm passionate about crafting digital experiences through code. As a web developer, I thrive on turning ideas
          into functional and engaging websites. With a blend of creativity and technical skills, I specialize in
          building responsive, user-friendly interfaces that leave a lasting impact. Constantly exploring new
          technologies, I'm driven by the ever-evolving landscape of web development. Let's innovate and create
          something remarkable together!
        </p>
      </motion.div>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={0}
        height={0}
        className="absolute -top-10 lg:top-20 right-2 lg:right-[10%] 2xl:right-0 w-14 h-auto lg:w-20"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={0}
        height={0}
        className="absolute hidden bottom-10 lg:top-16 right-3/4 lg:right-1/4 2xl:right-[58%] lg:block h-auto w-16"
      />
    </div>
  );
};

export default AboutSection;
