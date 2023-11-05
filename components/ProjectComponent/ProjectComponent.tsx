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
      className="p-4 m-2 bg-white rounded shadow-lg"
    >
      {/* Project Image */}
      <div
        style={{
          position: 'relative',
          height: '320px',
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
      <h3 className="text-lg font-bold">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-600">{project.description}</p>

      {/* Project Skills */}
      <div className="flex flex-wrap mb-4">
        {project.skills.map((skill, index) => (
          <span key={index} className="m-1 p-1 bg-gray-200 rounded">
            {skill}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="flex justify-between items-center">
        {/* Conditional rendering for Live Demo link */}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        )}

        {/* Conditional rendering for GitHub link */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectComponent
