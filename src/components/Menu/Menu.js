import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';
import menu from '../../resources/menu.json';

const Menu = () => {
  let categories = {};
  menu.forEach(i => {
    let cat = i.category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(i);
  })
  const doSomething = () => {
    let items = Object.keys(categories).map((c, index) => {
      let itemsInCategory = categories[c].map(item => {
        return (
          <Row key={`item-${item.id}`}>
            <Col lg='1'>
              <span className='item-name'>{`${item.id}. `}</span>
            </Col>
            <Col lg='3'>
              <span className='item-name'>{`${item.chinese}`}</span>
            </Col>
            <Col lg='7'>
              <span className='item-name'>{item.name}</span>
            </Col>
            <Col className='item-name-price' lg='1'>
              <span>{item.price.small ? item.price.large : item.price}</span>
            </Col>
          </Row>
        )
      })
      return (
        <div key={`category-${index}`} className='category-section'>
          <h2>{c}</h2>
          {itemsInCategory}
        </div>
      )
    });
    return items;
  }
  const getItems = () => {
    let res = menu.map(item => {
      let price = item.price.small ? `S: $${item.price.small} L: $${item.price.large}` : `$${item.price}`;
      let data = {
        id: item.id,
        name: item.name,
        price: price
      }
      return (
        <Row key={data.id}>
          <Col lg='1'>
            <span className='item-name'>{`${item.id}. `}</span>
          </Col>
          <Col lg='3'>
            <span className='item-name'>{`${item.chinese}`}</span>
          </Col>
          <Col lg='7'>
            <span className='item-name'>{item.name}</span>
          </Col>
          <Col className='item-name-price' lg='1'>
            <span>{item.price.small ? item.price.large : item.price}</span>
          </Col>
        </Row>
      )
    });
    return res;
  }
  let items = getItems();
  let test = doSomething();
  return (
    <div className='menu'>
      <h1>Menu</h1>
      <p>See what delicious meals we have to offer!</p>
      <Container>
        {test}
      </Container>
    </div>
  )
}

export default Menu;