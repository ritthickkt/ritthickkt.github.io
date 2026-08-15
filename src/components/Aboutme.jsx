import './Aboutme.css'
import me from '/src/assets/me.jpeg'
import instagram from '/src/assets/instagram.png'
import github from '/src/assets/github.png'
import linkedin from '/src/assets/linkedin.png'
import { useEffect, useState } from 'react'

const NAME_LINES = ['Ritthick', 'Thiaga']

function Aboutme() {
  const [revealed, setRevealed] = useState(false)

  // The hero is always above the fold, so it plays on mount rather than
  // waiting on an intersection observer.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setRevealed(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  let charIndex = 0

  return (
    <div className="hero-grid">
      <div className="hero-copy">
        <span className="hero-eyebrow">Digital Systems Associate &middot; Sydney, Australia</span>

        <h1 className="hero-name">
          {NAME_LINES.map((line) => (
            <span className="hero-name-line" key={line}>
              {line.split('').map((char, i) => {
                const delay = charIndex++ * 0.035
                return (
                  <span
                    key={i}
                    className="name-char"
                    style={{
                      transitionDelay: `${delay}s`,
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? 'translateY(0)' : 'translateY(28px)',
                    }}
                  >
                    {char}
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <span className="hero-rule" />

        <p className="hero-intro">
          Computer Science at UNSW. I work closely with people to understand what
          they actually need, then build and ship it end to end.
        </p>

        <div className="contact-handles">
          <a href="https://www.linkedin.com/in/ritthick-thiaga/" aria-label="LinkedIn">
            <img className="linkedIn" src={linkedin} width={30} height={30} alt="" />
          </a>
          <a href="https://www.instagram.com/ritthickthiaga/" aria-label="Instagram">
            <img className="instagram" src={instagram} width={30} height={30} alt="" />
          </a>
          <a href="https://github.com/ritthickkt" aria-label="GitHub">
            <img className="github" src={github} width={30} height={30} alt="" />
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        <img className="picture" src={me} alt="Ritthick Thiaga" />
      </div>
    </div>
  )
}

export default Aboutme
