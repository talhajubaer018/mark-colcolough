import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Location from '../components/Locations'

const Locations = () => {
  const [locations, setLocations] = useState([])

    const fetchData = async() => {
      const { data } = await axios.get('/data/data.json')
      setLocations(data.locations)
    }

    useEffect(() => {
      fetchData()
      },[])

  return (
    <section className='container mx-auto py-12'>
      <Location locations={locations} />
    </section>
  )
}

export default Locations