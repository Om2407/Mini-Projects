import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/product', label: 'Product' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md bg-cyan-900/95 shadow-lg border-b border-cyan-700/50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link 
            to='/' 
            className='group flex items-center space-x-2'
          >
            <div className='w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300'>
              <span className='text-white font-bold text-xl'>Decode@Chn</span>
            </div>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>
              Decode@Chn
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative px-5 py-2.5 text-lg font-medium rounded-lg
                  transition-all duration-300 ease-in-out
                  ${isActive(link.path)
                    ? 'text-white bg-cyan-700/50'
                    : 'text-cyan-100 hover:text-white hover:bg-cyan-800/30'
                  }
                  group overflow-hidden
                `}
              >
                <span className='relative z-10'>{link.label}</span>
                
                {/* Hover effect */}
                <span className={`
                  absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
                  transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left
                  ${isActive(link.path) ? 'scale-x-100' : ''}
                  -z-0 opacity-20
                `} />
                
                {/* Active indicator */}
                {isActive(link.path) && (
                  <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full' />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <Link
              to='/contact'
              className='px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg
                shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70
                transform hover:scale-105 hover:-translate-y-0.5
                transition-all duration-300 ease-out
                border border-cyan-400/30'
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-cyan-800/50 transition-colors duration-200'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6 text-cyan-100'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}
          `}
        >
          <div className='flex flex-col space-y-2 pt-4'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  px-4 py-3 text-lg font-medium rounded-lg
                  transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-cyan-700/50 text-white border-l-4 border-cyan-400'
                    : 'text-cyan-100 hover:bg-cyan-800/30 hover:text-white hover:translate-x-2'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              to='/contact'
              onClick={() => setIsMenuOpen(false)}
              className='mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-center
                shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70
                transform hover:scale-105 transition-all duration-300'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar