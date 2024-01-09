import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SocialLinks from "../UI/SocialLinks";
import Form from "./Form";
import { fromBottom } from "@/tools/variants";
import Image from "next/image";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const formDisplayHandler = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  });

  return (
    <div className="bg-[#131417] rounded-t-3xl md:rounded-t-[50px] lg:rounded-t-[100px] pb-12">
      <div className="container relative flex flex-col items-center mx-auto mt-40 lg:gap-y-20" id="contact">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
          className="text-[#F5F5F7] mt-10 lg:mt-16 py-10 lg:py-20"
        >
          <button
            onClick={formDisplayHandler}
            data-after="Send me a message!"
            className="text-2xl md:text-4xl font-['NeueMontrealMedium'] pseudo-text-effect"
          >
            <span>Send me a message!</span>
          </button>
        </motion.div>
        <div className="flex items-center justify-center mt-16 gap-9 lg:mt-0">
          <SocialLinks
            className="invert"
            lineOneClassName="lg:w-[144px] lg:h-[2px] bg-white"
            lineTwoClassName="lg:w-[144px] lg:h-[2px] bg-white"
          />
        </div>
        <Image
          src="/images/dots-white.svg"
          alt="dots"
          width={100}
          height={100}
          className="absolute hidden -translate-y-2/3 left-10 top-1/2 lg:block"
        />
        <Image
          src="/images/dots-white.svg"
          alt="dots"
          width={100}
          height={100}
          className="absolute bottom-0 hidden -translate-y-1/2 right-10 lg:block"
        />
        <Image
          src="/images/stairs-white.svg"
          alt="stairs"
          width={61}
          height={58}
          className="absolute rotate-90 right-[30%] top-14 hidden lg:block"
        />
        <Image
          src="/images/stairs-white.svg"
          alt="stairs"
          width={61}
          height={58}
          className="absolute top-2/3 left-[23%] hidden lg:block"
        />
      </div>
      <AnimatePresence mode="wait">
        {showForm && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-[70vh] z-50 origin-top"
          >
            <Form value={{ showForm, setShowForm }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSection;
