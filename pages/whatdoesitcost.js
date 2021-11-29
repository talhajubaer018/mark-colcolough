import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Packages from '../components/Packages'

const WhatDoesItCost = () => {
  const [packages, setPackages] = useState([])

  const fetchData = async() => {
    const { data } = await axios.get('/data/data.json')
    setPackages(data.packages)
  }

  useEffect(() => {
    fetchData()
    },[])

  return (
    <section className='py-12'>
      <Packages packages={packages} />
    </section>
  )
}

export default WhatDoesItCost
