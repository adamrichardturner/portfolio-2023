import { FunctionComponent } from 'react'
import Image from 'next/image'

const Hero: FunctionComponent<{}> = () => {
  return (
    <section className='hero min-h-screen bg-primary pb-12 pt-20 md:h-full flex flex-col items-center justify-center'>
      <div className='container space-y-8 md:space-y-24'>
        <div className='text-white'>
          <p>Hello, my name is</p>
          <div className='flex flex-row space-x-3'>
            <h1 className='text-mobxl md:text-5xl font-black leading-none pb-4 md:pb-8'>
              Adam Turner
            </h1>
            <span className='hidden md:block text-5xl leading-none'>👋</span>
          </div>
          <p className='text-base'>
            I am a{' '}
            <span className='font-bold text-secondary'>
              Full Stack Developer
            </span>{' '}
            based in London, skilled in crafting websites and applications using
            React, Next, JavaScript and TypeScript.
            <br />
            <br />
            My greatest strengths are in Front End, with excellent commercial
            experience in this area. I aim to progressively enhance my abilities
            across a diverse array of technologies.
            <br />
          </p>
          <br />
          <h3 className='font-bold'>
            I am open to new opportunities on-site in London or remote.
          </h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-caption'>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/javascript.svg'
              alt='JavaScript'
              width={25}
              height={25}
            />
            <span className='text-sm'>JavaScript</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/typescript.svg'
              alt='TypeScript'
              width={25}
              height={25}
            />
            <span className='text-sm'>TypeScript</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/react.svg' alt='React' width={25} height={25} />
            <span className='text-sm'>React</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/next.svg' alt='Next' width={25} height={25} />
            <span className='text-sm'>Next.js</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/node.svg' alt='Node' width={60} height={25} />
            <span className='text-sm'>Node</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/mongo.svg'
              alt='MongoDB'
              width={60}
              height={25}
            />
            <span className='text-sm'>MongoDB</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image src='/skills/redux.svg' alt='Redux' width={25} height={25} />
            <span className='text-sm'>Redux</span>
          </div>
          <div className='flex items-center justify-center bg-white py-3.5 h-12 rounded-lg space-x-2'>
            <Image
              src='/skills/wordpress.svg'
              alt='WordPress'
              width={25}
              height={25}
            />
            <span className='text-sm'>WordPress</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
