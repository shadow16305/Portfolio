const ProjectLayout = (props) => {
  return (
    <div
      className={`h-[520px] bg-cover bg-center flex items-end pb-10 px-4 lg:px-0 lg:ps-10 rounded-[50px] relative hover:scale-105 transition-all duration-300 font-['NeueMontreal'] ${props.className}`}
      style={{ backgroundImage: `url('${props.bgUrl}')` }}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-3xl">{props.title}</h3>
        <p className={`hidden lg:block border rounded-3xl px-3 py-1 text-base ${props.toolClassName}`}>{props.tools}</p>
        <div className="flex gap-x-10 lg:hidden">
          <a href={props.site} className="text-2xl" target="_blank" rel="norefferer">
            Live site
          </a>
          <a href={props.github} className="text-2xl" target="_blank" rel="norefferer">
            Github
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center absolute z-10 opacity-0 hover:opacity-100 bg-black bg-opacity-70 transition-all duration-300 h-full w-full left-0 top-0 rounded-[50px]">
        <div className="flex gap-x-10 lg:text-white">
          <a
            href={props.site}
            className="text-3xl border relative w-[165px] h-[45px] rounded-[50px] font-['NeueMontreal'] transition-colors duration-300 overflow-hidden group flex justify-center items-center"
            target="_blank"
            rel="norefferer"
          >
            <span className="relative z-10 group-hover:lg:text-black">Live Site</span>
            <span className="absolute w-full h-full bg-white top-0 left-0 rounded-[50px] origin-left z-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
          <a
            href={props.github}
            className="text-3xl relative w-[165px] h-[45px] rounded-[50px] font-['NeueMontreal'] transition-colors duration-300 overflow-hidden group flex justify-center items-center"
            target="_blank"
            rel="norefferer"
          >
            <span className="relative z-10 group-hover:lg:text-black">Github</span>
            <span className="absolute w-full h-full bg-white top-0 left-0 rounded-[50px] origin-left z-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
