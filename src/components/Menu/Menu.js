import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';
import menu from '../../resources/menu.json';

const Menu = () => {
  const getItems = type => {
    let items = menu;
    // if (type === 'odd') {
    //   items = menu.filter(i => {
    //     return i.id % 2 === 1;
    //   });
    // } else if (type === 'even') {
    //   items = menu.filter(i => {
    //     return i.id % 2 === 0;
    //   });
    // }
    let res = menu.map(item => {
      let price = item.price.small ? `S: $${item.price.small} L: $${item.price.large}` : `$${item.price}`;
      console.log(item.price);
      let data = {
        id: item.id,
        name: item.name,
        price: price
      }
      return (
        <Col md='4' key={data.id}>
          <MenuItem data={data} />
        </Col>
      )
    });
    return res;
  }
  let items = getItems();
  return (
    <div className='menu'>
      <h1>Menu</h1>
      <p>See what delicious meals we have to offer!</p>
      <Container>
        <Row>
          {items}
        </Row>
      </Container>
    </div>
  )
}

export default Menu;