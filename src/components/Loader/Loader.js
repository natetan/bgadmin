import React from 'react';

import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

const Loader = props => {
  let data = [];
  for (let i = 1; i <= props.number; i++) {
    data.push(i);
  }
  let spinners = data.map(n => {
    return <Spinner key={n} animation='grow' className='spinner' />
  });
  return (
    <div className='d-flex justify-content-center loader'>
      {spinners}
    </div>
  )
}

export default Loader;