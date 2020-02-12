import React from 'react';

import './Menu.scss';
import menu from '../../resources/menu.json';

const Menu = () => {
  let items = menu.map(i => {
    let price = i.price.small ? i.price.small : i.price;
    return (
      <li key={i.id}>
        {`${i.id} - ${i.name} - ${price}`}
      </li>
    )
  });
  return (
    <div className='menu'>
      <h1 className='text-center'>Menu</h1>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default Menu;