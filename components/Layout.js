import React from 'react'

import LayoutStyles from '../styles/Layout.module.css'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='container w-full mx-auto'>
      <Header />
      <main className={LayoutStyles.main}>
        {children}
      </main>
      footer
    </div>
  )
}

export default Layout
