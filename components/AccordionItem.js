import React from 'react'

const AccordionItem = ({ showDescription, ariaExpanded, color, item, index, onClick }) => {
  return (
    <div className={`faq__question relative ${showDescription}`} key={item.id}>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button py-4 w-full text-left flex text-customGray-700 hover:text-customYellow-500 font-light ${color}`}
        onClick={onClick}
      >
        {item.question}
      </button>
      <h4 id={`faq${index + 1}_desc`} data-qa="faq__desc" className={`faq__desc bg-white ${showDescription}`}>
        {item.answer}
      </h4>
    </div>
  )
}

export default AccordionItem
