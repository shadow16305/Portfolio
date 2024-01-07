import { motion } from "framer-motion";

import SocialLinks from "../UI/SocialLinks";
import Form from "./Form";
import { fromBottom } from "@/tools/variants";

const ContactSection = () => {
  return (
    <div
      className="flex flex-col items-center pb-8 mt-40 bg-[#131417] gap-y-20 rounded-t-3xl md:rounded-t-[100px]"
      id="contact"
    >
      <div className="flex flex-col items-center gap-y-6 text-[#F5F5F7] mt-16">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
        >
          <h1 className="text-2xl lg:text-[64px] font-['NeueMontrealMedium']">Send me a message!</h1>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
        >
          <p className="text-base lg:text-lg font-['NeueMontreal'] text-center md:max-w-[486px] px-2 md:px-0">
            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to
            you as soon as possible.
          </p>
        </motion.div>
      </div>
      <Form />
      <div className="flex items-center justify-center mt-24 gap-9 lg:mt-0">
        <SocialLinks
          className="invert"
          lineOneClassName="lg:w-[144px] lg:h-[2px] bg-white"
          lineTwoClassName="lg:w-[144px] lg:h-[2px] bg-white"
        />
      </div>
    </div>
  );
};

export default ContactSection;
