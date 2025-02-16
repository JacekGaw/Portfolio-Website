import React, { useState } from "react";
import Header from "../../components/Header";
import { projects } from "./projectsArr";
import { Link } from "react-router";
import arrowSkew from "../../assets/img/ArrowSkewed.png"
import arrowShort from "../../assets/img/ArrowShorter.png"
import arrowRight from "../../assets/img/arrow_right.svg"
import Button from "../../components/Button";

const Projects: React.FC = () => {
    const [currentProject, setCurrentProject] = useState<number>(0);


    const handlePrevious = () => {
        if(currentProject === 0){
            setCurrentProject(projects.length -1)
        } else {
            setCurrentProject(p => --p);
        }
    }

    const handleNext = () => {
        if(currentProject === projects.length -1){
            setCurrentProject(0)
        } else {
            setCurrentProject(p => ++p);
        }
    }
  return (
    <>
      <section className="flex border-t p-10 w-full h-full min-h-screen justify-center items-center">
        <div className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center">
          <Header orientation="center">Projects</Header>
          <p>Besides of work projects, I am also doing some on my own!</p>
          <div className="w-full flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-2xl font-[600]">{projects[currentProject].name}</h3>
                <p className="leading-7">{projects[currentProject].description}</p>
                <div className="px-5 flex justify-center items-center flex-wrap text-sm gap-2 font-[400] text-gray-500">
                <p className="w-1 h-1 rounded-full bg-gray-300"></p>{projects[currentProject].stack.map((item, index) => (
                    <>
                    <div key={index}>
                        {item}
                    </div>
                    <p className="w-1 h-1 rounded-full bg-gray-300"></p>
                    </>
                ))}</div>
                <div className="flex justify-end flex-wrap gap-5 p-2">
                    {projects[currentProject].github && <Link target="_blank" to={projects[currentProject].github} className=" gap-2 items-center hidden md:flex">see on github <img className="h-4 w-auto" src={arrowSkew} /></Link>}
                    {projects[currentProject].github && <Link target="_blank" to={projects[currentProject].github} className="flex gap-2 items-center">github <img className="h-4 w-auto md:hidden" src={arrowSkew} /></Link>}
                    <button className="hidden md:flex gap-2 items-center">read more <img  src={arrowShort} /></button>
                    <button className="flex gap-2 items-center md:hidden">more <img  src={arrowShort} /></button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={projects[currentProject].images[0]} className="w-full drop-shadow-lg" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Button onClick={handlePrevious} variant={1} size="sm"><img className="h-4 w-auto rotate-180" src={arrowRight} /></Button>
            <p>{projects[currentProject].id}/{projects.length}</p>
            <Button onClick={handleNext} variant={1} size="sm"><img className="h-4 w-auto" src={arrowRight} /></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
