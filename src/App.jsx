import './App.css'
import Tag from '/src/components/Tag.jsx'
import Aboutme from '/src/components/Aboutme.jsx'
import SectionTitle from '/src/components/SectionTitle.jsx'
import TechArsenal from './components/TechArsenal'
import projects from '/src/assets/projects.png'
import settings from '/src/assets/settings.png'
import Lenis from 'lenis'
import { useEffect} from 'react'
import work from '/src/assets/work.png' 
import Projects from '/src/components/Projects.jsx'
import WorkExperience from './components/WorkExperience'
import LetsConnect from './components/LetsConnect.jsx'

function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Tag />
      <div className="home-page">
        <Aboutme />
        <div className="tech-arsenal">
          <SectionTitle logo={settings} name='Tech Arsenal'/>
          <TechArsenal/>
        </div>
        <div className="projects-main">
          <SectionTitle logo={projects} name='Projects'/>
          <Projects/>
        </div>
        <div className="profession-journey">
          <SectionTitle logo={work} name='My Professional Journey'/>
          <WorkExperience />
        </div>
        <div className='lets-connect'>
          <LetsConnect />
        </div>
      </div>
    </>
  )
}

export default App