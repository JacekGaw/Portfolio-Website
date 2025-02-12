import React from "react"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"

const App: React.FC = () => {

  return (
    <main className="tracking-widest">
      <Hero />
      <About />
    </main>
  )
}

export default App;
