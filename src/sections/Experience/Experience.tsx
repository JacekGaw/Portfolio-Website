import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { Experiences } from "./Experiences";
import arrowLongImg from "../../assets/img/Arrow.svg";
import arrowShortImg from "../../assets/img/ArrowShorter.png";
import { motion } from "motion/react";
import Modal, { ModalRef } from "../../components/Modal";
import ExperienceModal from "./ExperienceModal";

const Experience: React.FC = () => {
  const modalRef = useRef<ModalRef>(null);
  const [experienceItem, setExperienceItem] = useState<number>(0);

  const handleOpenExperience = (index: number) => {
    setExperienceItem(index);
    modalRef.current?.open();
  };

  return (
    <>
      <Modal ref={modalRef}>
        <ExperienceModal experience={Experiences[experienceItem]} />
      </Modal>
      <section
        id="experience"
        className="flex border-t dark:border-gray-500 p-10 w-full h-full min-h-screen justify-center items-center "
      >
        <div className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center">
          <Header orientation="center">Experience</Header>
          <p className="max-w-screen-md text-center leading-7">
            I started programming in technical high school and continued
            learning on my own to deepen my skills. Later, I earned a Computer
            Science degree and, in March 2024, landed my first developer job—a
            breakthrough in my career. <br />
            But I don’t stop there—I keep growing!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-screen-md w-full flex flex-row-reverse flex-nowrap overflow-x-scroll pb-5 gap-10 "
          >
            {Experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="p-10 flex-1 w-full min-w-[300px] md:min-w-lg border rounded-3xl flex flex-col justify-between  gap-5"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center gap-5">
                    <p>{experience.dates}</p>
                    <p>{experience.company}</p>
                  </div>
                  <h3 className="text-4xl font-[600]">{experience.jobTitle}</h3>
                  <p className="line-clamp-3 ">{experience.description}</p>
                </div>
                <div className="flex justify-end">
                  <motion.button
                    initial={{ y: 0 }} // Start below with opacity 0
                    whileInView={{
                      y: [0, 0, -10, 0],
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeOut",
                      },
                    }} // Moves up once and settles
                    whileHover={{ x: -10 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 1 }}
                    onClick={() => handleOpenExperience(index)}
                    className="flex gap-2 items-center cursor-pointer"
                  >
                    <p>projects and more</p>
                    <img
                      className="hidden md:block dark:invert"
                      src={arrowLongImg}
                    />
                    <img
                      className="md:hidden h-2 w-auto dark:invert"
                      src={arrowShortImg}
                    />
                  </motion.button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience;
