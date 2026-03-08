import './Aboutme.css'
import me from '/src/assets/me.jpeg'
import instagram from '/src/assets/instagram.png'
import github from '/src/assets/github.png'
import linkedin from '/src/assets/linkedin.png'
import { useEffect, useState } from 'react'

const NAME = "Ritthick Thiaga"

function Aboutme() {
  const [nameVisible, setNameVisible] = useState(false)

  useEffect(() => {
    const selectors = ['.picture', '.location', '.linkedIn', '.instagram', '.github', '.occupation', '.description']
    const elements = selectors.map(sel => Array.from(document.querySelectorAll(sel))).flat()

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    })
    elements.forEach(el => observer.observe(el))

    const nameEl = document.querySelector('.name-reveal')
    const nameObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setNameVisible(true)
        nameObserver.disconnect()
      }
    })
    if (nameEl) nameObserver.observe(nameEl)

    return () => {
      observer.disconnect()
      nameObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div className="parent">
        <div className='child1'>
          <img className="picture" src={me} width={200} height={200}/>
          <p className='location'>Sydney, Australia</p>
          <div className='contact-handles'>
            <a href="https://www.linkedin.com/in/ritthick-thiaga/"><img className="linkedIn" src={linkedin} width={35} height={35}/></a>
            <a href="https://www.instagram.com/ritthickthiaga/"><img className="instagram" src={instagram} width={35} height={35}/></a>
            <a href="https://github.com/ritthickkt"><img className="github" src={github} width={35} height={35}/></a>
          </div>
        </div>
        <div className='child2'>
          <div className='status-badge'>
            <span className='status-dot' />
            Available for work
          </div>
          <div className='name-reveal'>
            {NAME.split('').map((char, i) => (
              <span
                key={i}
                className='name-char'
                style={{
                  transitionDelay: `${i * 0.04}s`,
                  opacity: nameVisible ? 1 : 0,
                  transform: nameVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <text className='occupation'>Student | University of New South Wales</text>
          <text className='description'>I'm a third-year Computer Science student at UNSW Sydney specializing in Security Engineering. Having lived and studied in Abu Dhabi, Singapore, China, India, and now Australia, I bring a diverse cultural perspective that helps me connect with people and adapt quickly to new environments. I'm passionate about technology, particularly in software development and cybersecurity, with experience in Python, Java, and C as well as hands-on work in penetration testing and tutoring coding to kids. Beyond academics, I enjoy working on personal projects, and contributing to student communities, all with the aim of continually growing and creating meaningful impact.</text>
        </div>
      </div>
    </>
  )
}

export default Aboutme
