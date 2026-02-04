import './App.css'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Nav from './components/Nav.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import { name, role, skills, projects, about, endpoint, footerBrand, githubURL, linkedinURL, heroImageSrc, company, position, navItems,  } from './constants.ts' 


function App() {
  return (
    <div className="bg-gray dark:bg-slate-950 transition-colors">
      <Nav navItems={navItems}/>
      <Hero name={name} position={position} company={company} heroImageSrc={heroImageSrc}/>
      <About name={name} role={role} about={about} />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact endpoint={endpoint}/>
      <Footer footerBrand={footerBrand} linkedinURL={linkedinURL} githubURL={githubURL} />
    </div>
  )
}

export default App
