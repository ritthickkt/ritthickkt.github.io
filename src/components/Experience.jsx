import './Experience.css'
import { useEffect } from 'react';

function Experience({ExperienceCompany, ExperienceTitle, ExperienceDate, ExperienceDescription}) {
  useEffect(() => {
    const selectors = ['.experience-content'];
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
    <div className="experience">
      <div className='vertical-line-with-dot'></div>
      <div className='experience-content'>
        <span className='experience-company'>{ExperienceCompany}</span>
        <span className='experience-title'>{ExperienceTitle}</span>
        <span className='experience-date'>{ExperienceDate}</span>
        <ul className='experience-description'>
            {ExperienceDescription.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience