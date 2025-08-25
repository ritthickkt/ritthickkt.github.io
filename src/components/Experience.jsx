import './Experience.css'
import { useEffect } from 'react';

function Experience({ExperienceCompany, ExperienceTitle, ExperienceDate, ExperienceDescription}) {
  useEffect(() => {
    const selectors = ['.experience-company', '.experience-title', '.experience-date', '.experience-description'];
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
    <div className="experience">
      <div className='vertical-line-with-dot'></div>
      <div className='experience-content'>
        <text className='experience-company'>{ExperienceCompany}</text>
        <text className='experience-title'>{ExperienceTitle}</text>
        <text className='experience-date'>{ExperienceDate}</text>
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