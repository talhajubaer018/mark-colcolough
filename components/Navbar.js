import React, { useRef } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ navItems }) => {

  const navbar = useRef(null)
  const menuIcon = useRef(null)

  const menuClickHandler = () => {
    navbar.current.classList.remove('navbar-hidden')
    navbar.current.classList.add('navbar-show')
    menuIcon.current.classList.add('opacity-0')
  }
  const crossClickHandler = () => {
    navbar.current.classList.add('navbar-hidden')
    navbar.current.classList.remove('navbar-show')
    menuIcon.current.classList.remove('opacity-0')
  }
  const navItemClicked = () => {
    navbar.current.classList.add('navbar-hidden')
    menuIcon.current.classList.remove('opacity-0')
  }

  return (
    <nav className='relative justify-between text-right w-3/4 text-customYellow-500'>
      <div ref={menuIcon} onClick={menuClickHandler}>
        <FontAwesomeIcon className='absolute top-1/2 transform -translate-y-1/2 right-0 mr-0 sm:mr-16 cursor-pointer hover:text-customTeal-500 ml-auto fa-2x z-50' icon={['fas', 'bars']} />
      </div>
      <div ref={navbar} className='flex flex-col justify-evenly pr-0 sm:pr-16 absolute z-40 top-0 right-0 navbar-hidden bg-white w-screen h-screen transform -translate-y-6'>

        <FontAwesomeIcon onClick={crossClickHandler} className='cursor-pointer hover:text-customTeal-500 ml-auto fa-2x z-50 transform translate-y-0 sm:-translate-y-1/2' icon={['fas', 'times']} />
        <div className='bg-white absolute w-screen h-screen -right-1/2 z-n1'></div>
        {navItems.map(item => (
          <Link key={item.id} href={`/${item.title.replace(/\?/g, '').replace(/\s/g, '').toLowerCase()}`}>
            <h3 onClick={navItemClicked} className='text-customYellow-500 hover:text-customTeal-500 cursor-pointer'>
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
