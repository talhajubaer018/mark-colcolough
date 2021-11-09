import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AccordionItem from './AccordionItem'

const Accordion = ({ booking, paymentFAQ }) => {
  const [activeIndex, setActiveIndex] = useState()
  const [activePaymentIndex, setActivePaymentIndex] = useState()

  const renderedBooking = booking.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const color = index === activeIndex ? "color" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        color={color}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });
  const renderedPayment = paymentFAQ.map((item, index) => {
    const showDescription = index === activePaymentIndex ? "show-payment-description" : "";
    const color = index === activePaymentIndex ? "color" : "";
    const ariaExpanded = index === activePaymentIndex ? "true" : "false";
    return (
      <AccordionItem
        key={item.id}
        showDescription={showDescription}
        color={color}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActivePaymentIndex(index);
        }}
      />
    );
  });

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24'>
        <div>
          <h2 className='p-6'>Booking</h2>
          <div>
            <h2>{renderedBooking}</h2>
          </div>
        </div>
        <div>
          <h2 className='p-6'>Payment</h2>
          <div>
            <h2>{renderedPayment}</h2>
          </div>
        </div>
      </div>
      <h4 className='text-customTeal-500 hover:text-customYellow-500 cursor-pointer text-center py-8'>
        See all questions
        <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
      </h4>
    </div>
  )
}

export default Accordion
