import { motion } from "framer-motion";
import { lineWidth } from "@/tools/variants";

import Image from "next/image";

const EducationSection = () => {
  return (
    <div className="flex flex-col items-end gap-y-9 mt-28 lg:mt-10 relative px-3 md:px-0">
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
      <p className="text-base lg:text-lg text-end font-['NeueMontreal'] leading-[28px] lg:max-w-[554px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        consequatur nisi, ad nemo quas pariatur? Earum incidunt nostrum quod non
        voluptates sint eligendi excepturi est, enim modi aut illo a. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi odit
        eveniet maxime, nulla qui voluptatum odio consequatur dolorum nam
        architecto error sint obcaecati deserunt quis molestias labore dolores
        sunt.
      </p>
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
        className="absolute bottom-10 lg:-bottom-16 right-3/4 lg:right-0 rotate-90 hidden lg:block"
      />
    </div>
  );
};

export default EducationSection;
