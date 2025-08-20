import './App.css'

function Project({ projectTitle, projectDescription, projectLink }) {
  return (
    <>
      <div 
          className='Project'
          onClick={() => window.open({projectLink}, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className='ProjectTitle'>
            <div>{projectTitle}</div>
          </div>
          <div className='ProjectDescription'>
            {projectDescription}
          </div>
      </div>
    </>
  )
}


export default Project