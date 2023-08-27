import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'
import burgerBlack from '../../public/burger-menu-black.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

const Header: FunctionComponent = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (window.innerWidth < 640) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
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
      className={`z-10 fixed top-0 w-full h-16 transition-all duration-200 ${
        isMobile
          ? scrolled
            ? 'opacity-100 bg-white shadow-md'
            : 'opacity-0'
          : scrolled
          ? 'bg-white shadow-md text-tertiary'
          : 'bg-transparent text-white'
      }`}
    >
      <div className='container h-full flex items-center justify-between'>
        <Link
          activeClass='active'
          to='hero'
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
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
              className={`font-medium ${
                scrolled ? 'text-tertiary' : 'text-white'
              }`}
            >
              Adam Turner
            </h3>
          </div>
        </Link>
        <nav className='desktop-nav'>
          <ul
            className={`nav-items flex flex-row items-center font-normal justify-end list-none space-x-8 text-base ${
              scrolled ? 'text-tertiary' : 'text-white'
            }`}
          >
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='media'
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Media
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className='bg-secondary px-5 shadow py-2.5 rounded-lg font-normal text-base text-white'>
              View CV
            </li>
          </ul>
        </nav>
        <div
          className='menu-btn text-white'
          onClick={() => setIsMenuOpen(true)}
        >
          <Image src={burgerBlack} alt='Menu' height={22} width={22} />
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
          <li>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='media'
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>View CV</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header