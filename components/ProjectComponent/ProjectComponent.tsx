import { FC } from 'react'
import { motion } from 'framer-motion'
import { IProject } from '../PortfolioTabs/IProject'
import Image from 'next/image'

interface ProjectComponentProps {
  project: IProject
}

const ProjectComponent: FC<ProjectComponentProps> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-5 bg-white rounded shadow-lg"
    >
      {/* Project Image */}
      <div
        style={{
          position: 'relative',
          height: '240px',
          objectFit: 'cover'
        }}
      >
        <Image
          src={project.imagePath}
          fill
          alt={project.title}
          sizes="100%"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Project Title */}
      <h3 className="text-lg font-bold leading-none py-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-body text-base pb-2">{project.description}</p>

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
              Github
            </div>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectComponent
