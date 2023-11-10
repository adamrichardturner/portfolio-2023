import { FC } from 'react'
import { motion } from 'framer-motion'
import { IProject } from '../PortfolioTabs/IProject'
import Image from 'next/image'

interface ProjectComponentProps {
  project: IProject
}

const ProjectComponent: FC<ProjectComponentProps> = ({ project }) => {
  // Utility function to bold specific words
  const boldWords = (text: string, wordsToBold: string[]) => {
    const regex = new RegExp(`(${wordsToBold.join('|')})`, 'gi')
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="font-bold">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  // Words you want to make bold
  const wordsToBold = [
    'React',
    'MERN',
    'MongoDB',
    'Node',
    'TypeScript',
    'JavaScript',
    'Vanilla',
    'MaterialUI',
    'JSON',
    'Chart.js',
    'Express.js',
    'Next.js',
    'Sass',
    'Tailwind',
    'demo',
    'username',
    'password',
    'WordPress',
    'WooCommerce',
    'Ubuntu'
  ]

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-xl shadow-lg h-max"
    >
      {/* Project Image */}
      <a href={project.demoLink} target="_blank" rel="noreferrer">
        <div className="rounded-t-xl hover:shadow-xl hover:transition-shadow relative h-60">
          <Image
            src={project.imagePath}
            fill
            alt={project.altTag}
            sizes={'100%'}
            className="rounded-t-lg object-cover"
          />
        </div>
      </a>
      <div className="space-y-4 px-4 py-4">
        {/* Project Title */}
        <a href={project.demoLink} target="_blank" rel="noreferrer">
          <h3 className="text-lg font-bold leading-none">{project.title}</h3>
        </a>
        {/* Project Skills */}
        <div>
          <p className="text-xs">Made with:</p>
          <div className="flex flex-wrap mb-4 -ml-2 -mt-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="ml-2 mt-2 py-1.5 px-3 text-sm bg-gray-100 rounded cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Project Description */}
        <p className="text-base">
          {boldWords(project.description, wordsToBold)}
        </p>
        {/* Project Links */}
        <div className="flex justify-start items-center">
          {/* Conditional rendering for Live Demo link */}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-secondary hover:shadow-lg transition-shadow text-center ease-in-out w-24 px-4 shadow py-2 rounded-lg font-bold text-base text-primary mr-2">
                Demo
              </div>
            </a>
          )}

          {/* Conditional rendering for GitHub link */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-primary hover:shadow-lg transition-shadow text-center ease-in-out w-24 px-4 shadow py-2 rounded-lg font-bold text-base text-white">
                GitHub
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectComponent
