import './LetsConnect.css'
import { useEffect, useRef } from 'react'

function LetsConnect() {
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
    <div className="connect" ref={rootRef}>
      <span className="connect-kicker reveal">Get in touch</span>
      <h2 className="connect-name reveal">Let's build something.</h2>
      <p className="call-to-action reveal">
        Open to collaborating, contributing, or starting something new.
      </p>
      <a className="email reveal" href="mailto:ritthickthiaga@gmail.com">
        ritthickthiaga@gmail.com
      </a>
    </div>
  )
}

export default LetsConnect
