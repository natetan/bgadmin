import React from 'react';
import { useHistory } from 'react-router-dom';

import BigButton from '../../BigButton/BigButton';

import './MastHead.scss';

const MastHead = () => {
  return (
    <header className='masthead'>
      <div className='inner mx-auto my-0 text-center'>
        <h1>Bamboo Garden</h1>
        {/* <h2>Vegetarian Cuisine</h2> */}
        <p>Health is our recipe</p>
        <BigButton text='See menu' to='/menu' />
      </div>
    </header>
  );
}

export default MastHead;