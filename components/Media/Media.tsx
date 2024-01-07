import { FC } from 'react'
import YouTubePlayer from './YouTubePlayer'
import MediumCarousel from '../MediumCarousel/MediumCarousel'
import { Element } from 'react-scroll'

const Media: FC = () => {
  return (
    <Element
      name='media'
      as='section'
      id='media'
      className='media min-h-screen text-white pt-16 pb-16 mx-auto flex flex-col items-center justify-center'
    >
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
            Media
          </h2>
          <div className='bg-secondary py-1 px-5 rounded-xl'></div>
          <p className='mt-4 text-center pb-14'>
            My media including YouTube videos and articles written on Medium.
          </p>
        </div>
        <h3 className='text-xl md:text-xl font-bold leading-none mb-2'>
          YouTube Videos
        </h3>
        <div className='space-y-6'>
          <div className='playerWrapper'>
            <div className='player'>
              <YouTubePlayer videoId='7fWE_9HhiXo' />
            </div>
          </div>
          <div>
            <h3 className='text-xl md:text-xl font-bold leading-none mb-2'>
              Articles
            </h3>
            <MediumCarousel />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Media
