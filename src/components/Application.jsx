import './Application.css'
import { useEffect } from "react"

function Application({ logo, name, index }) {
  useEffect(() => {
    const selectors = ['.stack'];
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
    <div 
      className='stack'
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img src={logo} className="application-logo" width={60} height={60}></img>
      <span>{name}</span>
    </div>
  )
}

export default Application