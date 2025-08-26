import './WorkExperience.css'
import Experience from "./Experience"

function WorkExperience() {
  return (
    <div className="experience-stack">
      <Experience 
        ExperienceCompany="Galaxy Technology Services"
        ExperienceTitle="AI Product Development Intern"
        ExperienceDate="August 2024 - Present"
        ExperienceDescription={[
          "Developed and implemented the backend for an AI-powered live agent, 'G-Voice,' designed to replace traditional IVR systems for services like hotel booking and customer support.",
          "Utilized LiveKit to manage real-time audio streams, enabling fluid, two-way conversations with the AI agent.",
          "Integrated Azure AI services for advanced speech-to-text and text-to-speech capabilities, forming the core of the agent's conversational intelligence.",
          "Leveraged Docker to containerize the application, ensuring a consistent and portable development environment.",
          "Contributed to the deployment of the application on Kubernetes, optimizing for scalability and high availability."
        ]}
      />
      <Experience 
        ExperienceCompany="Pearler"
        ExperienceTitle="Penetration Tester"
        ExperienceDate="September 2024 - December 2024"
        ExperienceDescription={[
          "Conducted security assessment on Pearlers main web application, identifying critical vulnerabilities that posed risks to user data.",
          "Compiled a detailed security report outlining findings, risk assessments, and remediation recommendations, improving company-wide security awareness."
        ]}
      />
      <Experience 
        ExperienceCompany="Webacy"
        ExperienceTitle="Data Analyst Extern"
        ExperienceDate="August 2024 - September 2024"
        ExperienceDescription={[
          "Analysed and labelled smart contract vulnerabilities, enhancing accuracy in risk categorization and security assessment.",
          "Conducted correlation analysis of risk tags to identify the most prevalent vulnerabilities, improving fraud detection by 25%",
          "Applied unsupervised machine learning for cluster analysis, identifying common security risks and profiling high-risk contracts."
        ]}
      />
      <Experience 
        ExperienceCompany="Self-Employed"
        ExperienceTitle="Python Tutor"
        ExperienceDate="December 2023 - Febuary 2024"
        ExperienceDescription={[
          "Provided personalized Python tutoring, helping students grasp data structures, algorithms, and software development concepts.",
          "Led students in developing a Food Management System, integrating Python with SQL databases, enhancing their practical coding skills by 40%.",
          "Conducted online assessments to track student progress and tailor lesson plans for optimal learning outcomes.",
          "Encouraged innovation by designing project-based learning, allowing students to build real-world applications.",
        ]}
      />
    </div>
  )
}

export default WorkExperience