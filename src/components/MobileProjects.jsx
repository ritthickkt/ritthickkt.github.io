import './Projects.css'

import Project from "/src/components/Project.jsx"
import codesnippet from "/src/assets/codesnippet.png"
import weatherapp from "/src/assets/weatherapp.png"
import pomodoro from "/src/assets/pomodoro.png"
import javascript from "/src/assets/javascript.svg"
import react from "/src/assets/react.svg"
import vite from "/src/assets/vite.svg"
import electron from "/src/assets/electron.png"

function Projects() {
  return (
    <>
    <div className="project-stack">
      <div className='projects'>
        <Project id="firstgal" projectTitle="Code Snippet" projectDescription="A public VS Code Extension that uses Paste Bin API to create sharable links for code snippets" projectLink="https://github.com/ritthickkt/codeSnippet" projectImage={codesnippet} projectStack={[javascript]} />
        <Project projectTitle="Weather App" projectDescription="Built with Open Meteo API and motion providing current temperature, hourly forecasts, and weekly forecasts." projectLink="https://github.com/ritthickkt/weather-app" projectImage={weatherapp} projectStack={[react,vite]}/>
        <Project projectTitle="Pomodoro Timer" projectDescription="Built with Javascript and Electron, providing a 25 and 50 minute pomodoro with 5 and 10 minute breaks respectively" projectLink="https://github.com/ritthickkt/pomodoro-timer" projectImage={pomodoro} projectStack={[javascript, electron]}/>
      </div>
    </div>
    </>
  )
}

export default Projects