import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './Navbar'

const Header = () => {
  const [navItems, setNavItems] = useState([])

  const fetchData = async() => {
    const req = await axios.get('/data/navItems.json')
    setNavItems(req.data.navItems)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <header className='flex place-items-center py-4'>
      <div className='mr-auto'>
        <img className='w-3/5' src='/images/logo.png' />
      </div>
      <Navbar navItems={navItems}/>

    </header>
  )
}

export default Header