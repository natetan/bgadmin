import React from 'react';import BigButton from '../../BigButton/BigButton';

import './MastHead.scss';

const MastHead = () => {
  return (
    <header className='masthead'>
      <div className='inner mx-auto my-0 text-center'>
        <h1>Bamboo Garden</h1>
        <p>Health is our recipe</p>
        <BigButton disabled={false} text='See menu' to='/menu' />
      </div>
    </header>
  );
}

export default MastHead;