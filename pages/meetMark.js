import React, { useState, useEffect } from 'react'
import axios from 'axios'

const meetmark = ({  }) => {
  const [meetMark, setMeetMark] = useState([])

  const fetchData = async() => {
    const req = await axios.get('/data/meetMark.json')
    setMeetMark(req.data.meetMarkData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='py-8'>
      <h1 className='text-center mb-8 text-customYellow-500'>Meet Mark</h1>
      <div className='grid grid-cols-2 gap-x-8'>
        <div>
          <img src='/images/mark.png' />
        </div>
        <div>
          {meetMark.map(data => (
            <div key={data.id}>
              <h2 className=''>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
          <div className='mt-4'>
            <p>You are welcome to download the ethical guidelines I adhere to from the UKCP Ethical Guidelines</p>
            <p>Are you in a situation that you need help solving?</p>
            <p>I offer you a safe setting, in complete confidence, from where you can explore your thoughts, feelings and experiences. My practice encompasses individual psychotherapy and couples counselling. I have two clinics, one in Svendborg and the other centrally located in downtown Copenhagen. My professional background and extensive experience will support you in your personal development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default meetmark
