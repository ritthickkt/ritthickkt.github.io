import './TechArsenal.css'

import Application from './Application.jsx'
import git from '/src/assets/git.svg'
import javascript from '/src/assets/javascript.svg'
import html from '/src/assets/html.svg'
import css from '/src/assets/css.svg'
import typescript from '/src/assets/typescript.svg'
import python from '/src/assets/python.svg'
import react from '/src/assets/react.svg'
import vite from '/src/assets/vite.svg'
import tailwind from '/src/assets/tailwind.svg'
import bootstrap from '/src/assets/bootstrap.svg'
import firebase from '/src/assets/firebase.svg'
// import apache from '/src/assets/apache.svg'
import expo from '/src/assets/expo.svg'
import nextjs from '/src/assets/nextjs.png'
import mysql from '/src/assets/mysql.svg'
import supabase from '/src/assets/supabase.svg'
import docker from '/src/assets/docker.svg'
import nodejs from '/src/assets/nodejs.svg'
import azure from '/src/assets/azure.svg'

function TechArsenal() {
 const apps = [
    { logo: git, name: "Git" },
    { logo: html, name: "HTML" },
    { logo: css, name: "CSS" },
    { logo: javascript, name: "Javascript" },
    { logo: typescript, name: "Typescript" },
    { logo: python, name: "Python" },
    { logo: react, name: "React" },
    { logo: vite, name: "Vite" },
    { logo: tailwind, name: "Tailwind" },
    { logo: bootstrap, name: "Bootstrap" },
    { logo: firebase, name: "Firebase" },
    // { logo: apache, name: "Apache" },
    { logo: expo, name: "Expo" },
    { logo: nextjs, name: "Next.js" },
    { logo: mysql, name: "MySQL" },
    { logo: azure, name: "Azure" },
    { logo: nodejs, name: "Node.js" },
    { logo: supabase, name: "Supabase" },
    { logo: docker, name: "Docker" },
  ];

  return (
    <div className="stack-border">
      {apps.map((app, idx) => (
        <Application key={app.name} logo={app.logo} name={app.name} index={idx} className="application-icon"/>
      ))}
    </div>
  );
}

export default TechArsenal