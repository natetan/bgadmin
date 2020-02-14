import React from 'react';

import './Lunch.scss';

import Menu from '../Menu/Menu';
import lunch from '../../../resources/lunch.json';

const Lunch = () => {
  return <Menu menu={lunch} type='lunch' />
}

export default Lunch;