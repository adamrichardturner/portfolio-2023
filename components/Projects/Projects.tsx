import { FunctionComponent } from 'react'
import Image from 'next/image'

const Projects: FunctionComponent<{}> = () => {
  return (
    <section className='container pt-16 pb-16 mx-auto flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
          Projects
        </h2>
        <div className='bg-secondary py-1 px-5'></div>
        <p className='mt-4 text-center pb-14'>
          Here are a few of my favourite{' '}
          <span className='font-bold'>Full Stack</span> and{' '}
          <span className='font-bold'>Front End</span> focused projects
        </p>
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex flex-row space-x-12'>
          <div className='w-1/2 md:w-full'>
            <Image
              src='/projects/blogz.jpg'
              alt='Blogz'
              width={751}
              height={501}
            />
          </div>
          <div className='w-1/2 md:w-full'>
            <h3 className='font-extrabold text-mobxl'>Blogz</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
