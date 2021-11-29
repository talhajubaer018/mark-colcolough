import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer>
      <div className='bg-customTeal-200'>
        <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-3 place-items-center container mx-auto py-8'>
          <SocialIcons propClass={'block sm:hidden mb-4'} />
          <div className='font-light text-center'>
            <h4 className='font-bold'>Mark Colcolough</h4>
            <h4>ShareThisRide ApS</h4>
            <h4>Smørmosetoften 8</h4>
            <h4>5700 Svendborg</h4>
            <h4>CVR : DK38285424</h4>
          </div>
          <div className='text-center'>
            <h4 className='mb-4 text-customTeal-500'>+4561488488</h4>
            <h4 className='text-customTeal-500'>hello@markcolclough.dk</h4>
          </div>
          <SocialIcons propClass={'hidden sm:flex sm:flex-row'} />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center bg-customTeal-200 pb-8 container mx-auto '>
          <h6>© Copyright, 2021</h6>
          <h6></h6>
          <Link href='/privacy'>
            <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer'>Privacy & Data Policy</h4>
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer
