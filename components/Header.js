import React from 'react'

const Header = () => {
  return (
    <header className='flex place-items-center py-4'>
      <div className='mr-auto'>
        <img className='w-3/5' src='/images/logo.png' />
      </div>
      <nav className='flex justify-between place-items-center text-center w-3/4 text-customYellow-500'>
        <h4>How I can help</h4>
        <h4>What does it cost?</h4>
        <h4>What do others say?</h4>
        <h4>Meet Mark</h4>
        <h4>Popular questions</h4>
        <h4>Locations</h4>
        <h4>Get in touch</h4>
        <h4>Dansk</h4>
      </nav>
    </header>
  )
}

export default Header