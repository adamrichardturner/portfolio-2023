import { FunctionComponent } from 'react'
import YouTubePlayer from './YouTubePlayer'

const Media: FunctionComponent<{}> = () => {
  return (
    <section
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
            Check out my YouTube Channel where you can follow along with my
            build in public video journals and development progress.
          </p>
        </div>
        <div className='playerWrapper'>
          <div className='player'>
            <YouTubePlayer videoId='7fWE_9HhiXo' />
          </div>
        </div>
        <div className='flex items-center justify-center pt-10'>
          <a
            href='https://www.youtube.com/@adamrichardturner'
            target='_blank'
            rel='noreferrer'
          >
            <div className='bg-secondary hover:shadow-lg transition-shadow ease-in-out w-44 px-8 shadow py-4 rounded-lg text-center font-bold text-base text-white'>
              {'View Channel > '}
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Media
