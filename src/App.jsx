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
import electron from '/src/assets/electron.png'
import sql from '/src/assets/sql.png'
import fastapi from '/src/assets/fastapi.png'
import jinja from '/src/assets/jinja.png'
import netbeans from '/src/assets/netbeans.png'
import firebase from '/src/assets/firebase.png'
import typing from '/src/assets/typing.png'
import React, { useEffect } from "react";
import Background from './Background.jsx'
import Silk from '/src/components/Silk.jsx'
import Lenis from 'lenis'
import Project from './Project.jsx'
import Experience from './Experience.jsx'

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
          zIndex: -1, 
          pointerEvents: 'none' 
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
        <img className="pfp" src={pfp} width={100} height={100}/>
        <div className="SocialMedia">
          <div className="NavbarApp">
            <a href="https://www.linkedin.com/in/ritthick-thiaga/"><img src={linkedIn} width={40} height={40} /></a>
          </div>
          <div className="NavbarApp">
            <a href="https://www.instagram.com/ritthickthiaga/"><img src={instagram} width={50} height={50} /></a>
          </div>
          <div className="NavbarApp">
            <a href="https://github.com/ritthickkt"><img src={github} width={50} height={50} /></a>
          </div>
        </div>
        <a className="CV" href={'/resume.pdf'} download='RitthickThiaga.pdf'>
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
          I am a penultimate <b>computer science</b> student, specialising in <b>security engineering</b>
          . Scroll down to find more about me and what I do. 
        </div>
      </div>
      <div className='Space'>
        <div className="Title">
          Tech Arsenal            
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
              <img src={bootstrap} width={100} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://electronjs.org//">
              <img src={electron} width={100} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://www.mysql.com/">
              <img src={sql} width={100} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://firebase.google.com/?gad_campaignid=20100026061">
              <img src={firebase} width={80} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://fastapi.tiangolo.com/">
              <img src={fastapi} width={100} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://jinja.palletsprojects.com/en/stable/">
              <img src={jinja} width={100} height={100}/>
            </a>
          </div>
          <div className="App">
            <a href="https://netbeans.apache.org/front/main/index.html">
              <img src={netbeans} width={100} height={100}/>
            </a>
          </div>
        </div>
      </div>
      <div className="Space">
        <div className="Title">
          Experience           
        </div>
        <Experience 
          ExperienceTitle="Penetration Testing - Pearler"
          ExperienceDate="September 2024 - December 2024"
          ExperienceDescription={[
            "Conducted security assessment on Pearlers main web application, identifying critical vulnerabilities that posed risks to user data.",
            "Compiled a detailed security report outlining findings, risk assessments, and remediation recommendations, improving company-wide security awareness."
          ]}
        />
        <Experience 
          ExperienceTitle="Data Analyst Extern - Webacy"
          ExperienceDate="August 2024 - September 2024"
          ExperienceDescription={[
            "Analysed and labelled smart contract vulnerabilities, enhancing accuracy in risk categorization and security assessment.",
            "Conducted correlation analysis of risk tags to identify the most prevalent vulnerabilities, improving fraud detection by 25%",
            "Applied unsupervised machine learning for cluster analysis, identifying common security risks and profiling high-risk contracts."
          ]}
        />
        <Experience 
          ExperienceTitle="Python Tutor - Self Employed"
          ExperienceDate="December 2023 - Febuary 2024"
          ExperienceDescription={[
            "Provided personalized Python tutoring, helping students grasp data structures, algorithms, and software development concepts.",
            "Led students in developing a Food Management System, integrating Python with SQL databases, enhancing their practical coding skills by 40%.",
            "Conducted online assessments to track student progress and tailor lesson plans for optimal learning outcomes.",
            "Encouraged innovation by designing project-based learning, allowing students to build real-world applications.",
          ]}
        />
      </div>
      <div className='Space'>
        <div className='Title'>
          Projects
        </div>
        <div className='ScrollRight'>
          Scroll →
        </div>
        <div className='ProjectGrid'>
          <Project projectTitle="Code Snippet" projectDescription="A public VS Code Extension that uses Paste Bin API to create sharable links for code snippets" projectLink="https://github.com/ritthickkt/codeSnippet"/>
          <Project projectTitle="Pomodoro Timer" projectDescription="Features customizable 25+5 and 50+10 minute Pomodoro settings for focused work sessions." projectLink="https://github.com/ritthickkt/pomodoro-timer"/>
          <Project projectTitle="Chat App" projectDescription="Group chat application built with firebase, react and electron. Integrates a SSO Login page with Google. " projectLink="https://github.com/ritthickkt/chat-app"/>
          <Project projectTitle="Weather App" projectDescription="Weather allows users to forecast weather for any location including precipitation probability and hourly forecasts." projectLink="https://github.com/ritthickkt/weather-app"/>
          <Project projectTitle="Typing speed tester" projectDescription="Typing Speed Checker built with React and Vite. It allows users to test their typing speed and accuracy by typing a given text within a time limit." projectLink="https://github.com/ritthickkt/Typing-Speed-Test"/>
          <Project projectTitle="Calculator App" projectDescription="Calculator App built with React and Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division." projectLink="https://github.com/ritthickkt/calculator"/>
          <Project projectTitle="AI-Chatbot" projectDescription="AI Chatbot build using Google's Gemini API. Built with React and Vite." projectLink="https://github.com/ritthickkt/chat-bot"/>
        </div>
      </div>
    </>
  )
}
export default App