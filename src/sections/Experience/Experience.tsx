import React from "react";
import Header from "../../components/Header";
import { Experiences } from "./Experiences";
import arrowLongImg from "../../assets/img/Arrow.svg"

const Experience: React.FC = () => {
  return (
    <>
      <section className="flex border-t p-10 w-full h-full min-h-screen justify-center items-center">
        <div className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center">
          <Header orientation="center">Experience</Header>
          <p className="max-w-screen-md text-center leading-7">
            I started programming in technical high school and continued
            learning on my own to deepen my skills. Later, I earned a Computer
            Science degree and, in March 2024, landed my first developer job—a
            breakthrough in my career. <br/>But I don’t stop there—I keep growing!
          </p>
          <div className="max-w-screen-md w-full flex flex-col gap-20">
            {Experiences.map((experience) => (
                <div key={experience.dates} className="p-10 border rounded-3xl flex flex-col gap-5">
                    <div className="flex justify-between items-center gap-5">
                        <p>{experience.dates}</p>
                        <p>{experience.company}</p>
                    </div>
                    <h3 className="text-4xl font-[600]">{experience.jobTitle}</h3>
                    <p className="line-clamp-3">{experience.description}</p>
                    <div className="flex justify-end">
                        <button className="flex gap-2 items-center">
                            <p>projects and more</p>
                            <img  src={arrowLongImg} />
                        </button>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
