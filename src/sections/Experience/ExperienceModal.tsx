import React from "react";
import { ExperienceType } from "./Experiences";
import TechStack from "../../components/TechStack";
import companyIcon from "../../assets/img/company.svg"
import datesIcon from "../../assets/img/calendar.svg"

const ExperienceModal: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => {
  return (
    <>
      <div className="w-full  max-w-screen-xl flex flex-col gap-10 justify-center items-center">
        <div
          className="max-w-screen-md w-full flex flex-col"
        >
          <div className=" flex flex-col gap-5">
            <h3 className="text-5xl font-[600]">{experience.jobTitle}</h3>
            <div className="flex justify-between  items-center gap-5">
                <div className="flex gap-2 items-center">
                    <img src={datesIcon} className="h-6 w-auto dark:invert" />
              <p>{experience.dates}</p>
              </div>
              <div className="flex gap-2 items-center">
                    <img src={companyIcon} className="h-6 w-auto dark:invert" />
              <p>{experience.company}</p>
              </div>
            </div>
            <p className="text-sm md:text-base leading-7 text-justify">{experience.description}</p>
            {experience.projects && (
              <div>
                <h3 className="text-3xl font-[600]">Projects:</h3>
                <ul className="py-5 flex flex-col gap-5">
                    {experience.projects?.map((project) => {
                        return (
                            <li key={project.name} className="flex flex-col gap-2">
                                <h4 className="px-3 text-xl font-[600] dark:border-white border-black border-l-2">{project.name}</h4>
                                <div className="flex flex-col gap-2 px-3">
                                <TechStack items={project.stack} />
                                <p className="text-sm text-justify leading-6">{project.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceModal;
