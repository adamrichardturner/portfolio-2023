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
  const wordsToBold = ['demo', 'username', 'password']

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-5 bg-white rounded-xl shadow-lg h-max"
    >
      {/* Project Image */}
      <a href={project.demoLink} target="_blank" rel="noreferrer">
        <div className="rounded-xl hover:shadow-xl hover:transition-shadow relative h-60">
          <Image
            src={project.imagePath}
            layout="fill"
            alt={project.altTag}
            className="rounded-xl object-cover"
          />
        </div>
      </a>
      {/* Project Title */}
      <a href={project.demoLink} target="_blank" rel="noreferrer">
        <h3 className="text-lg font-bold leading-none py-2">{project.title}</h3>
      </a>

      {/* Project Description */}
      <p className="text-base pb-2">
        {boldWords(project.description, wordsToBold)}
      </p>
      <p className="text-xs">Skills used:</p>
      {/* Project Skills */}
      <div className="flex flex-wrap mb-4 space-x-2">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="m-0 p-2 text-sm bg-gray-200 rounded cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="flex justify-end items-center">
        {/* Conditional rendering for Live Demo link */}
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <div className="bg-secondary hover:shadow-lg transition-shadow text-center ease-in-out w-24 px-4 shadow py-2 rounded-lg font-normal text-base text-primary mr-2">
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
            <div className="bg-primary hover:shadow-lg transition-shadow text-center ease-in-out w-24 px-4 shadow py-2 rounded-lg font-normal text-base text-white">
              GitHub
            </div>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectComponent
