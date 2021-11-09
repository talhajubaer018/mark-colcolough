import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Articles from '../components/Articles'

const Howicanhelp = ({  }) => {
  const [services, setServices] = useState([])

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setServices(data.howICanHelp)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-11/12 sm:w-auto mx-auto py-8 bg-white'>
      <div className='container mx-auto'>
        <h1 className='text-center mb-16 text-customYellow-500'>How I Can Help</h1>
        <Articles services={services} />
      </div>
    </div>
  )
}

export default Howicanhelp