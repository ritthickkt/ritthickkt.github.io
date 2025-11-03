import './Projects.css'

import Project from "/src/components/Project.jsx"
import codesnippet from "/src/assets/codesnippet.png"
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

function Projects() {
  return (
    <>
    <span className='scroll-indicator'>Scroll →</span>
    <div className="project-stack">
      <div className='projects'>
        <Project projectTitle="Airtable Clone" projectDescription="Built with Supabase, Prisma, and T3 stack, made to replicate the original Airtable website application with an additional button to add 100k rows." projectImage={airtable} projectStack={[react,nextjs,supabase]}/>
        <Project id="firstgal" projectTitle="Code Snippet" projectDescription="A public VS Code Extension that uses Paste Bin API to create sharable links for code snippets" projectLink="https://github.com/ritthickkt/codeSnippet" projectImage={codesnippet} projectStack={[javascript]} />
        <Project projectTitle="Weather App" projectDescription="Built with Open Meteo API and motion providing current temperature, hourly forecasts, and weekly forecasts." projectLink="https://github.com/ritthickkt/weather-app" projectImage={weatherapp} projectStack={[react,vite]}/>
        <Project projectTitle="Pomodoro Timer" projectDescription="Built with Javascript and Electron, providing a 25 and 50 minute pomodoro with 5 and 10 minute breaks respectively" projectLink="https://github.com/ritthickkt/pomodoro-timer" projectImage={pomodoro} projectStack={[javascript, electron]}/>
        <Project projectTitle="Chat App" projectDescription="Group chat application built with firebase, react and electron. Integrates a SSO Login page with Google. " projectLink="https://github.com/ritthickkt/chat-app" projectImage={chatapp} projectStack={[firebase, electron, vite, react]}/>
        <Project projectTitle="Calculator App" projectDescription="Calculator App built with React and Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division." projectLink="https://github.com/ritthickkt/calculator" projectImage={calculator} projectStack={[vite, react]}/>
        <Project projectTitle="AI-Chatbot" projectDescription="AI Chatbot build using Google's Gemini API. Built with React and Vite." projectLink="https://github.com/ritthickkt/chat-bot" projectImage={chatbot} projectStack={[vite, react]}/>
      </div>
    </div>
    </>
  )
}

export default Projects