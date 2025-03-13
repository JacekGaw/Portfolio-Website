import locationIcon from "../../assets/img/location.svg";
import Socials from "../../components/Socials";
import { motion } from "motion/react";
import ThemeSwitch from "../../components/ThemeSwitch";

const containerDelayed = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const listItemNegative = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const Hero: React.FC = () => {
  return (
    <section className="flex p-10 w-full h-full flex-col min-h-screen justify-between items-center ">
      <ThemeSwitch />
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center md:justify-between md:items-start">
        <motion.header
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center md:justify-start items-center md:items-start gap-7"
        >
          <motion.h1
            variants={listItemNegative}
            className="font-[800] text-center md:text-left uppercase text-7xl sm:text-7xl lg:text-9xl  drop-shadow-2xl shadow-black"
          >
            Jacek
            <br />
            Gawlyta
          </motion.h1>
          <motion.h3
            variants={listItemNegative}
            className="text-2xl md:text-5xl font-[400]"
          >
            Fullstack Web Developer
          </motion.h3>
          <motion.div
            className="flex gap-2 md:gap-5 items-center"
            variants={listItemNegative}
          >
            <img src={locationIcon} className="h-6 md:h-10 w-auto opacity-50 dark:invert" />
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-[400]">
              based in Wrocław, Poland
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
          >
            <Socials />
          </motion.div>
        </motion.header>
        <nav>
          <motion.ul
            variants={containerDelayed}
            initial="hidden"
            animate="show"
            className="flex flex-col  items-end gap-3 md:gap-10 md:text-3xl"
          >
            <motion.li whileHover={{ x: -10 }} variants={listItem}>
              <a href="#about">About -</a>
            </motion.li>
            <motion.li whileHover={{ x: -10 }} variants={listItem}>
              <a href="#experience">Experience -</a>
            </motion.li>
            <motion.li whileHover={{ x: -10 }} variants={listItem}>
              <a href="#projects">Projects -</a>
            </motion.li>
            <motion.li whileHover={{ x: -10 }} variants={listItem}>
              <a href="#contact">Contact -</a>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
      <div className="h-4 w-auto"></div>
    </section>
  );
};

export default Hero;
