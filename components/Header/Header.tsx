import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (window.innerWidth < 640) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen, isSmallScreen])

  return (
    <header
      className={`fixed top-0 left-4 right-4 rounded-lg shadow-md ${
        isScrolled ? 'top-0' : 'top-4'
      } h-16 bg-white`}
    >
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
    </header>
  )
}

export default Header
