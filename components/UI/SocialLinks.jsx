import Image from "next/image";

const socialIcons = [
  {
    id: "i1",
    imgSrc: "/images/telegram.svg",
    alt: "telegram",
    link: "https://t.me/Shadow163",
  },
  {
    id: "i2",
    imgSrc: "/images/github.svg",
    alt: "github",
    link: "https://github.com/shadow16305",
  },
  {
    id: "i3",
    imgSrc: "/images/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/chris-ab-a89133215/",
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
          <a
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-125"
          >
            <Image src={icon.imgSrc} alt={icon.alt} width={32} height={32} />
          </a>
        ))}
      </div>
      <div
        className={`bg-[#2D17B5] w-[80px] h-[2px] ${props.lineTwoClassName}`}
      ></div>
    </>
  );
};

export default SocialLinks;
