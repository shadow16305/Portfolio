import { motion } from "framer-motion";
import { fromTop, opacityVariants } from "@/tools/variants";

const Form = ({ value }) => {
  const { setShowForm } = value;

  return (
    <div className="flex flex-col items-center gap-y-12 w-[95vw] lg:w-[60vw] h-full text-white relative bg-[#131417] rounded-b-[50px] pt-7 px-10 pb-5">
      <motion.div
        initial="offscreen"
        animate="onscreen"
        exit="offscreen"
        variants={opacityVariants}
        className="flex justify-center md:block gap-x-6"
      >
        <div className="md:absolute md:left-10">
          <button
            data-after="Close"
            onClick={() => setShowForm(false)}
            className="font-['NeueMontrealMedium'] pseudo-text-effect text-base md:text-xl"
          >
            <span>Close</span>
          </button>
        </div>
        <p className="text-base font-['NeueMontreal'] md:text-center md:max-w-[340px] lg:max-w-[486px]">
          I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to
          you as soon as possible.
        </p>
      </motion.div>
      <div className="flex flex-col items-center w-full md:flex-row md:justify-between gap-y-12 md:gap-y-0">
        <motion.div
          initial="offscreen"
          animate="firstElem"
          exit="offscreen"
          variants={fromTop}
          className="w-[242px] md:w-2/5"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 bg-transparent border-b border-white focus:outline-none"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="secondElem"
          exit="offscreen"
          variants={fromTop}
          className="w-[242px] md:w-2/5"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 bg-transparent border-b border-white focus:outline-none"
          />
        </motion.div>
      </div>
      <motion.div
        initial="offscreen"
        animate="thirdElem"
        exit="offscreen"
        variants={fromTop}
        className="flex justify-center w-full"
      >
        <input
          type="text"
          placeholder="Your Message"
          className="w-[242px] md:w-full bg-transparent border-b border-white focus:outline-none py-2"
        />
      </motion.div>
      <motion.div initial="offscreen" animate="fourthElem" exit="offscreen" variants={fromTop}>
        <button className="text-black text-2xl font-['NeueMontrealBold'] border-2 bg-white w-[180px] h-[50px] rounded-[50px] hover:text-white hover:bg-transparent transition-colors duration-300 ">
          Send
        </button>
      </motion.div>
    </div>
  );
};

export default Form;
