import Alert from 'react-bootstrap/Alert';
import React from 'react';

import './Notice.scss';

const Notice = props => {
  return (

    <Alert variant='danger'>
      <Alert.Heading>Notice</Alert.Heading>
      <hr />
      <p className='mb-0'>
        {props.message}
      </p>
    </Alert>
  )
}

export default Notice;