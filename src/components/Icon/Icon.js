import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Icon.scss';

const Icon = (props) => {
  return (
    <span className='icon'>
      <FontAwesomeIcon icon={props.icon} size={props.size} color={props.color} />
    </span>
  )
}

export default Icon;