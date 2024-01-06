import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    id: "n1",
    text: "My skills",
    link: "#skills",
    offset: 384,
  },
  {
    id: "n2",
    text: "My Projects",
    link: "#projects",
    offset: 160,
  },
  {
    id: "n3",
    text: "About Me",
    link: "#about",
    offset: 160,
  },
  {
    id: "n4",
    text: "Contact Me",
    link: "#contact",
    offset: 80,
  },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const smoothScrollTo = (targetId, offset) => {
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 px-4 lg:px-10 w-screen flex justify-between bg-[#F2F2F2] p-7 text-black font-['NeueMontrealMedium'] z-50">
      <Link href="/" className="text-xl">
        Christian
      </Link>
      <button onClick={navbarClickHandler} className="relative z-10">
        <Image
          src="/images/hamburger.svg"
          alt="navbar icon"
          width={50}
          height={29}
          priority
          className={`saturate-0 ${isOpen && "invert hover:invert-0"} hover:saturate-100 transition duration-300`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 z-0 w-screen origin-top lg:w-fit"
          >
            <div className="flex flex-col items-start justify-center gap-y-6 text-lg ps-10 py-16 bg-[#131417] text-white w-[95vw] lg:w-[22.2em] transition-all duration-300 origin-top-right rounded-b-3xl lg:rounded-b-none lg:rounded-bl-3xl mx-auto lg:mx-0">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <button
                    onClick={() => smoothScrollTo(link.link, link.offset) || setIsOpen(false)}
                    className="relative group"
                  >
                    <span className="group-hover:text-white">{link.text}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-[#2D17B5] transition-all group-hover:w-full"></span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavigation;
