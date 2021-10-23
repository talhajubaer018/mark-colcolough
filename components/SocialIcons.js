import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcons = ({ propClass }) => {
  return (
    <div className={`flex gap-x-8 text-customGray-700 fa-2x ${propClass}`  }>
      <div>
        <FontAwesomeIcon className='' icon={['fab', 'facebook']} />
      </div>
      <div>
        <FontAwesomeIcon className='' icon={['fab', 'instagram']} />
      </div>
      <div>
        <FontAwesomeIcon className='' icon={['fab', 'linkedin-in']} />
      </div>
    </div>
  )
}

export default SocialIcons
