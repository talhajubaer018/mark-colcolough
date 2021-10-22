import React, { useState, useEffect } from 'react'
import axios from 'axios'

const meetmark = ({  }) => {
  const [meetMark, setMeetMark] = useState([])

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setMeetMark(data.meetMarkData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='py-8'>
      <div className='container mx-auto'>
        <h1 className='text-center mb-12 text-customYellow-500'>Meet Mark</h1>
        <div className='grid grid-cols-2 gap-x-8'>
          <div>
            <img src='/images/mark.png' />
          </div>
          <div>
            {meetMark.map(data => (
              <div key={data.id} className='mb-8'>
                <h2 className={data.id === 1 ? 'text-25 font-light mb-2' : 'text-20 font-normal mb-2'}>{data.title}</h2>
                <p className='font-light'>{data.text}</p>
              </div>
            ))}
            <div className='mt-4'>
              <p className='mb-8'>You are welcome to download the {' '}
                <span className='text-customTeal-500 cursor-pointer hover:text-customYellow-500'>ethical guidelines</span> {' '}
                I adhere to from the UKCP Ethical Guidelines.
              </p>
              <p className='mb-4'>Are you in a situation that you need help solving?</p>
              <p>I offer you a safe setting, in complete confidence, from where you can explore your thoughts, feelings and experiences. My practice encompasses individual psychotherapy and couples counselling. I have two clinics, one in Svendborg and the other centrally located in downtown Copenhagen. My professional background and extensive experience will support you in your personal development.</p>
            </div>
            <div className='flex place-items-center justify-evenly mt-12 mb-4'>
              <img className='w-1/5' src='/images/efpp-logo.png' alt='efpp-logo' />
              <img className='w-1/5' src='/images/ukcp-logo.png' alt='ukcp-logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default meetmark
