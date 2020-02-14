import React from 'react';

import Combos from '../Combos/Combos';

import './Dinner.scss';
import combos from '../../../resources/combos.json';

const Dinner = () => {
  return (
    <div className='dinner'>
      <Combos data={combos.dinner} />
    </div>
  );
}

export default Dinner;