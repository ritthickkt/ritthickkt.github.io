import './App.css'
import linkedIn from '/src/assets/linkedin.png'
import instagram from '/src/assets/instagram.png'
import github from '/src/assets/github.png'
import react from '/src/assets/react.png'
import vite from '/src/assets/vite.png'
import javascript from '/src/assets/javascript.png'
import css from '/src/assets/css.png'
import html from '/src/assets/html.png'
import c from '/src/assets/c.png'
import python from '/src/assets/python.png'
import typescript from '/src/assets/typescript.png'
import nextjs from '/src/assets/nextjs.png'
import expo from '/src/assets/expo.png'
import tailwindcss from '/src/assets/tailwindcss.png'
import pfp from '/src/assets/pfp.png'
import bootstrap from '/src/assets/bootstrap.png'
import typing from '/src/assets/typing.png'
import React, { useEffect } from "react";
import Background from './Background.jsx'
import Silk from '/src/components/Silk.jsx'
import Lenis from 'lenis'

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
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Behind all content
        pointerEvents: 'none' // Allows clicking through to content below
      }}>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="Navbar">
        <img className="pfp" src={pfp} width={93} height={100}/>
        <div className="SocialMedia">
          <div className="App2">
            <a href="https://www.linkedin.com/in/ritthick-thiaga/"><img src={linkedIn} width={40} height={40} /></a>
          </div>
          <div className="App2">
            <a href="https://www.instagram.com/ritthickthiaga/"><img src={instagram} width={50} height={50} /></a>
          </div>
          <div className="App2">
            <a href="https://github.com/ritthickkt"><img src={github} width={50} height={50} /></a>
          </div>
        </div>
        <a className="CV" href={'/ritthick-portfolio/resume.pdf'} download='RitthickThiaga.pdf'>
            Curriculum Vitae | CV
        </a>
      </div>
      <div className="Intro">
        <div className="Hi">
          Hello world,
        </div>
        <div className="Name">
          I'm{'\u00A0'}
          <div className="FirstName">
            Ritthick{'\u00A0'}
          </div>
          <div className="LastName">
            Thiaga.
          </div>
        </div>
        <div className="AboutMe">
          I am a penultimate <strong>computer science</strong> student, specialising in <b>security engineering</b>
          . Scroll down to find more about me and what I do. 
        </div>
      </div>
      <div className="Secondtitle">
        My Stack            
      </div>
      <div className="Apps">
        <div className="App">
          <a href="https://react.dev/">
            <img src={react} width={100} height={100} />  
          </a>
        </div>
        <div className="App">
          <a href="https://vite.dev/">
            <img src={vite} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://www.javascript.com/">
            <img src={javascript} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html">  
            <img src={css} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://en.wikipedia.org/wiki/HTML">
            <img src={html} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
            <img src={c} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://www.github.com/">
            <img src={github} width={100} height={100}/>
          </a>
        </div>
      </div>
      <div className="Apps2">
        <div className="App">
          <a href="https://www.python.org/">
            <img src={python} width={100} height={100} />  
          </a>
        </div>
        <div className="App">
          <a href="https://www.typescriptlang.org/">
            <img src={typescript} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://nextjs.org/">
            <img src={nextjs} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://expo.dev/">
            <img src={expo} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://tailwindcss.com/">
            <img src={tailwindcss} width={100} height={100}/>
          </a>
        </div>
        <div className="App">
          <a href="https://getbootstrap.com//">
            <img src={bootstrap} width={125} height={100}/>
          </a>
        </div>
      </div>
      <div className="Thirdtitle">
        Experience           
      </div>
      <div className="Experience">
        <div className="ExperienceTitle">
          <div>Penetration Testing @ Pearler</div>
        </div>
        <div className="ExperienceDate">
          <div>September 2024 - December 2024</div>
        </div>
        <div className="ExperienceDescription">
          <ul>
            <li>Conducted security assessment on Pearlers main web application, identifying critical vulnerabilities that
posed risks to user data.</li>
            <li>Compiled a detailed security report outlining findings, risk assessments, and remediation
recommendations, improving company-wide security awareness.</li>
          </ul>
        </div>
      </div>
      <div className="Experience">
        <div className="ExperienceTitle">
          <div>Data Analyst Extern @ Webacy</div>
        </div>
        <div className="ExperienceDate">
          <div>August 2024 - September 2024</div>
        </div>
        <div className="ExperienceDescription">
          <ul>
            <li>Analysed and labelled smart contract vulnerabilities, enhancing accuracy in risk categorization and
security assessment.</li>
            <li> Conducted correlation analysis of risk tags to identify the most prevalent vulnerabilities, improving fraud
detection by 25%.</li>
            <li> Applied unsupervised machine learning for cluster analysis, identifying common security risks and
profiling high-risk contracts.</li>
          </ul>
        </div>
      </div>
      <div className='FourthTitle'>
        Projects
      </div>
      <div className='ProjectGrid'>
        <div 
          className='Project'
          onClick={() => window.open("https://github.com/ritthickkt/Typing-Speed-Test", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className='ProjectTitle'>
            <div>Typing Speed Tester</div>
          </div>
          <div className='ProjectDescription'>
            Simple Typing Speed Checker built with React and Vite. It allows users to test their typing speed and accuracy by typing a given text within a time limit.
          </div>
        </div>
        <div 
          className='Project'
          onClick={() => window.open("https://github.com/ritthickkt/calculator", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className='ProjectTitle'>
            <div>Simple Calculator App</div>
          </div>
          <div className='ProjectDescription'>
            Simple Calculator App built with React and Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
          </div>
        </div>
        <div 
          className='Project'
          onClick={() => window.open("https://github.com/ritthickkt/chatbot", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className='ProjectTitle'>
            <div>AI Chatbot</div>
          </div>
          <div className='ProjectDescription'>
            AI Chatbot build using Google's Gemini API. Built with React and Vite. 50 requests per day maximum
          </div>
        </div>
      </div>
    </>
  )
}
export default App