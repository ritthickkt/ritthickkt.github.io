import './LetsConnect.css'
import './SectionTitle.css'

import { useEffect } from 'react'

function LetsConnect() {
  useEffect(() => {
    const selectors = ['.lets-connect-name', '.dotted-line', '.call-to-action', '.email'];
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
    <div className="lets-connect">
      <div className='section'>
        <div className='lets-connect-name'>Let's Connect</div>
      </div>
      <hr className="dotted-line" />
      <text className='call-to-action'>Let's contribute or build something amazing together!</text>
      <button className='email' onClick={() => window.location.href = 'mailto:ritthickthiaga@gmail.com'}>ritthickthiaga@gmail.com</button>
    </div>
  )
}

export default LetsConnect