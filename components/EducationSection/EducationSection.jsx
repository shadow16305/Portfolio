import { motion } from "framer-motion";
import { fromBottom, lineWidth } from "@/tools/variants";

import Image from "next/image";

const courseLinks = [
  {
    id: "c1",
    text: "Udemy - The Web Developer Bootcamp",
    data: "View course",
    link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
  {
    id: "c2",
    text: "Udemy - React - The Complete Guide (incl. React Router & Redux)",
    data: "View course",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    id: "c3",
    text: "Coursera - Front-End Development Capstone Project",
    data: "View course",
    link: "https://www.coursera.org/learn/front-end-development-capstone-project",
  },
];

const EducationSection = () => {
  return (
    <div className="relative flex flex-col items-end px-3 gap-y-9 mt-28 lg:mt-10 md:px-0">
      <div className="flex items-end lg:gap-x-3 2xl:gap-x-7">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          tranisiton={{ duration: 1 }}
          variants={lineWidth}
          className="h-0.5 w-28 xl:w-36 bg-[#2D17B5]"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
        >
          <h2 className="text-black text-4xl lg:text-5xl 2xl:text-[64px] font-['NeueMontrealMedium']">Education</h2>
        </motion.div>
      </div>
      <div className="flex flex-col gap-y-6 font-['NeueMontreal']">
        {courseLinks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="norefferer"
              data-after={item.data}
              className="px-2 py-8 text-lg text-black pseudo-text-effect"
            >
              <span>{item.text}</span>
            </a>
            <hr className="my-4 border border-slate-300" />
          </motion.div>
        ))}
      </div>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={100}
        height={100}
        className="absolute -top-10 lg:top-1/2 left-2 lg:left-[10%] 2xl:left-0 max-w-14 lg:max-w-none"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={61}
        height={58}
        className="absolute hidden rotate-90 bottom-10 lg:-bottom-10 right-3/4 lg:-right-10 lg:block"
      />
    </div>
  );
};

export default EducationSection;
