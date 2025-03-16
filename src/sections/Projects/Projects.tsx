import { useState } from "react";
import Header from "../../components/Header";
import { projects } from "./projectsArr";
import arrowSkew from "../../assets/img/ArrowSkewed.png";
// import arrowShort from "../../assets/img/ArrowShorter.png";
import arrowRight from "../../assets/img/arrow_right.svg";
import Button from "../../components/Button";
import { motion, AnimatePresence } from "motion/react";
import TechStack from "../../components/TechStack";

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const handlePrevious = () => {
    if (currentProject === 0) {
      setCurrentProject(projects.length - 1);
    } else {
      setCurrentProject((p) => --p);
    }
  };

  const handleNext = () => {
    if (currentProject === projects.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject((p) => ++p);
    }
  };
  return (
    <>
      <section
        id="projects"
        className="flex border-t dark:border-gray-500 p-10 w-full h-full min-h-screen justify-center items-center"
      >
        <div className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center">
          <Header orientation="center">Projects</Header>
          <p>Besides of work projects, I am also doing some on my own!</p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full flex flex-col md:flex-row gap-20 items-center justify-between"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentProject].name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex-1 flex flex-col gap-5"
              >
                <motion.h3 className="text-2xl font-[600]">
                  {projects[currentProject].name}
                </motion.h3>

                <p className="leading-7 text-justify text-sm xl:text-base">
                  {projects[currentProject].description}
                </p>
                <TechStack items={projects[currentProject].stack} />
                <div className="flex justify-end flex-wrap gap-5 p-2">
                  {projects[currentProject].github && (
                    <motion.a
                    whileHover={{x:-5}}
                    whileTap={{scale: 0.9}}
                      target="_blank"
                      href={projects[currentProject].github}
                      className=" gap-2 items-center hidden md:flex"
                    >
                      see on github{" "}
                      <img className="h-4 w-auto dark:invert" src={arrowSkew} />
                    </motion.a>
                  )}
                  {projects[currentProject].github && (
                    <motion.a
                    whileHover={{x:-5}}
                    whileTap={{scale: 0.9}}
                      target="_blank"
                      href={projects[currentProject].github}
                      className="flex gap-2 items-center md:hidden"
                    >
                      github{" "}
                      <img className="h-4 w-auto md:hidden dark:invert" src={arrowSkew} />
                    </motion.a>
                  )}
                  {/* <motion.button
                  whileHover={{x:-5}}
                  whileTap={{scale: 0.9}}
                  className="hidden md:flex gap-2 items-center cursor-pointer">
                    read more <img className="dark:invert" src={arrowShort} />
                  </motion.button>
                  <motion.button
                  whileHover={{x:-5}}
                  whileTap={{scale: 0.9}}
                  className="flex gap-2 items-center md:hidden">
                    more <img className="dark:invert" src={arrowShort} />
                  </motion.button> */}
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
            <motion.div
            key={projects[currentProject].name}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7, transition:{delay: 0.1} }}
            className="flex-1 justify-center hidden md:flex items-center">
              <img
                src={projects[currentProject].images[0]}
                className="w-full drop-shadow-lg"
              />
            </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center items-center gap-5"
          >
            <Button onClick={handlePrevious} variant={1} size="sm">
              <img className="h-4 w-auto rotate-180 dark:invert" src={arrowRight} />
            </Button>
            <p>
              {projects[currentProject].id}/{projects.length}
            </p>
            <Button onClick={handleNext} variant={1} size="sm">
              <img className="h-4 w-auto dark:invert" src={arrowRight} />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
