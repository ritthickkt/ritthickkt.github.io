import './Projects.css'

import Project from "/src/components/Project.jsx"
import codesnippet from "/src/assets/codesnippet.png"
import orbit from "/src/assets/orbit.png"
import weatherapp from "/src/assets/weatherapp.png"
import pomodoro from "/src/assets/pomodoro.png"
import chatapp from "/src/assets/chatapp.png"
import javascript from "/src/assets/javascript.svg"
import react from "/src/assets/react.svg"
import vite from "/src/assets/vite.svg"
import electron from "/src/assets/electron.png"
import firebase from "/src/assets/firebase.svg"
import calculator from "/src/assets/calculator.png"
import airtable from "/src/assets/airtable.png"
import chatbot from "/src/assets/chatbot.png"
import nextjs from "/src/assets/nextjs.png"
import supabase from "/src/assets/supabase.svg"
import mailmind from "/src/assets/mailmind.png"
import swift from "/src/assets/swift.svg"
import claude from "/src/assets/claude.svg"

// `tone` flags a monochrome mark that needs flattening in one of the themes.
const nextjsIcon = { src: nextjs, tone: "light" }

const projectList = [
  { title: "MailMind", description: "MailMind is a native macOS application that uses Claude to categorize and summarise your emails from Gmail and Outlook", link: "https://github.com/ritthickkt/mailmind", image: mailmind, stack: [swift, claude] },
  { title: "Orbit", description: "Built for VSCode, Orbit is a VSCode extension that tracks the languages you code in, the time you coded for and gives you a level in accordance with how much coding experience you have.", link: "https://github.com/ritthickkt/orbit", image: orbit, stack: [javascript] },
  { title: "Airtable Clone", description: "Built with Supabase, Prisma, and T3 stack, made to replicate the original Airtable website application with an additional button to add 100k rows.", link: "https://github.com/ritthickkt/airtable_clone", image: airtable, stack: [react, nextjsIcon, supabase] },
  { title: "Code Snippet", description: "A public VS Code Extension that uses Paste Bin API to create sharable links for code snippets", link: "https://github.com/ritthickkt/codeSnippet", image: codesnippet, stack: [javascript] },
  { title: "Weather App", description: "Built with Open Meteo API and motion providing current temperature, hourly forecasts, and weekly forecasts.", link: "https://github.com/ritthickkt/weather-app", image: weatherapp, stack: [react, vite] },
  { title: "Pomodoro Timer", description: "Built with Javascript and Electron, providing a 25 and 50 minute pomodoro with 5 and 10 minute breaks respectively", link: "https://github.com/ritthickkt/pomodoro-timer", image: pomodoro, stack: [javascript, electron] },
  { title: "Chat App", description: "Group chat application built with firebase, react and electron. Integrates a SSO Login page with Google.", link: "https://github.com/ritthickkt/chat-app", image: chatapp, stack: [firebase, electron, vite, react] },
  { title: "Calculator App", description: "Calculator App built with React and Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.", link: "https://github.com/ritthickkt/calculator", image: calculator, stack: [vite, react] },
  { title: "AI-Chatbot", description: "AI Chatbot build using Google's Gemini API. Built with React and Vite.", link: "https://github.com/ritthickkt/chat-bot", image: chatbot, stack: [vite, react] },
]

const featuredList = projectList.slice(0, 3)
const restList = projectList.slice(3)

function Projects() {
  return (
    <div className="projects-container">
      <div className="featured-row">
        {featuredList.map((p, idx) => (
          <Project
            key={idx}
            projectTitle={p.title}
            projectDescription={p.description}
            projectLink={p.link}
            projectImage={p.image}
            projectStack={p.stack}
            featured={true}
          />
        ))}
      </div>
      <div className="projects-grid">
        {restList.map((p, idx) => (
          <Project
            key={idx}
            projectTitle={p.title}
            projectDescription={p.description}
            projectLink={p.link}
            projectImage={p.image}
            projectStack={p.stack}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
