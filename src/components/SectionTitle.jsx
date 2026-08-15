import './SectionTitle.css'
import { useEffect, useRef } from 'react'

function SectionTitle({ name, kicker }) {
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
    <div className="title" ref={rootRef}>
      {kicker && <span className="section-kicker reveal">{kicker}</span>}
      <h2 className="section-name reveal">{name}</h2>
      <hr className="hairline reveal" />
    </div>
  )
}

export default SectionTitle
