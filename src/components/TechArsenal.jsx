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
import apache from '/src/assets/apache.svg'
import expo from '/src/assets/expo.svg'
import nextjs from '/src/assets/nextjs.png'
import mysql from '/src/assets/mysql.svg'

function TechArsenal() {
 return (
  <div className="stack-border">
    <Application logo={git} name="Git"/>
    <Application logo={html} name="HTMl"/>
    <Application logo={css} name="CSS"/>
    <Application logo={javascript} name="Javascript"/>
    <Application logo={typescript} name="Typescript"/>
    <Application logo={python} name="Python"/>
    <Application logo={react} name="React"/>
    <Application logo={vite} name="Vite"/>
    <Application logo={tailwind} name="Tailwind"/>
    <Application logo={bootstrap} name="Bootstrap"/>
    <Application logo={firebase} name="Firebase"/>
    <Application logo={apache} name="Apache"/>
    <Application logo={expo} name="Expo"/>
    <Application logo={nextjs} name="Next.js"/>
    <Application logo={mysql} name="MySQL"/>
  </div>
 )
}

export default TechArsenal