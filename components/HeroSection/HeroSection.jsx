import { useEffect } from "react";

import Typewriter from "typewriter-effect/dist/core";
import SocialLinks from "../UI/SocialLinks";
import Image from "next/image";

const HeroSection = ({ hovered }) => {
  const { setIsHovered } = hovered;

  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector(".typewriter"), {
      cursor: "|",
      autoStart: true,
    });

    typewriter.changeDelay(80).typeString("A full-stack developer.").start();
  }, []);

  const smoothScrollTo = () => {
    const target = document.querySelector("#contact");
    if (target) {
      const offset = 80;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between mt-[187px] xl:mt-40 2xl:mt-[211px] relative">
      <div className="flex flex-col gap-y-4 lg:gap-y-16">
        <h1 className="text-black text-4xl md:text-6xl lg:text-8xl font-['NeueMontrealMedium'] flex flex-col md:gap-y-6 leading-normal">
          Nice to meet you! <span>I’m Chris.</span>
          <span className="text-neon-blue typewriter"></span>
        </h1>
        <button
          onClick={smoothScrollTo}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-[200px] h-[60px] lg:w-[257px] lg:h-[74px] rounded-[50px] bg-black text-white font-['NeueMontrealBold'] text-lg lg:text-2xl mt-12 lg:mt-8 xl:mt-16 transition-colors duration-300 overflow-hidden group">
          <span className="absolute w-full h-full bg-neon-blue top-0 left-0 rounded-[50px] origin-left z-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          <p className="relative z-10">Contact me</p>
        </button>
      </div>
      <div className="flex items-center justify-center mt-32 md:flex-col gap-9 md:mt-0">
        <SocialLinks
          className="md:flex-col"
          lineOneClassName="md:h-[144px] md:w-[2px] bg-neon-blue"
          lineTwoClassName="md:h-[144px] md:w-[2px] bg-neon-blue"
        />
      </div>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={0}
        height={0}
        className="absolute -top-10 lg:top-0 right-2 md:right-[10%] 2xl:right-1/4 w-14 h-auto lg:w-20"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={0}
        height={0}
        className="absolute h-auto bottom-10 lg:bottom-0 right-3/4 md:right-1/4 w-14 lg:w-16"
      />
    </div>
  );
};

export default HeroSection;
