import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1.5 * 16) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`${isScrolled ? 'top-0' : 'top-6'} fixed w-full h-16 bg-white`}
    >
      <nav id='overlay' className={`${isMenuOpen ? 'open' : 'closed'}`}>
        <Image
          src='/close-button.svg'
          alt='Close'
          className='close-button'
          onClick={() => setIsMenuOpen(false)}
          width={26}
          height={26}
        />
        <ul className='flex flex-col h-full text-2xl space-y-8 text-white items-center justify-center list-none'>
          <li>Projects</li>
          <li>Media</li>
          <li>Contact</li>
          <li>View CV</li>
        </ul>
      </nav>
      <div className='container h-full flex items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
          <Image
            src='/adam-thumb.png'
            alt='Adam Turner'
            width={42}
            height={42}
          />
          <h3 className='text-tertiary font-bold'>Adam Turner</h3>
        </div>
        <nav className='desktop-nav'>
          <ul className='flex flex-row items-center text-tertiary font-semibold justify-end list-none space-x-4'>
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
    </header>
  )
}

export default Header
