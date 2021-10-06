import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const privacy = ({  }) => {
  const [privacy, setPrivacy] = useState([])

  const fetchData = async() => {
    const req = await axios.get('/data/privacy.json')
    setPrivacy(req.data.privacy)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='py-8'>
      <div className='relative'>
        <Link href='/'>
          <span className='absolute left-0 top-1/2 transform -translate-y-1/2 text-18 text-customTeal-500 hover:text-customYellow-500 cursor-pointer'>
            <FontAwesomeIcon className='mr-2' icon={['fas', 'chevron-left']} />
            Back
          </span>
        </Link>
        <h1 className='text-center mb-12 text-customYellow-500'>Privacy & Data Policy</h1>
      </div>
      <div className='mb-8'>
        {privacy.map(item => (
          <div className='mb-8' key={item.id}>
            <h3 className='font-bold mb-2'>{item.title}</h3>
            <h4 className='font-light'>{item.text}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default privacy
