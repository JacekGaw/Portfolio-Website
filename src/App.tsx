import React from "react"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Experience from "./sections/Experience/Experience"
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact"

const App: React.FC = () => {

  return (
    <main className="tracking-widest">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="w-full bg-black dark:bg-white dark:text-gray-950 text-white p-2 flex justify-center items-center"><p>2025, Jacek Gawlyta</p></footer>
    </main>
  )
}

export default App;
