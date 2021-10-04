import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 place-items-center bg-customTeal-200 py-8'>
      <div>
        <h5>Mark Colcolough</h5>
        <h5>ShareThisRide ApS</h5>
        <h5>Smørmosetoften 8</h5>
        <h5>5700 Svendborg</h5>
        <h5>CVR : DK38285424</h5>
        <h6>© Copyright, 2021</h6>
      </div>
      <div className='text-customTeal-500'>
        <h5>+4561488488</h5>
        <h5>hello@markcolclough.dk</h5>
      </div>
      <div className='text-customTeal-500'>
        <FontAwesomeIcon className='' icon={['fab', 'facebook']} />
        <FontAwesomeIcon className='' icon={['fab', 'instagram-square']} />
        <FontAwesomeIcon className='' icon={['fab', 'linkedin-in']} />
        <h4>Privacy & Data Policy</h4>
      </div>
    </footer>
  )
}

export default Footer
