import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AccordionItem from './AccordionItem'

const Accordion = ({ booking, paymentFAQ }) => {
  const [activeIndex, setActiveIndex] = useState()
  const [activePaymentIndex, setActivePaymentIndex] = useState()

  const renderedBooking = booking.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "dsd";
    const color = index === activeIndex ? "color" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        keys={item.id}
        showDescription={showDescription}
        color={color}
        id={index}
        desc__id={`faq${index + 1}_desc`}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
          const item = document.getElementById(index)
          item.classList.toggle('show-description')
          const desc = document.getElementById(`faq${index + 1}_desc`)
          desc.classList.toggle('show-description')
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
        keys={item.id}
        showDescription={showDescription}
        color={color}
        id={index + 100}
        desc__id={`faq${index + 1}_payment_desc`}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index + 100}
        onClick={() => {
          setActivePaymentIndex(index);
          const item = document.getElementById(index + 100)
          item.classList.toggle('show-payment-description')
          const desc = document.getElementById(`faq${index + 1}_payment_desc`)
          desc.classList.toggle('show-payment-description')
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
      <h4 className='text-customTeal-500 hover:text-customYellow-hover cursor-pointer text-center py-8'>
        See all questions
        <FontAwesomeIcon className='ml-2' icon={['fas', 'long-arrow-alt-right']} />
      </h4>
    </div>
  )
}

export default Accordion
