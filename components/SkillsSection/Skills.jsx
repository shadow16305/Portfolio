import { fromBottom } from "@/tools/variants";
import { motion } from "framer-motion";

const skills = [
  {
    id: "s1",
    name: "HTML",
  },
  {
    id: "s2",
    name: "CSS",
  },
  {
    id: "s3",
    name: "JavaScript",
  },
  {
    id: "s4",
    name: "TypeScript",
  },
  {
    id: "s5",
    name: "React.js",
  },
  {
    id: "s6",
    name: "Next.js",
  },
  {
    id: "s7",
    name: "Express",
  },
  {
    id: "s8",
    name: "Tailwind",
  },
  {
    id: "s9",
    name: "Node.js",
  },
  {
    id: "s10",
    name: "Bootstrap",
  },
  {
    id: "s11",
    name: "MongoDB",
  },
];

const Skills = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
        onscreen: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-x-11 md:gap-y-5 lg:max-w-[700px] xl:max-w-[950px] px-2 md:px-0"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          variants={fromBottom}
          className="bg-[#4831D4] bg-opacity-10 px-8 py-4 rounded-xl font-['NeueMontreal']"
        >
          <p>{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
