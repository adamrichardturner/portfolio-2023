import { useState, useEffect, FunctionComponent } from 'react'
import Image from 'next/image'
import burgerBlack from '../../public/burger-menu-black.svg'
import burgerWhite from '../../public/burger-menu-white.svg'

import { Link, animateScroll as scroll } from 'react-scroll'

const Header: FunctionComponent = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth < 640
  )

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
      if (window.scrollY > 15) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflowY = 'auto'
    }
  }, [isMenuOpen, isMobile, scrolled])

  return (
    <header
      className={`z-10 fixed top-0 w-full h-16 transition-all ease-in-out duration-200 ${
        isMobile
          ? scrolled
            ? 'bg-white text-primary shadow-md'
            : 'bg-transparent text-white'
          : scrolled
          ? 'bg-white shadow-md text-primary'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container h-full flex items-center justify-between">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
          <div className="flex flex-row items-center space-x-2">
            <Image
              priority
              className="rounded-full"
              src="/adam-thumb.png"
              alt="Adam Turner"
              width={42}
              height={42}
            />
            <h3
              className={`font-medium ${
                scrolled ? 'text-tertiary' : 'text-white'
              }`}
            >
              Adam Richard Turner
            </h3>
          </div>
        </Link>
        <nav className="desktop-nav">
          <ul
            className={`nav-items flex flex-row items-center font-normal justify-end list-none space-x-8 text-base ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="media"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <a
              href="/adamturner-cv.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="bg-secondary px-5 shadow hover:shadow-lg py-2.5 rounded-lg font-semibold text-base text-primary">
                View CV
              </li>
            </a>
          </ul>
        </nav>
        <div
          className="menu-btn text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src={scrolled ? burgerBlack : burgerWhite}
            alt="Menu"
            height={18}
            width={18}
          />
        </div>
      </div>
      <nav id="overlay" className={`${isMenuOpen ? 'open' : 'closed'}`}>
        <Image
          src="/close-button.svg"
          alt="Close"
          className="close-button"
          onClick={() => setIsMenuOpen(false)}
          width={18}
          height={18}
        />
        <ul className="flex flex-col h-full text-2xl space-y-8 text-white items-center justify-center list-none">
          <li>
            <Link
              activeClass="active"
              to="projects"
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
              activeClass="active"
              to="media"
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
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <a
            href="/adamturner-cv.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className="bg-secondary px-5 shadow hover:shadow-lg py-2.5 rounded-lg font-bold text-base text-primary">
              View CV
            </li>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
