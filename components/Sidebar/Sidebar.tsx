import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faSquareGithub,
  faSquareXTwitter,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar: FunctionComponent = ({}) => {
  return (
    <div id='sticky-sidebar' className='hidden shadow-lg'>
      <a
        href='mailto:hello@adamrichardturner.dev'
        className='pt-3.5 pl-1.5 pr-2.5 px-2'
      >
        <div>
          <FontAwesomeIcon icon={faSquareEnvelope} className='h-8' />
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/adamrichardturner88'
        target='_blank'
        rel='noreferrer'
        className='pt-3.5 pb-3.5 pl-1.5 pr-2.5 px-2'
      >
        <div>
          <FontAwesomeIcon icon={faLinkedin} className='h-8' />
        </div>
      </a>
      <a
        href='https://github.com/adamrichardturner'
        target='_blank'
        rel='noreferrer'
        className='pb-3.5 pl-1.5 pr-2.5 px-2'
      >
        <div>
          <FontAwesomeIcon icon={faSquareGithub} className='h-8' />
        </div>
      </a>
    </div>
  )
}

export default Sidebar
