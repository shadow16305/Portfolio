import { motion } from "framer-motion";
import { lineWidth } from "@/tools/variants";

import Image from "next/image";

const EducationSection = () => {
  return (
    <div className="relative flex flex-col items-end px-3 gap-y-9 mt-28 lg:mt-10 md:px-0">
      <div className="flex items-end lg:gap-x-3 2xl:gap-x-7">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
        />
        <h2 className="text-black text-4xl lg:text-5xl 2xl:text-[64px] font-['NeueMontrealMedium']">
          Education
        </h2>
      </div>
      <div className="flex flex-col gap-y-6 font-['NeueMontrealMedium']">
        <a
          href="https://www.udemy.com/course/the-web-developer-bootcamp/"
          className="relative px-2 py-4 text-xl border-b border-black group"
        >
          <span className="absolute top-0 left-0 z-0 w-full h-full transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
          <p className="relative z-10">Udemy - The Web Developer Bootcamp</p>
        </a>
        <a
          href="https://www.udemy.com/course/the-web-developer-bootcamp/"
          className="relative px-2 py-4 text-xl border-b border-black group"
        >
          <span className="absolute top-0 left-0 z-0 w-full h-full transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
          <p className="relative z-10">
            Udemy - React - The Complete Guide (incl. React Router & Redux)
          </p>
        </a>
        <a
          href="https://www.coursera.org/learn/front-end-development-capstone-project"
          className="relative px-2 py-4 text-xl border-b border-black group"
        >
          <span className="absolute top-0 left-0 z-0 w-full h-full transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
          <p className="relative z-10">
            Coursera - Front-End Development Capstone Project
          </p>
        </a>
      </div>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={100}
        height={100}
        className="absolute -top-10 lg:top-0 left-2 lg:left-[10%] 2xl:left-0 max-w-14 lg:max-w-none"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={61}
        height={58}
        className="absolute hidden rotate-90 bottom-10 lg:-bottom-20 right-3/4 lg:right-0 lg:block"
      />
    </div>
  );
};

export default EducationSection;
