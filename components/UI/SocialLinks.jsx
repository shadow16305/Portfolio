import Image from "next/image";

const socialIcons = [
  {
    id: "i1",
    imgSrc: "/images/telegram.svg",
    alt: "telegram",
  },
  {
    id: "i2",
    imgSrc: "/images/github.svg",
    alt: "github",
  },
  {
    id: "i3",
    imgSrc: "/images/linkedin.svg",
    alt: "linkedin",
  },
];

const SocialLinks = (props) => {
  return (
    <>
      <div
        className={`bg-[#2D17B5] w-[80px] h-[2px] ${props.lineOneClassName}`}
      ></div>
      <div className={`flex gap-6 ${props.className}`}>
        {socialIcons.map((icon) => (
          <Image
            key={icon.id}
            src={icon.imgSrc}
            alt={icon.alt}
            width={32}
            height={32}
          />
        ))}
      </div>
      <div
        className={`bg-[#2D17B5] w-[80px] h-[2px] ${props.lineTwoClassName}`}
      ></div>
    </>
  );
};

export default SocialLinks;
