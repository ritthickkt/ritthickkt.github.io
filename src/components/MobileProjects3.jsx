import './Projects.css'

import Project from "/src/components/Project.jsx"
import chatapp from "/src/assets/chatapp.png"
import react from "/src/assets/react.svg"
import vite from "/src/assets/vite.svg"
import electron from "/src/assets/electron.png"
import firebase from "/src/assets/firebase.svg"

function Projects() {
  return (
    <>
    <div className="project-stack">
      <div className='projects'>
        <Project projectTitle="Chat App" projectDescription="Group chat application built with firebase, react and electron. Integrates a SSO Login page with Google. " projectLink="https://github.com/ritthickkt/chat-app" projectImage={chatapp} projectStack={[firebase, electron, vite, react]}/>
      </div>
    </div>
    </>
  )
}

export default Projects