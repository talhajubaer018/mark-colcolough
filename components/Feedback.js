import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feedback = ({ feedback }) => {
  const quoteIcon = useRef()
  const [quoteWidth, setQuoteWidth] = useState()

  const quoteWidthFunction = () => {
    var width = quoteIcon.current.clientWidth + 15
    setQuoteWidth(width)

    console.log(quoteIcon.current.clientWidth)
    // setQuoteWidth(width)
  }
  useEffect(() => {

    setTimeout(() => {
      quoteWidthFunction()
    }, 400)
    window.addEventListener("resize", quoteWidthFunction, false);

  }, [])
  return (
    <div className='bg-customGray-300 py-8'>
      <div className='container mx-auto'>
        <h1 className='font-light text-center text-customYellow-500 pt-8'>What do others say</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-16 place-items-center my-16 mx-auto sm:gap-x-4 sm:gap-y-16 lg:gap-x-24 lg:gap-y-24'>
          {
            feedback.slice(0,3).map(item => (
              <div key={item.id} className='shadow-custom rounded-lg p-6'>
                <div className='relative head' style={{}}>
                  <img ref={quoteIcon} className='absolute top-0 left-0 transform -translate-y-1/2 icon-quote w-15 lg:w-15' src='/icons/icon-quote.png' />
                  <h4 className='font-bold' style={{paddingLeft: quoteWidth}}>
                    {item.name}
                  <span className='block font-light text-16'>age {item.age}</span>
                  </h4>
                </div>
                <div className='my-4'>
                  <h4 className='mb-4'>{item.text1}</h4>
                  <h4 className='mb-4'>{item.text2}</h4>
                  <Link href='#!'>
                    <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer'>
                      Read More
                      <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
                    </h4>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer text-center py-8'>
          See all feedbacks
          <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
        </h4>
      </div>
    </div>
  )
}

export default Feedback
