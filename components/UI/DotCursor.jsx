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
      className={`hidden lg:block rounded-full fixed -top-3 -left-3 z-[999] border pointer-events-none ${
        isHovered ? "border-white" : "border-black"
      } backdrop-blur-sm`}
      animate={{
        x: isHovered ? mousePos.x - 32 : mousePos.x,
        y: isHovered ? mousePos.y - 32 : mousePos.y,
        width: isHovered ? "80px" : "16px",
        height: isHovered ? "80px" : "16px",
      }}
      transition={{
        type: "tween",
        x: { duration: 0.02 },
        y: { duration: 0.02 },
        width: { duration: 0.6, type: "spring" },
        height: { duration: 0.6, type: "spring" },
      }}
    />
  );
};

export default DotCursor;
