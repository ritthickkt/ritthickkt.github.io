import './SectionTitle.css'
import { useEffect, useRef } from 'react';


function SectionTitle({ logo, name }) {
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const elements = [logoRef.current, nameRef.current, lineRef.current].filter(Boolean);

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
        <img ref={logoRef} className="title-logo" src={logo} width={30} height={30}/>
        <span ref={nameRef} className='section-name'>{name}</span>
      </div>
      <hr ref={lineRef} className="dotted-line" />
    </div>
  )
}


export default SectionTitle