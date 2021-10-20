import React from 'react'

import LayoutStyles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
