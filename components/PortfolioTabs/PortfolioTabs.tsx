import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import dynamic from 'next/dynamic'
import { IProject } from './IProject'
import projectsData from '../../util/projectsData.json'

type TabCategory = 'All' | 'Full Stack' | 'Front End' | 'WordPress'

// Dynamically import ProjectComponent with SSR disabled
const ProjectComponentWithNoSSR = dynamic(
  () => import('../ProjectComponent/ProjectComponent'),
  {
    ssr: false
  }
)

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabCategory>('All')
  const tabs: TabCategory[] = ['All', 'Front End', 'Full Stack', 'WordPress']

  const filteredProjects: IProject[] = projectsData.filter((project) =>
    activeTab === 'All' ? true : project.category === activeTab
  )

  return (
    <div>
      {/* Desktop Tabs */}
      <div className="flex p-4 pl-0 space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xxs xs:text-sm leading-none font-medium rounded-md focus:outline-none ${
              activeTab === tab
                ? 'bg-secondary text-black'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectComponentWithNoSSR key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
