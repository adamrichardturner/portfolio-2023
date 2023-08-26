import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'
import burgerWhite from '../../public/burger-menu-white.svg'
import burgerBlack from '../../public/burger-menu-black.svg'

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 w-full h-16 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container h-full flex items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
          <Image
            priority
            className='rounded-full'
            src='/adam-thumb.png'
            alt='Adam Turner'
            width={42}
            height={42}
          />
          <h3
            className={`text-tertiary font-medium ${
              scrolled ? '' : 'text-white'
            }`}
          >
            Adam Turner
          </h3>
        </div>
        <nav className='desktop-nav'>
          <ul
            className={`flex flex-row items-center font-normal justify-end list-none space-x-8 text-base ${
              scrolled ? 'text-tertiary' : 'text-white'
            }`}
          >
            <li>Projects</li>
            <li>Media</li>
            <li>Contact</li>
            <li className='bg-secondary px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
              View CV
            </li>
          </ul>
        </nav>
        <div
          className='menu-btn text-white'
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src={scrolled ? burgerBlack : burgerWhite}
            alt='Menu'
            height={22}
            width={22}
          />
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
