import React from 'react';

import Combos from '../Combos/Combos';
import Menu from '../Menu/Menu';

import './Lunch.scss';
import combos from '../../../resources/combos.json';
import lunch from '../../../resources/lunch.json';

const Lunch = () => {
  return (
    <div className='lunch'>
      <Combos data={combos.lunch} />
      <Menu menu={lunch} type='lunch' />
    </div>
  );
}

export default Lunch;