import './Experience.css'
import { useEffect, useRef } from 'react'

// Legal suffixes and generic descriptors carry no signal in a monogram.
const NOISE = /^(inc|inc\.|ltd|llc|pty|group|technology|technologies|services|solutions|labs|co)$/i

/*
 * Falls back to initials until a real logo is supplied: an all-caps short name
 * is already an acronym and stays whole, otherwise the first meaningful word's
 * initial is used.
 */
function initialsFor(company) {
  const words = company.split(/\s+/).filter((word) => !NOISE.test(word))
  const first = words[0] ?? company

  if (first.length <= 3 && first === first.toUpperCase()) return first
  return first.charAt(0).toUpperCase()
}

function Experience({
  ExperienceCompany,
  ExperienceTitle,
  ExperienceDate,
  ExperienceDescription,
  ExperienceLogo,
  ExperiencePlate,
  ExperienceRoles,
}) {
  // A promotion lists several roles at one company, newest first; a single
  // role can still be passed through the flat Title/Date/Description props.
  const roles = ExperienceRoles ?? [
    {
      title: ExperienceTitle,
      date: ExperienceDate,
      description: ExperienceDescription,
    },
  ]

  const contentRef = useRef(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    })

    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="experience">
      <div className={`experience-logo${ExperiencePlate ? ' plate' : ''}`}>
        {ExperienceLogo ? (
          <img src={ExperienceLogo} alt={`${ExperienceCompany} logo`} />
        ) : (
          <span className="experience-monogram" aria-hidden="true">
            {initialsFor(ExperienceCompany)}
          </span>
        )}
      </div>

      <div className="experience-content" ref={contentRef}>
        <span className="experience-company">{ExperienceCompany}</span>
        <div className={`experience-roles${roles.length > 1 ? ' multi' : ''}`}>
          {roles.map((role) => (
            <div className="experience-role" key={role.title}>
              <span className="experience-title">{role.title}</span>
              <span className="experience-date">{role.date}</span>
              {role.description?.length > 0 && (
                <ul className="experience-description">
                  {role.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
