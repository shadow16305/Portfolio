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
    name: "React.js",
  },
  {
    id: "s5",
    name: "Next.js",
  },
  {
    id: "s6",
    name: "Express",
  },
  {
    id: "s7",
    name: "Tailwind",
  },
  {
    id: "s8",
    name: "Node.js",
  },
  {
    id: "s9",
    name: "Bootstrap",
  },

  {
    id: "s10",
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
      className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-2 lg:gap-x-11 lg:gap-y-5 lg:max-w-[700px] xl:max-w-[900px] px-2 md:px-0"
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
