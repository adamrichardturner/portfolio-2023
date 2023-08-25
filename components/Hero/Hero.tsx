import { FunctionComponent } from 'react'
import Image from 'next/image'

const Hero: FunctionComponent<{}> = () => {
  return (
    <section className='hero bg-primary flex flex-col items-center justify-center'>
      <div className='container space-y-24'>
        <div className='text-white'>
          <p>Hello, my name is</p>
          <div className='flex flex-row space-x-3'>
            <h1 className='text-4xl md:text-5xl font-bold leading-none pb-8'>
              Adam Turner
            </h1>
            <span className='text-4xl md:text-5xl leading-none'>👋</span>
          </div>
          <p>
            <span className='font-bold'>Frontend Developer</span> based in South
            West London, skilled in crafting websites and applications using
            React, Next, JavaScript, TypeScript and WordPress.
            <br />
          </p>
          <br />
          <h3>Open to Frontend and Full Stack Developer opportunities.</h3>
        </div>
        <div className='hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-caption'>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image
              src='/skills/javascript.png'
              alt='JavaScript'
              width={26}
              height={25}
            />
            <span>JavaScript</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image
              src='/skills/typescript.png'
              alt='TypeScript'
              width={25}
              height={25}
            />
            <span>TypeScript</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image src='/skills/react.png' alt='React' width={29} height={29} />
            <span>React</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image src='/skills/next.png' alt='Next' width={57} height={33} />
            <span>Next.js</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image src='/skills/node.png' alt='Node' width={60} height={33} />
            <span>React</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image
              src='/skills/mongo.png'
              alt='MongoDB'
              width={60}
              height={33}
            />
            <span>MongoDB</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image src='/skills/redux.png' alt='Redux' width={33} height={33} />
            <span>Redux</span>
          </div>
          <div className='flex items-center justify-center bg-white py-1.5 rounded-lg space-x-2'>
            <Image
              src='/skills/wordpress.png'
              alt='WordPress'
              width={33}
              height={33}
            />
            <span>WordPress</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
