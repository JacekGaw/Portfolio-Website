import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import moonIcon from "../assets/img/Moon Regular.svg";
import sunIcon from "../assets/img/Sun Regular Icon.svg";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    let isDark: boolean;
    
    if (savedTheme === 'dark') {
      isDark = true;
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      isDark = false;
      document.documentElement.classList.remove('dark');
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
    setDarkMode(isDark);
    setMounted(true);
  }, []);

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    className="relative">
      <motion.button
        onClick={toggleDarkMode}
        className="w-18 h-10 relative shadow-md dark:shadow-gray-800 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 overflow-hidden"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className={`absolute top-1 cursor-pointer rounded-full p-2 w-8 h-8 flex justify-center items-center`}
          initial={{ x: darkMode ? 2 : 38 }}
          animate={{ 
            x: darkMode ? 2 : 38,
            backgroundColor: darkMode ? '#364153' : '#e5e7eb' 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        >
          <motion.img 
            className={`h-4 w-auto ${darkMode && "invert"}`}
            src={darkMode ? sunIcon : moonIcon}
            initial={{ rotate: darkMode ? 180 : 0 }}
            animate={{ 
              rotate: darkMode ? 180 : 0
            }}
            transition={{ 
              duration: 0.5 
            }}
          />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeSwitch;