import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../components/Button'

const Packages = ({ packages, id }) => {

  return (
    <div id={id} className='grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:-gap-y-0 w-full sm:w-full mx-auto gap-x-8'>
      {
        packages.map((item) => (
          <div key={item.id} className={`p-6 rounded-lg relative` + ' ' + (item.id === 1 ? 'bg-customGray-200' : item.id === 2 ? 'bg-customTeal-300' : item.id === 3 && 'bg-customLavender-300')}>
            <div className='flex place-items-center mb-8'>
              <img className='w-1/5' src={item.image} />
              <div className='ml-auto text-right relative pt-8'>
                <div className='absolute top-0 right-0 text-18 text-customYellow-500 font-bold md:w-screen lg:auto'>{item.popular}</div>
                <h2 className='text-30 font-bold'>{item.header}</h2>
                <h6 className='text-customGray-400 font-light'>{item.subHeader}</h6>
              </div>
            </div>
            <h4 className='font-light text-right mt-4'>{item.description}</h4>
            <div className={`grid grid-cols-3 place-items-center text-center` + ' ' + (item.id === 1 && 'mb-8')}>
              {item.hourlyRates.map(rate => (
                <div key={rate.id} className='pt-4 relative w-full'>
                  <h6 className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-customYellow-500 text-10'>{rate.popular}</h6>
                  <h4 className='font-bold text-customGray-700'>{rate.amount}</h4>
                  <h6 className='text-customGray-700'>{rate.time}</h6>
                </div>
              ))}
            </div>
            <div className='flex place-items-center justify-end'>
              <div dangerouslySetInnerHTML={{ __html: item.billText }} className='text-right font-light w-1/2 sm:w-full'></div>
              <h1 className='text-50 font-bold w-full text-right'>{item.billAmount}</h1>
            </div>
            <div className='flex flex-col mt-8 mb-24'>
              {
                item.checkPoints.map(checkPoint => (
                  <div key={checkPoint.id} className='flex mb-4'>
                    <FontAwesomeIcon className='text-customTeal-500' icon={['fas', 'check-circle']} />
                    <div dangerouslySetInnerHTML={{ __html: checkPoint.text }} className='pl-4'></div>
                  </div>
                ))
              }
            </div>
            <Button btnClass={'bg-customTeal-500 text-white rounded-lg p-4 absolute w-11/12 mx-auto left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 hover:bg-customYellow-hover'} title='BOOK YOUR APPOINTMENT NOW'></Button>
          </div>
        ))
      }


    </div>
  )
}

export default Packages
