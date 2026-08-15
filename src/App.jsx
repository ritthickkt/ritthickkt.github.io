import './App.css'
import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

import ScrollProgress from '/src/components/ScrollProgress.jsx'
import ThemeToggle from '/src/components/ThemeToggle.jsx'
import NavBar from '/src/components/NavBar.jsx'
import ScrollCue from '/src/components/ScrollCue.jsx'
import Aboutme from '/src/components/Aboutme.jsx'
import About from '/src/components/About.jsx'
import SectionTitle from '/src/components/SectionTitle.jsx'
import Toolkit from '/src/components/Toolkit.jsx'
import Products from '/src/components/Products.jsx'
import Projects from '/src/components/Projects.jsx'
import WorkExperience from '/src/components/WorkExperience.jsx'
import LetsConnect from '/src/components/LetsConnect.jsx'

function App() {
  const lenisRef = useRef(null)
  const [pastHero, setPastHero] = useState(false)

  // The navbar takes over once the cover is mostly behind us.
  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    let frame
    function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <NavBar visible={pastHero} onHome={() => lenisRef.current?.scrollTo(0)} />
      {/* The floating toggle covers the hero; the navbar's takes over after it. */}
      <ThemeToggle floating hidden={pastHero} />
      <div className="home-page">
        {/* Full-height cover: nothing below it shows until you scroll. */}
        <section className="hero">
          <Aboutme />
          {/* Scrolling through Lenis rather than the native API keeps it from
              fighting the smooth-scroll loop. */}
          {/* Offset clears the navbar, which lands as this scroll finishes. */}
          <ScrollCue
            onActivate={() => lenisRef.current?.scrollTo('#about', { offset: -90 })}
          />
        </section>

        <section className="about-main" id="about">
          <SectionTitle kicker="Who I am" name="About" />
          <About />
        </section>

        {/* Products and Toolkit share a row: 2x2 and 5x3 grids of near-equal height. */}
        <section className="showcase" id="products">
          <div className="showcase-col">
            <SectionTitle kicker="In the market" name="Products" />
            <Products />
          </div>
          <div className="showcase-col">
            <SectionTitle kicker="What I build with" name="Toolkit" />
            <Toolkit />
          </div>
        </section>

        <section className="projects-main">
          <SectionTitle kicker="Selected work" name="Projects" />
          <Projects />
        </section>

        <section className="profession-journey">
          <SectionTitle kicker="Where I've worked" name="Experience" />
          <WorkExperience />
        </section>

        <div className="lets-connect">
          <LetsConnect />
        </div>
      </div>
    </>
  )
}

export default App
