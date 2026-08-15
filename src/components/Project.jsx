import './Project.css'
import { useEffect, useRef } from 'react'

function Project({ projectTitle, projectDescription, projectLink, projectImage, projectStack, featured }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    })

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-parent${featured ? ' featured' : ''}`}
      onClick={() => window.open(projectLink, '_blank', 'noreferrer')}
    >
      <img src={projectImage} className="project-image" alt={projectTitle} />
      <div className="project">
        <div className="title-stack">
          <span className="project-title">{projectTitle}</span>
          <div className="stack-align">
            {projectStack.map((tech, idx) => (
              <img
                key={idx}
                src={tech.src ?? tech}
                alt=""
                className={`stack-image${tech.tone ? ` tone-${tech.tone}` : ''}`}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
        <span className="project-description">{projectDescription}</span>
      </div>
    </div>
  )
}

export default Project
