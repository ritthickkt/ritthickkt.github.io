import Dock from './Dock.jsx'

import typescript from '/src/assets/icons/typescript.svg'
import javascript from '/src/assets/icons/javascript.svg'
import python from '/src/assets/icons/python.svg'
import swift from '/src/assets/icons/swift.svg'
import react from '/src/assets/icons/react.svg'
import nextjs from '/src/assets/icons/nextjs.svg'
import tailwind from '/src/assets/icons/tailwind.svg'
import nodejs from '/src/assets/icons/nodejs.svg'
import fastapi from '/src/assets/icons/fastapi.svg'
import postgresql from '/src/assets/icons/postgresql.svg'
import prisma from '/src/assets/icons/prisma.svg'
import supabase from '/src/assets/icons/supabase.svg'
import docker from '/src/assets/icons/docker.svg'
import aws from '/src/assets/icons/aws.svg'
import langchain from '/src/assets/icons/langchain.svg'

/*
 * Each logo is a self-contained app-icon tile — a brand-coloured squircle with
 * the mark inside — so it fills the dock slot edge to edge. They're generated
 * by scripts/generate-icons.mjs; see that file to add or regenerate one.
 */
const tools = [
  { logo: typescript, name: 'TypeScript' },
  { logo: javascript, name: 'JavaScript' },
  { logo: python, name: 'Python' },
  { logo: swift, name: 'Swift' },
  { logo: react, name: 'React' },
  { logo: nextjs, name: 'Next.js' },
  { logo: tailwind, name: 'Tailwind' },
  { logo: nodejs, name: 'Node.js' },
  { logo: fastapi, name: 'FastAPI' },
  { logo: postgresql, name: 'PostgreSQL' },
  { logo: prisma, name: 'Prisma' },
  { logo: supabase, name: 'Supabase' },
  { logo: docker, name: 'Docker' },
  { logo: aws, name: 'AWS' },
  { logo: langchain, name: 'LangChain' },
].map((tool) => ({ ...tool, appIcon: true }))

function Toolkit() {
  return <Dock items={tools} size="md" columns={5} ariaLabel="Tools and technologies" />
}

export default Toolkit
