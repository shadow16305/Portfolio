import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DotCursor = ({ hovered }) => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { isHovered } = hovered;

  return (
    <motion.span
      className={`rounded-full bg-black fixed top-0 left-0 z-[999] border border-white ${
        isHovered && "backdrop-blur-sm"
      }`}
      animate={{
        x: mousePos.x,
        y: mousePos.y,
        width: isHovered ? "50px" : "16px",
        height: isHovered ? "50px" : "16px",
        background: isHovered ? "transparent" : "black",
      }}
      transition={{
        type: "tween",
        x: { duration: 0.02 },
        y: { duration: 0.02 },
        width: { duration: 0.3 },
        height: { duration: 0.3 },
        background: { duration: 0.3 },
      }}
    />
  );
};

export default DotCursor;
