import SocialLinks from "../UI/SocialLinks";
import Form from "./Form";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-y-24 bg-black mt-40 pb-8">
      <div className="flex flex-col items-center gap-y-6 text-[#F5F5F7] mt-16">
        <h1 className="text-2xl lg:text-[64px] font-['NeueMontrealMedium']">
          Send me a message!
        </h1>
        <p className="text-base lg:text-lg font-['NeueMontreal'] text-center md:max-w-[486px] px-2 md:px-0">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <Form />
      <div className="flex items-center justify-center gap-9 mt-24 lg:mt-0">
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
