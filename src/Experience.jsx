import './App.css'

function Experience({ExperienceTitle, ExperienceDate, ExperienceDescription}) {
  return (
    <>
      <div className="Experience">
        <div className="ExperienceTitle">
          <div>{ExperienceTitle}</div>
        </div>
        <div className="ExperienceDate">
          <div>{ExperienceDate}</div>
        </div>
        <div className="ExperienceDescription">
          <ul>
            {ExperienceDescription.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}


export default Experience
