import React from 'react'

const AccordionItem = ({ keys, id, desc__id, showDescription, ariaExpanded, color, item, index, onClick }) => {
  return (
    <div key={keys} id={id} className={`faq__question relative ${showDescription}`}>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button py-4 w-full text-left flex text-customGray-700 hover:text-customYellow-hover font-light ${color}`}
        onClick={onClick}
      >
        {item.question}
      </button>
      <h4 id={desc__id} data-qa="faq__desc" className={`faq__desc bg-white ${showDescription}`}>
        {item.answer}
      </h4>
    </div>
  )
}

export default AccordionItem
