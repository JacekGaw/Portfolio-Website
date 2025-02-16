import React from "react"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Experience from "./sections/Experience/Experience"
import Projects from "./sections/Projects/Projects"

const App: React.FC = () => {

  return (
    <main className="tracking-widest">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}

export default App;
