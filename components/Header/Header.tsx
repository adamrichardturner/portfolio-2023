import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 w-full shadow-md h-16 bg-white`}>
      <div className='container h-full flex items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
          <Image
            src='/adam-thumb.png'
            alt='Adam Turner'
            width={42}
            height={42}
          />
          <h3 className='text-tertiary font-medium'>Adam Turner</h3>
        </div>
        <nav className='desktop-nav'>
          <ul className='flex flex-row items-center text-tertiary font-medium justify-end list-none space-x-8'>
            <li>Projects</li>
            <li>Media</li>
            <li>Contact</li>
            <li className='btn btn--cv'>View CV</li>
          </ul>
        </nav>
        <div className='menu-btn' onClick={() => setIsMenuOpen(true)}>
          <Image src='/burger-menu.svg' alt='Menu' width={26} height={26} />
        </div>
      </div>
      <nav id='overlay' className={`${isMenuOpen ? 'open' : 'closed'}`}>
        <Image
          src='/close-button.svg'
          alt='Close'
          className='close-button'
          onClick={() => setIsMenuOpen(false)}
          width={22}
          height={22}
        />
        <ul className='flex flex-col h-full text-2xl space-y-8 text-white items-center justify-center list-none'>
          <li>Projects</li>
          <li>Media</li>
          <li>Contact</li>
          <li>View CV</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
