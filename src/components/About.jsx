import './About.css'
import { useEffect, useRef } from 'react'

const FACTS = [
  { label: 'Based in', value: 'Sydney, Australia' },
  { label: 'Role', value: 'AI Engineer, DPN' },
  { label: 'Studied', value: 'Computer Science, UNSW Sydney' },
  { label: 'Focus', value: 'Client solutions & shipping products' },
  { label: 'Lived in', value: 'Abu Dhabi · Singapore · China · India · Australia' },
]

function About() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const elements = Array.from(root.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    })

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about" ref={rootRef}>
      <dl className="about-facts reveal">
        {FACTS.map((fact) => (
          <div className="about-fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="about-body">
        <p className="about-lead reveal">
          I'm an AI Engineer at DPN and a Computer Science graduate from UNSW Sydney,
          focused on turning what a client is trying to do into something built,
          working, and in their hands.
        </p>
        <p className="about-text reveal">
          Most of my work starts with a conversation — understanding the idea, pinning
          down what success actually looks like, and then building it end to end until
          it meets the brief. Having lived and studied in Abu Dhabi, Singapore, China,
          India, and now Australia, I bring a diverse cultural perspective that helps me
          connect with people and adapt quickly to new environments.
        </p>
        <p className="about-text reveal">
          I work across the stack, with a background in security engineering that shapes
          how I build — experience in Python, Java, and C, alongside hands-on work in
          penetration testing and tutoring coding to kids. Outside of work, I enjoy
          building personal projects and contributing to tech communities, all with
          the aim of continually growing and creating meaningful impact.
        </p>
      </div>
    </div>
  )
}

export default About
