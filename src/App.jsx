import './App.css'
import Tag from '/src/components/Tag.jsx'
import Aboutme from '/src/components/Aboutme.jsx'
import SectionTitle from '/src/components/SectionTitle.jsx'
import TechArsenal from './components/TechArsenal'
import projects from '/src/assets/projects.png'
import settings from '/src/assets/settings.png'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'
// import achievements from 'src/assets/achievements.png'
import work from '/src/assets/work.png' 
import Projects from '/src/components/Projects.jsx'
import Projects2 from '/src/components/Projects2.jsx'
import MobileProjects from '/src/components/MobileProjects.jsx'
import MobileProjects2 from '/src/components/MobileProjects2.jsx'
import MobileProjects3 from '/src/components/MobileProjects3.jsx'
import WorkExperience from './components/WorkExperience'
import LetsConnect from './components/LetsConnect.jsx'

function App() {
  const [showProjects, setShowProjects] = useState(1);
  const [isMobile, setIsMobile] = useState(window.inheritWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const showProjects1 = () => setShowProjects(1);
  const showProjects2 = () => setShowProjects(2);
  const showProjects3 = () => setShowProjects(3);

  return (
    <>
      <Tag />
      <div className="home-page">
        <Aboutme />
        <div className="tech-arsenal">
          <SectionTitle logo={settings} name='Tech Arsenal'/>
          <TechArsenal/>
        </div>
        {!isMobile ? (
          <div className="projects-main">
            <SectionTitle logo={projects} name='Projects'/>
            <div className="navigation">
              <button className='buttons' onClick={showProjects1}></button>
              <button className='buttons' onClick={showProjects2}></button>
            </div>
            {showProjects === 1 ? <Projects /> : <Projects2 />}
          </div>
        ) : (
          <div className="projects-main-mobile">
            <SectionTitle logo={projects} name='Projects'/>
            <div className="navigation">
              <button className='buttons' onClick={showProjects1}></button>
              <button className='buttons' onClick={showProjects2}></button>
              <button className='buttons' onClick={showProjects3}></button>
            </div>
            {showProjects === 1 && <MobileProjects />}
            {showProjects === 2 && <MobileProjects2 />}
            {showProjects === 3 && <MobileProjects3 />}
          </div>
        )}
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