import React from 'react'

const Locations = ({ locations }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-0 place-items-center py-8 mb-0 sm:mb-24'>
      {
        locations.map(location => (
          <div key={location.id}>
            <h3 className='text-30 text-customTeal-500 font-light text-center mb-2'>{location.city}</h3>
            <h4 className='text-customGray-900 font-light text-center mb-8'>{location.area}</h4>
            <div className='w-auto sm:w-4/6 mx-auto'>
              <img src={location.image} alt={location.city} />
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Locations
