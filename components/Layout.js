import React from 'react'

import LayoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      header
      <main className={LayoutStyles.main}>
        {children}
      </main>
      footer
    </div>
  )
}

export default Layout
