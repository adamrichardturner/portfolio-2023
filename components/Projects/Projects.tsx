import { FC } from 'react'
import PortfolioTabs from '../PortfolioTabs/PortfolioTabs'

const Projects: FC<{}> = () => {
  return (
    <section
      id="projects"
      className="bg-cream min-h-screen text-body pt-16 pb-16 mx-auto flex flex-col items-center justify-center"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-1xl font-bold leading-none pb-8">
            Projects
          </h2>
          <div className="bg-secondary py-1 px-5 rounded-xl"></div>
          <p className="mt-4 text-center pb-6">
            Here are a few of my favourite{' '}
            <span className="font-bold">Full Stack</span> and{' '}
            <span className="font-bold">Front End</span> focused projects
          </p>
        </div>
        {/* PortfolioTabs component to dynamically display projects */}
        <PortfolioTabs />
      </div>
    </section>
  )
}

export default Projects
