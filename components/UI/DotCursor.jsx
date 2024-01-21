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
      className={`hidden lg:block rounded-full fixed -top-4 -left-3 z-[100] border pointer-events-none p-2 ${
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
      }}>
      <span
        className={`absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 ${
          isHovered ? "bg-white" : "bg-black"
        }`}
      />
    </motion.span>
  );
};

export default DotCursor;
