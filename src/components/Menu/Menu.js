import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';
import menu from '../../resources/menu.json';

import { toMoneyDisplay, toTitleCase } from '../../lib/util/displayUtils';
import { mainMenuCategories } from '../../lib/constants';

const Menu = () => {
  let categories = {};
  menu.forEach(i => {
    let cat = i.category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(i);
  })
  const getItems = () => {
    let items = Object.keys(categories).map((c, index) => {
      let itemsInCategory = categories[c].map(item => {
        return (
          <Row key={`item-${item.id}`} className='menu-items'>
            <Col className='item item-id' xs='1' sm='1' md='1' lg='1'>
              <span>{`${item.id}. `}</span>
            </Col>
            {/* <Col className='item item-chinese' xs='3' sm='3' md='3' lg='3'>
              <span>{`${item.chinese}`}</span>
            </Col> */}
            <Col className='item item-name' xs='9' sm='10' md='10' lg='10'>
              <span>{item.name}</span>
            </Col>
            <Col className='item item-price' xs='1' sm='1' md='1' lg='1'>
              <span>{toMoneyDisplay(item.price.small ? item.price.large : item.price)}</span>
            </Col>
          </Row>
        )
      })
      return (
        <div key={`category-${index}`} className='category-section'>
          <h2>{mainMenuCategories[c]}</h2>
          {itemsInCategory}
        </div>
      )
    });
    return items;
  }
  let items = getItems();
  return (
    <section className='menu'>
      <header className='menu-header'>
        <h1>Menu</h1>
        <p>See what delicious meals we have to offer!</p>
      </header>
      <Container>
        {items}
      </Container>
    </section>
  )
}

export default Menu;