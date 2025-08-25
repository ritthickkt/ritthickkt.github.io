import './Application.css'
import { useEffect } from "react"

function Application({ logo, name }) {
  useEffect(() => {
    const selectors = ['.stack'];
    const elements = selectors
      .map(sel => Array.from(document.querySelectorAll(sel)))
      .flat();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []); 

  return (
    <div className='stack'>
      <img src={logo} className="application-logo" width={60} height={60}></img>
      <text>{name}</text>
    </div>
  )
}

export default Application