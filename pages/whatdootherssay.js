import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhatDoOthersSay = ({  }) => {

  const [quotes, setQuotes] = useState([])
  const [iconWidth, setIconWidth] = useState()

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setQuotes(data.whatDoOthersSay)
  }
  const quoteHeaderMargin = () => {
    const icon = document.querySelector('.icon-quote')
    var width = icon.clientWidth + 15
    setIconWidth(width)
  }

  useEffect(() => {
    fetchData()
    setTimeout(() => {
      quoteHeaderMargin()
    },400)

    window.addEventListener("resize", quoteHeaderMargin, false);
  }, [])

  return (
    <section className='w-11/12 sm:w-auto mx-auto py-8'>
      <div className='container mx-auto'>
        <h1 className='text-center mb-16 text-customYellow-500'>What Do Others Say</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-x-4 sm:gap-y-16 lg:gap-x-16 lg:gap-y-24 place-items-center'>
          {quotes.map(item => (
            <div key={item.id} className='bg-white shadow-custom rounded-lg p-4 m-4 sm:m-0'>
              <div className='relative head' style={{paddingLeft: iconWidth}}>
                <img className='absolute top-0 left-0 transform -translate-y-1/2 icon-quote w-15 lg:w-15' src='/icons/icon-quote.png' />
                <h4 className='font-bold'>
                  {item.name}
                <span className='block font-light text-16'>age {item.age}</span>
                </h4>
              </div>
              <div className='my-4'>
                <h4 className='mb-4'>{item.text1}</h4>
                <h4 className='mb-4'>{item.text2}</h4>
                <Link href='/whatdootherssay/[id]' as={`/whatdootherssay/${item.id}`}>
                  <h4 className='text-customTeal-500 hover:text-customYellow-500 cursor-pointer'>
                    Read More
                    <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
                  </h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default WhatDoOthersSay