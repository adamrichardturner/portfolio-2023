import { FunctionComponent } from 'react'

const Projects: FunctionComponent<{}> = () => {
  return (
    <section className='container mx-auto flex items-center justify-center'>
      <div className='pt-16 flex flex-col items-center justify-center'>
        <h3 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
          Projects
        </h3>
        <div className='bg-secondary py-1 px-5'></div>
        <p className='mt-4'>
          Here are a few of my favourite{' '}
          <span className='font-bold'>Full Stack</span> and{' '}
          <span className='font-bold'>Front End</span> focused projects
        </p>
      </div>
    </section>
  )
}

export default Projects
