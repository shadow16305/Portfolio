import { motion } from "framer-motion";
import { lineWidth } from "@/tools/variants";

import Image from "next/image";

const AboutSection = () => {
  return (
    <div
      className="relative flex flex-col px-3 gap-y-9 mt-28 lg:mt-40 md:px-0"
      id="about"
    >
      <div className="flex items-end lg:gap-x-3 2xl:gap-x-7">
        <h2 className="text-black text-4xl lg:text-5xl 2xl:text-[64px] font-['NeueMontrealMedium']">
          About
        </h2>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
        />
      </div>
      <p className="text-base lg:text-lg font-['NeueMontreal'] leading-[28px] lg:max-w-[554px]">
        Hey there! I'm passionate about crafting digital experiences through
        code. As a web developer, I thrive on turning ideas into functional and
        engaging websites. With a blend of creativity and technical skills, I
        specialize in building responsive, user-friendly interfaces that leave a
        lasting impact. Constantly exploring new technologies, I'm driven by the
        ever-evolving landscape of web development. Let's innovate and create
        something remarkable together!
      </p>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={100}
        height={100}
        className="absolute -top-10 lg:top-0 right-2 lg:right-[10%] 2xl:right-0 max-w-14 lg:max-w-none"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={61}
        height={58}
        className="absolute hidden bottom-10 lg:bottom-0 right-3/4 lg:right-1/4 2xl:right-2/4 lg:block"
      />
    </div>
  );
};

export default AboutSection;
