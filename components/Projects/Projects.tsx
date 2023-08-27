import { FunctionComponent } from 'react'
import Image from 'next/image'

const Projects: FunctionComponent<{}> = () => {
  return (
    <section
      id='projects'
      className='bg-cream min-h-screen text-body pt-16 pb-16 mx-auto flex flex-col items-center justify-center'
    >
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl md:text-1xl font-bold leading-none pb-8'>
            Projects
          </h2>
          <div className='bg-secondary py-1 px-5 rounded-xl'></div>
          <p className='mt-4 text-center pb-14'>
            Here are a few of my favourite{' '}
            <span className='font-bold'>Full Stack</span> and{' '}
            <span className='font-bold'>Front End</span> focused projects
          </p>
        </div>
        <div className='flex w-full flex-col space-y-14'>
          <div className='flex flex-col lg:flex-row lg:space-x-12'>
            <div className='w-full'>
              <a href='https://blogz.dev' target='_blank'>
                <Image
                  className='rounded-2xl shadow-md hover:shadow-xl transition-shadow ease-in-out'
                  src='/projects/blogz.jpg'
                  alt='Blogz'
                  width={751}
                  height={501}
                />
              </a>
            </div>
            <div className='w-full'>
              <h3 className='font-extrabold text-xxl md:text-xxxl'>Blogz</h3>
              <p>
                Blogz is a dynamic MERN stack social network application. Node
                and Express manage routes for user actions like post creation,
                likes, and deletion. Test Blogz with{' '}
                <span className='font-bold'>username</span> &{' '}
                <span className='font-bold'>password</span> as{' '}
                <span className='font-bold'>&apos;demo&apos;</span>.
              </p>
              <div className='pt-4 -m-1.5 flex flex-row flex-wrap text-xs font-light text-captiontext'>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  React
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Express.js
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Node.js
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  MongoDB
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  MaterialUI
                </div>
              </div>
              <div className='flex flex-row space-x-2 text-center pt-8'>
                <a href='https://blogz.dev' target='_blank'>
                  <div className='bg-secondary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Demo
                  </div>
                </a>
                <a
                  href='https://github.com/adamrichardturner/blogz'
                  target='_blank'
                >
                  <div className='bg-primary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Github
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row lg:space-x-12'>
            <div className='w-full'>
              <a href='https://reactnews.app' target='_blank'>
                <Image
                  className='rounded-2xl shadow-md hover:shadow-xl transition-shadow ease-in-out'
                  src='/projects/reactnews.jpg'
                  alt='ReactNews'
                  width={751}
                  height={501}
                />
              </a>
            </div>
            <div className='w-full'>
              <h3 className='font-extrabold text-xxl md:text-xxxl'>
                React News
              </h3>
              <p>
                React News is a Next.js TypeScript app powered by the GNews API
                featuring a curation of the latest news articles on a variety of
                subjects sourced from over 50,000 news vendors around the world.
              </p>
              <div className='pt-4 -m-1.5 flex flex-row flex-wrap text-xs font-light text-captiontext'>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Next.js
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  TypeScript
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Sass
                </div>
              </div>
              <div className='flex flex-row space-x-2 text-center pt-8'>
                <a href='https://reactnews.app' target='_blank'>
                  <div className='bg-secondary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Demo
                  </div>
                </a>
                <a
                  href='https://github.com/adamrichardturner/reactnews'
                  target='_blank'
                >
                  <div className='bg-primary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Github
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row lg:space-x-12'>
            <div className='w-full'>
              <a href='https://exploremovies.app' target='_blank'>
                <Image
                  className='rounded-2xl shadow-md hover:shadow-xl transition-shadow ease-in-out'
                  src='/projects/exploremovies.jpg'
                  alt='ExploreMovies'
                  width={751}
                  height={501}
                />
              </a>
            </div>
            <div className='w-full'>
              <h3 className='font-extrabold text-xxl md:text-xxxl'>
                Explore Movies
              </h3>
              <p>
                This React & Express web application was written in JavaScript
                and utilises MaterialUI with custom styled components, featuring
                movies sourced via the TMDb API with save to favourites
                functionality.
              </p>
              <div className='pt-4 -m-1.5 flex flex-row flex-wrap text-xs font-light text-captiontext'>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  React
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Express.js
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  Node.js
                </div>
                <div className='bg-light m-1.5 px-3 py-1.5 rounded-lg'>
                  MaterialUI
                </div>
              </div>
              <div className='flex flex-row space-x-2 text-center pt-8'>
                <a href='https://exploremovies.app' target='_blank'>
                  <div className='bg-secondary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Demo
                  </div>
                </a>
                <a
                  href='https://github.com/adamrichardturner/explore-movies'
                  target='_blank'
                >
                  <div className='bg-primary hover:shadow-lg transition-shadow ease-in-out w-24 px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
                    Github
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
