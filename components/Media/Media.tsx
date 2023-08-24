import { FunctionComponent } from 'react'
import Image from 'next/image'

const Media: FunctionComponent<{}> = () => {
  return (
    <section className='h-16 container max-w-1100 mx-auto flex items-center justify-between'>
      <div className='flex flex-row items-center'>
        <Image src='/adam-thumb.png' width={42} height={42} alt='Adam Turner' />
        <h3>Adam Turner</h3>
      </div>
      <nav>
        <ul className='flex flex-row items-center justify-end list-none space-x-4'>
          <li>Projects</li>
          <li>Media</li>
          <li>Contact</li>
          <li>View CV</li>
        </ul>
      </nav>
    </section>
  )
}

export default Media
