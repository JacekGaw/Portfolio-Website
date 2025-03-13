import React from "react";
import Header from "../../components/Header";
import { technologies } from "./technologies";
import { motion } from "motion/react";
import TechIcons from "./TechIcons";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex border-t dark:border-gray-500 p-10 w-full h-full min-h-screen justify-center items-center "
    >
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-20 md:gap-20 justify-center items-center md:justify-between md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 flex flex-col gap-10 lg:gap-20"
        >
          <div className="flex flex-col justify-center items-start gap-5">
            <Header>About</Header>
            <p className="leading-7">
              I'm a JavaScript developer with a year of professional experience,
              specializing in React, TypeScript, and Node.js. I build
              functional, well-optimized web apps with a focus on frontend
              experiences, performance, and clean architecture. My work spans
              full-stack applications and automation bots, always aiming for
              high-quality, maintainable code.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-5">
            <Header>Education</Header>
            <div className="flex flex-col gap-2">
              <p>2021 - 2025, Bachelor of Engineering</p>
              <h3 className="font-[600] text-2xl">
                WSB Merito University Wrocław
              </h3>
              <p>Ended with a degree in Computer Science.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 flex flex-col items-end gap-5"
        >
          <Header className="hidden lg:block" orientation="right">
            Technologies
          </Header>
          <Header className="lg:hidden p-0" orientation="left">
            Technologies
          </Header>

          <TechIcons label="Front-end" techArr={technologies.frontend} />
          <TechIcons label="Back-end" techArr={technologies.backend} />
          <TechIcons
            label="Testing / Devops / Tools"
            techArr={technologies.others}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
