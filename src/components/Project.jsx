import './Project.css'
import { useEffect } from 'react';

function Project({ projectTitle, projectDescription, projectLink, projectImage, projectStack }) {
  useEffect(() => {
    const selectors = ['.project-parent', '.project', '.title-stack', '.project-title', '.stack-align', '.project-description'];
    const elements = selectors
      .map(sel => Array.from(document.querySelectorAll(sel)))
      .flat();

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className='project-parent'>
        <img src={projectImage} className="project-image"/>
        <div 
          className='project'
          onClick={() => window.open(projectLink, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className='title-stack'>
            <text className='project-title'>{projectTitle}</text>
            <div className='stack-align'>
              {projectStack.map((desc, idx) => (
                <img key={idx} src={desc} className='stack-image' width={30} height={30}></img>
              ))}
            </div>
          </div>
          <text className='project-description'>{projectDescription}</text>
        </div>
      </div>
    </>
  )
}

export default Project