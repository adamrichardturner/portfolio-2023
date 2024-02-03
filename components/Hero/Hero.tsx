import { FC } from "react"
import Image from "next/image"
import { Element } from "react-scroll"

const Hero: FC<{}> = () => {
  return (
    <Element
      name='hero'
      as='section'
      id='hero'
      className='hero min-h-screen bg-primary pb-12 pt-20 md:h-full flex flex-col items-center justify-center'
    >
      <div className='container space-y-8 md:space-y-16'>
        <div className='text-white'>
          <p>Hello, my name is</p>
          <div className='flex flex-row space-x-3'>
            <h1 className='text-xxl md:text-5xl font-black leading-none pb-4 md:pb-8'>
              Adam Richard Turner
            </h1>
            <span className='hidden md:block text-5xl leading-none'>👋</span>
          </div>
          <p className='text-base'>
            I am a{" "}
            <span className='font-bold text-secondary'>Software Engineer</span>{" "}
            based in London, skilled at crafting web applications using
            TypeScript and Javascript, as well as a variety of other tools.
            <br />
            <br />
            Aside from my professional work, I am currently honing my skills in
            Front End Development by completing{" "}
            <a
              href='https://www.frontendmentor.io/'
              className='text-secondary font-semibold'
              target='_blank'
            >
              Front End Mentor
            </a>{" "}
            challenges, open source projects and further study.
          </p>
        </div>
        <div className='hero-skills grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs md:text-sm font-bold text-caption'>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/javascript.png'
              alt='JavaScript'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              JavaScript
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/typescript.png'
              alt='TypeScript'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              TypeScript
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/react.png' alt='React' height={32} width={32} />
            <div className='leading-none flex items-center justify-center h-full'>
              React
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/next.png'
              alt='Next.js'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              Next.js
            </div>
          </div>
          <div className='flex items-center justify-center leading-none bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/tailwind.png'
              alt='Tailwind'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              Tailwind
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/mongo.png'
              alt='MongoDB'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              MongoDB
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/node.png'
              alt='Node.js'
              height={32}
              width={32}
            />
            <div className='leading-none flex items-center justify-center h-full'>
              Node.js
            </div>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/redux.png' alt='Redux' height={26} width={26} />
            <div className='leading-none flex items-center justify-center h-full'>
              Redux
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Hero
