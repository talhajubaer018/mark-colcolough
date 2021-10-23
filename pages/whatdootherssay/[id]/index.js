import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/dist/client/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const whatDoOthersSay = () => {
  return (
    <section className='w-10/12 sm:w-auto mx-auto py-12 bg-white'>
      <div className='container mx-auto'>
        <div className='relative mb-8'>
          <div className='absolute left-0 top-0 sm:top-1/2 transform -translate-y-full sm:-translate-y-1/2'>
            <Link href='/whatdootherssay'>
              <a>
                <h4 className='text-18 text-customTeal-500 hover:text-customYellow-500'>
                  <FontAwesomeIcon className='mr-2' icon={['fas', 'chevron-left']} />
                  Back
                </h4>
              </a>
            </Link>
          </div>
          <h1 className='text-customYellow-500 text-center'>What Do Others Say</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3/2 gap-x-24'>
          <div>
            <div className='shadow-custom p-4 sm:p-12 rounded-lg'>
              <div className='relative mt-4'>
                <div className='absolute left-0 -top-1/2'>
                  <img className='w-1/3' src='/icons/icon-quote.png' />
                </div>
                <div className='ml-12 mb-4'>
                  <h4>Paul Smith</h4>
                  <h4>age 37</h4>
                </div>
              </div>
              <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.</h4>
              <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.</h4>
              <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.</h4>
              <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.</h4>
            </div>
            <div className='flex mb-12 sm:mb-0 mt-12 gap-x-12 sm:gap-x-0'>
              <Link href='/#!'>
                <a>
                  <h4 className='text-18 text-customTeal-500 hover:text-customYellow-500'>
                    <FontAwesomeIcon className='mr-2' icon={['fas', 'chevron-left']} />
                    Previous Feedback
                  </h4>
                </a>
              </Link>
              <Link href='/#!'>
                <a className='ml-auto'>
                  <h4 className='text-18 text-customTeal-500 hover:text-customYellow-500'>
                    Next Feedback
                    <FontAwesomeIcon className='ml-2' icon={['fas', 'chevron-right']} />
                  </h4>
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h2 className='mb-8'>Read More</h2>
            <div className='shadow-custom rounded-lg p-4'>
              <div className='relative head'>
                <img className='absolute top-0 left-0 transform -translate-y-1/2 icon-quote w-15p lg:w-15p' src='/icons/icon-quote.png' />
                <h4 className='font-bold ml-16'>
                  Paul Smith
                <span className='block font-light text-16'>age 37</span>
                </h4>
              </div>
              <div className='my-4'>
                <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                <h4 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                <Link href='/whatdootherssay' as={`/whatdootherssay`}>
                  <h4 className='text-customTeal-500 hover:text-customYellow-500 cursor-pointer'>
                    Read More
                    <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default whatDoOthersSay
