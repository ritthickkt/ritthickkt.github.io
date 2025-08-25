import './Projects.css'

import Project from "/src/components/Project.jsx"
import typingspeed from "/src/assets/typingspeed.png"
import calculator from "/src/assets/calculator.png"
import react from "/src/assets/react.svg"
import vite from "/src/assets/vite.svg"
import chatbot from "/src/assets/chatbot.png"

function Projects() {
  return (
    <>
    <div className="project-stack">
      <div className='projects'>
        <Project id="secondgal" projectTitle="Typing speed tester" projectDescription="Typing Speed Checker built with React and Vite. It allows users to test their typing speed and accuracy by typing a given text within a time limit." projectLink="https://github.com/ritthickkt/Typing-Speed-Test" projectImage={typingspeed} projectStack={[vite, react]}/>
        <Project projectTitle="Calculator App" projectDescription="Calculator App built with React and Vite. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division." projectLink="https://github.com/ritthickkt/calculator" projectImage={calculator} projectStack={[vite, react]}/>
        <Project projectTitle="AI-Chatbot" projectDescription="AI Chatbot build using Google's Gemini API. Built with React and Vite." projectLink="https://github.com/ritthickkt/chat-bot" projectImage={chatbot} projectStack={[vite, react]}/>
      </div>
    </div>
    </>
  )
}

export default Projects