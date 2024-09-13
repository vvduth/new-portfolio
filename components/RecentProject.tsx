import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selected of <span className="text-purple">recent projects</span>
      </h1>
      <div
        className="flex flex-wrap items-center 
        justify-center p-4 gap-x-24 gap-y-8 mt-10"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-14 sm_h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={project.title} href={project.link}>
              <Link
                href={project.github}
                passHref
                aria-label={`Go to ${project.title} GitHub page`}
              >
                <div
                  className="relative flex items-center justify-center sm:w-[570px] 
               w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10"
                >
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
              </Link>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10
                            lg:h-10 w-8 h-8 flex justify-center items-center
                         "
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    href={project.link}
                    passHref
                    aria-label={`Check live site for ${project.title}`}
                  >
                    <div className="flex lg:text-xs text-sm text-purple cursor-pointer">
                      Check Live Site
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
