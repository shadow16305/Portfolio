import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="fixed top-0 left-0 w-[40px] h-[40px] border-2 border-opacity-80 border-slate-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition duration-100 ease-out will-change-[width,height,transform,border] z-[999] pointer-events-none"
      ></div>
      {/* 3. */}
      <div
        className="fixed top-1/2 left-1/2 w-[4px] h-[4px] bg-slate-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[999] pointer-events-none"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
