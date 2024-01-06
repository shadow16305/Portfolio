import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 md:gap-y-32 md:w-[60vw] text-white">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-12 md:gap-y-0 w-full">
        <input
          type="text"
          placeholder="Name"
          className="w-[242px] md:w-2/5 bg-transparent border-b border-white focus:outline-none py-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-[242px] md:w-2/5 bg-transparent border-b border-white focus:outline-none py-2"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Your Message"
          className="w-[242px] md:w-full bg-transparent border-b border-white focus:outline-none py-2"
        />
      </div>
      <button className="text-black text-2xl font-['NeueMontrealBold'] border-2 bg-white w-[212px] h-[61px] rounded-[50px] hover:text-white hover:bg-black transition-colors duration-300 mt-16 md:mt-0">
        Send
      </button>
    </div>
  );
};

export default Form;
