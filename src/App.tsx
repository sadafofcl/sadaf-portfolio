import './App.css'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Nav from './components/Nav.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import { skills, projects } from './constants.ts' 

function App() {
  return (
    <div className="bg-gray dark:bg-slate-950 transition-colors">
      <Nav />
      <Hero name="Sadaf" position="Trainee" company="ChicMic Studios" />
      <About />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
