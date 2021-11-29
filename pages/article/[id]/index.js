import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/dist/client/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Article = ({}) => {
  const [services, setServices] = useState([])

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    await setServices(data.howICanHelp)
    const s = await data.howICanHelp

    const queryId = (window.location.pathname.split('/')[2])
    const articleInfo = await s.find(x => x.id === parseInt(queryId))

    {console.log(articleInfo)}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='w-11/12 sm:w-auto mx-auto py-12 bg-white'>
      <div className='container mx-auto'>
        <div className='relative mb-8'>
          <div className='absolute left-0 top-0 sm:top-1/2 transform -translate-y-full sm:-translate-y-1/2'>
            <Link href='/howicanhelp'>
              <a>
                <h4 className='text-18 text-customTeal-500 hover:text-customYellow-hover'>
                  <FontAwesomeIcon className='mr-2' icon={['fas', 'chevron-left']} />
                  Back
                </h4>
              </a>
            </Link>
          </div>
          <h1 className='text-customYellow-500 text-center w-auto sm:w-3/5'>Article Headline</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3/2 gap-x-24 gap-y-12'>
          <div>
            <div className='mb-8'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h2 className='mb-4'>H2 Headline</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className='w-11/12 sm:w-1/2 mx-auto px-8 py-2 my-12 border-l-4 border-customTeal-500'>
                <div className='w-10p opacity-50 mb-4'>
                  <img src='/icons/icon-quote.png' />
                </div>
                <h3 className='text-18 mb-4'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.</h3>
                <h6 className='text-12'>- Mark Colclough, age 49</h6>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className='w-auto sm:w-3/4 mx-auto my-12'>
                <img src='/images/mark-article.png' />
              </div>
            </div>
            <div>
              <h3 className='text-18 mb-2'>H3 Headline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='flex flex-col gap-y-8 border-t-2 sm:border-0 border-customGray-400 pt-12 sm:pt-0'>
            <h2 className='text-customGray-700'>Read More</h2>
            <div>
              <h3 className='text-customTeal-500'>Crisis Consultaion</h3>
              <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            <div>
              <h3 className='text-customTeal-500'>Couples Counselling</h3>
              <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            <div>
              <h3 className='text-customTeal-500'>Acute Couples Counselling</h3>
              <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Article
