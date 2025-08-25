import './SectionTitle.css'
import { useEffect } from 'react';


function SectionTitle({ logo, name }) {
  useEffect(() => {
    const selectors = ['.title-logo', '.section-name', '.dotted-line'];
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
    <div className="title">
      <div className='section'>
        <img className="title-logo" src={logo} width={30} height={30}/>
        <text className='section-name'>{name}</text>
      </div>
      <hr className="dotted-line" />
    </div>
  )
}


export default SectionTitle