import React from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Articles = ({ services }) => {
  return (
    <div className='grid grid-cols-3 sm:gap-x-8 xl:gap-x-16'>
      {services.map(service => (
      <div className='mb-16'>
        <div className='flex gap-x-4'>
          <div className='sm:w-1/2 lg:w-auto mt-1'>
            <img src={service.image} />
          </div>
          <div className='text-customGray-900 font-light'>
            <h2 className='mb-4'>{ service.title }</h2>
            <h4 className='mb-2'>{ service.text }</h4>
            <Link href='/howicanhelp/article/[id]' as={`/howicanhelp/article/${service.id}`}>
              <h4 className='text-customTeal-500 hover:text-customYellow-500 cursor-pointer'>
                Learn More
                <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
              </h4>
            </Link>
          </div>
        </div>
      </div>
        ))}
    </div>
  )
}

export default Articles
