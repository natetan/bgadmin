import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import './MastHead.scss';

const MastHead = () => {
  return (
    <header className='masthead'>
      <div className='inner mx-auto my-0 text-center'>
        <h1>Bamboo Garden</h1>
        <h2>Vegetarian Cuisine</h2>
        {/* <p>Chinese Vegetarian Cuisine</p> */}
      </div>
    </header>
  );
}

export default MastHead;