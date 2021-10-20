import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-3 place-items-center bg-customTeal-200 py-8'>
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
        <div className='flex gap-x-8 text-customGray-700 fa-2x'>
          <div>
            <FontAwesomeIcon className='' icon={['fab', 'facebook']} />
          </div>
          <div>
            <FontAwesomeIcon className='' icon={['fab', 'instagram']} />
          </div>
          <div>
            <FontAwesomeIcon className='' icon={['fab', 'linkedin-in']} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 place-items-center bg-customTeal-200 pb-8'>
        <h6>© Copyright, 2021</h6>
        <h6></h6>
        <Link href='/privacy'>
          <h4 className='text-customTeal-500 hover:text-customYellow-500 cursor-pointer'>Privacy & Data Policy</h4>
        </Link>
      </div>

    </footer>
  )
}

export default Footer
