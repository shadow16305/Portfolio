import { useEffect } from "react";

import Typewriter from "typewriter-effect/dist/core";
import SocialLinks from "../UI/SocialLinks";
import Image from "next/image";

const HeroSection = () => {
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
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between  mt-[187px] lg:mt-[211px] relative">
      <div className="flex flex-col gap-y-4 lg:gap-y-16 ps-3 lg:ps-0">
        <h1 className="text-black text-4xl lg:text-8xl font-['NeueMontrealMedium'] flex flex-col lg:gap-y-6 leading-normal">
          Nice to meet you! <span>I’m Chris.</span>
          <span className="text-[#2D17B5] typewriter"></span>
        </h1>
        <button
          onClick={smoothScrollTo}
          className="relative w-[200px] h-[60px] lg:w-[257px] lg:h-[74px] rounded-[50px] bg-black text-white font-['NeueMontrealBold'] text-lg lg:text-2xl mt-12 lg:mt-8 xl:mt-16 transition-colors duration-300 overflow-hidden group"
        >
          <span className="absolute w-full h-full bg-[#2D17B5] top-0 left-0 rounded-[50px] origin-left z-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          <p className="relative z-10">Contact me</p>
        </button>
      </div>
      <div className="flex items-center justify-center mt-32 lg:flex-col gap-9 lg:mt-0">
        <SocialLinks
          className="lg:flex-col"
          lineOneClassName="lg:h-[144px] lg:w-[2px]"
          lineTwoClassName="lg:h-[144px] lg:w-[2px]"
        />
      </div>
      <Image
        src="/images/dots.svg"
        alt="dots"
        width={100}
        height={100}
        className="absolute -top-10 lg:top-0 right-2 lg:right-[10%] 2xl:right-1/4 max-w-14 lg:max-w-none"
      />
      <Image
        src="/images/stairs.svg"
        alt="stairs"
        width={61}
        height={58}
        className="absolute bottom-10 lg:bottom-0 right-3/4 lg:right-1/4"
      />
    </div>
  );
};

export default HeroSection;
