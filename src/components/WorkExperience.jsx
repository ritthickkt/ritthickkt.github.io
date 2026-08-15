import './WorkExperience.css'
import Experience from "./Experience"

import dpn from '/src/assets/logos/dpn.png'
import galaxy from '/src/assets/logos/galaxy.png'
import ladder from '/src/assets/logos/ladder.png'
import pearler from '/src/assets/logos/pearler.jpg'
import webacy from '/src/assets/logos/webacy.jpeg'

/*
 * Company logos: drop a file into src/assets/logos/, import it here, and pass it
 * as ExperienceLogo. Rows without one fall back to a monogram tile.
 */

function WorkExperience() {
  return (
    <div className="experience-stack">
      <Experience
        ExperienceCompany="DPN"
        ExperienceLogo={dpn}
        ExperienceTitle="Digital Systems Associate"
        ExperienceDate="May 2026 - Present"
        ExperienceDescription={[
          "Supporting the adoption and integration of AI and emerging technologies across DPN Group, with a focus on translating AI capabilities into practical, scalable business outcomes.",
          "Evaluating and recommending AI tools to improve team workflows and reduce manual effort.",
          "Building AI-assisted automations and documenting processes for scalability.",
          "Contributing to systems projects, testing, and prompt engineering.",
          "Supporting internal training and enablement through guides and sessions to drive team-wide adoption.",
          "Rapidly prototyping internal tools and assessing their value and feasibility.",
        ]}
      />
      <Experience
        ExperienceCompany="Ladder Inc"
        ExperienceLogo={ladder}
        ExperienceTitle="Software Engineer"
        ExperienceDate="Jan 2026 - Present"
        ExperienceDescription={[
          "Engineered a deterministic, time-based state machine (Calendar Engine) to automate invoice status transitions (Grey/Green/Amber/Red) based on strict temporal logic rather than user input.",
          "Architected a granular Role-Based Access Control (RBAC) system to manage permissions across four distinct stakeholder groups (PM, Builder, Subcontractor, Owner), ensuring data visibility rules were strictly enforced.",
          "Developed a tamper-proof audit trail and export system that creates timestamped, immutable records of all project communications and status changes for legal and compliance verification.",
        ]}
      />
      <Experience 
        ExperienceCompany="Galaxy Technology Services"
        ExperienceLogo={galaxy}
        ExperiencePlate
        ExperienceTitle="AI Product Developer Intern"
        ExperienceDate="August 2025 - December 2025"
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
        ExperienceLogo={pearler}
        ExperienceTitle="Penetration Tester"
        ExperienceDate="September 2024 - December 2024"
        ExperienceDescription={[
          "Conducted security assessment on Pearlers main web application, identifying critical vulnerabilities that posed risks to user data.",
          "Compiled a detailed security report outlining findings, risk assessments, and remediation recommendations, improving company-wide security awareness."
        ]}
      />
      <Experience 
        ExperienceCompany="Webacy"
        ExperienceLogo={webacy}
        ExperienceTitle="Data Analyst Extern"
        ExperienceDate="August 2024 - September 2024"
        ExperienceDescription={[
          "Analysed and labelled smart contract vulnerabilities, enhancing accuracy in risk categorization and security assessment.",
          "Conducted correlation analysis of risk tags to identify the most prevalent vulnerabilities, improving fraud detection by 25%",
          "Applied unsupervised machine learning for cluster analysis, identifying common security risks and profiling high-risk contracts."
        ]}
      />
    </div>
  )
}

export default WorkExperience