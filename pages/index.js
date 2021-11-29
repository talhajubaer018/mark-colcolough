import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'

import Packages from '../components/Packages'
import Feedback from '../components/Feedback'
import Accordion from '../components/Accordion'
import Locations from '../components/Locations'

export default function Home() {
  const [services, setServices] = useState([])
  const [allServices, setAllServices] = useState([])
  const [packages, setPackages] = useState([])
  const [feedback, setFeedback] = useState([])
  const [booking, setBooking] = useState([])
  const [paymentFAQ, setPaymentFAQ] = useState([])
  const [locations, setLocations] = useState([])

  const panelOne = useRef(null)
  const panelTwo = useRef(null)

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setServices(data.services)
    setAllServices(data.howICanHelp)
    setPackages(data.packages)
    setFeedback(data.whatDoOthersSay)
    setBooking(data.booking)
    setPaymentFAQ(data.paymentFAQ)
    setLocations(data.locations)
  }

  const getPanelHeight = () => {
    var height = Math.max(panelOne.current.clientHeight, panelTwo.current.clientHeight)
    var width = Math.max(panelOne.current.clientWidth, panelTwo.current.clientWidth)

    panelOne.current.style.height = height + 'px'
    panelOne.current.style.width = width + 'px'
    panelTwo.current.style.height = height + 'px'
    panelTwo.current.style.width = width + 'px'
  }

  const ratesCheckClick = () => {
    const element = document.getElementById("packages");

    element.scrollIntoView({behavior: "smooth"});
  }

  useEffect(() => {
    getPanelHeight()
    fetchData()
    window.addEventListener("resize", getPanelHeight, false);
  }, [])

  return (
    <div className='w-11/12 sm:w-auto mx-auto'>
      <section className='background'>
        <section className='container mx-auto grid grid-cols-1 sm:grid-cols-3/2 place-items-center text-center'>
          <div>
            <h1 className='text-customYellow-500 font-medium'>Support, when you need it most</h1>
            <p className='font-light'>
              Until now, psychological care has mainly been provided at an hourly rate. <br/>
              Now you can choose a plan that fits you.<br/>
              Pay for an hour a week, or pay half that for 24/7 access.<br/>
              My promise is simply;
            </p>
            <div className='mt-8'>
              <h4 className='relative'>
                I will respond to your needs, within a few hours, all year round.
                <img className='absolute w-7 top-0 left-0 transform traslate-x-0 -translate-y-full md:-translate-x-full md:-translate-y-1/2 lg:translate-x-full' src='/icons/icon-quote.png' />
              </h4>
              <img className='mx-auto w-5/12 sm:w-2/12 mt-4' src='/images/signature.png' />
            </div>
          </div>
          <div className='w-full'>
            <img className='w-1/2 mx-auto hidden sm:block' src='/images/logo.svg' />
          </div>
        </section>
        <section className='flex place-items-center justify-center my-16 gap-x-2 sm:gap-x-8'>
          <div ref={panelOne} onClick={ratesCheckClick} className='flex flex-col sm:flex-row cursor-pointer place-items-center justify-center bg-customGray-200 p-4 rounded-lg'>
            <img className='w-1/3 sm:w-15p' src='/icons/icon-timer.png' />
            <div className='w-full sm:w-3/4 text-center'>
              <h3 className='text-customTeal-500'>
                Hourly rates
                <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
              </h3>
              <h6>Prices from 999 kr. per hour</h6>
            </div>
          </div>
          <div ref={panelTwo} onClick={ratesCheckClick} className='flex flex-col sm:flex-row cursor-pointer place-items-center justify-center bg-customTeal-300 p-4 rounded-lg'>
            <img className='w-1/3 sm:w-15p' src='/icons/icon-pamphlet.png' />
            <div className='w-full sm:w-3/4 text-center'>
              <h6 className='text-customYellow-500 text-11 font-bold'>MOST POPULAR</h6>
              <h3 className='text-customTeal-500'>
                24/7 access
                <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
              </h3>
              <h6>499 kr. weekly, or <br/> 999 kr. monthly</h6>
            </div>
          </div>
        </section>
        <section className='container mx-auto flex place-items-center justify-around gap-x-2 sm:gap-x-8 lg:w-1/2 my-16'>
          {services.map(service => (
            <div className='text-center' key={service.id}>
              <img className='w-1/2 sm:w-15p mx-auto mb-2' src={service.icon} />
              <h4>{service.text}</h4>
            </div>
          ))}
        </section>
        <section className='bg-white sm:bg-customGray-200'>
          <h1 className='text-customYellow-500 font-light text-center py-16'>How I can help</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto px-20 gap-x-20 place-items-center '>
            {allServices.map(item => (
              <div key={item.id} className='flex gap-x-8 w-full sm:w-full mx-auto mb-8'>
                <img className='w-8 h-8' src={item.image} />
                <h2 className='font-light'>
                  {item.title}
                  <FontAwesomeIcon className='ml-2 text-customTeal-500' icon={['fas', 'long-arrow-alt-right']} />
                </h2>
              </div>
          ))}
          </div>
          <Link href='#!'>
            <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer text-left sm:text-center py-8'>
              See all articles
              <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
            </h4>
          </Link>
        </section>
      </section>
      <section className='mb-8 container mx-auto pb-12'>
        <div className='text-center py-16 font-light'>
          <h1 className='text-customYellow-500 mb-4'>What does it cost?</h1>
          <h4>All prices are in DKK. 25% VAT will be added for corporate clients. </h4>
        </div>
        <Packages id='packages' packages={packages} />
      </section>
      <section>
        <Feedback feedback={feedback} />
      </section>
      <section className='py-8'>
        <h1 className='text-center text-customYellow-500 font-light py-4'>Meet Mark</h1>
        <div className='w-auto sm:w-1/4 mx-auto py-8'>
          <img src='/images/iframe.png' alt='iframe' />
        </div>
        <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer text-center py-8'>
          Read more about me
          <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
        </h4>
      </section>
      <section className='py-8'>
        <div className='bg-customGray-300'>
          <div className='container mx-auto'>
            <div className='flex flex-col'>
              <h1 className='text-center text-customYellow-500 font-light py-8'>Popular Questions</h1>
              <Accordion booking={booking} paymentFAQ={paymentFAQ} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-white'>
          <div className='container mx-auto'>
            <h1 className='text-center text-customYellow-500 font-light py-8'>Locations</h1>
            <h4 className='font-light text-center'>If you would like to meet in person, we could either do so at your place, if you are a subscriber, or at my places in Copenhagen or Svendborg.</h4>
            <Locations locations={locations} />
            <h1 className='text-center text-customYellow-500 font-light py-8'>Get in touch</h1>
            <div className='md:w-3/4 lg:w-1/2 grid grid-cols-1/2 place-items-center shadow-custom mx-auto mb-24'>
              <div>
                <img src='/images/mark-small.png' alt='mark' />
              </div>
              <div className='md:w-5/6 lg:w-4/6'>
                <h3 className='mb-2'>Say hello!</h3>
                <div className='mb-8'>
                  <h4><span className='text-customTeal-500'>Chat</span> with me</h4>
                  <small className='text-12 font-light'>I respond rapidly all year round</small>
                </div>
                <div>
                  <h4>Send me an <span className='text-customTeal-500'>e-mail</span></h4>
                  <small className='text-12 font-light'>Usually I reply within a working day</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
