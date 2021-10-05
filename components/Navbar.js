import React from 'react'
import Link from 'next/link'

const Navbar = ({ navItems }) => {

  return (
    <nav className='flex justify-between place-items-center text-center w-3/4 text-customYellow-500'>
      {navItems.map(item => (
        <Link key={item.id} href={`/${item.title.replace(/\?/g, '').replace(/\s/g, '').toLowerCase()}`}>
          <h3 className='hover:text-customTeal-500 cursor-pointer'>
            {item.title}
          </h3>
        </Link>

      ))}
    </nav>
  )
}

export default Navbar
