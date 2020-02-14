import { faPepperHot, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

import { mainMenuCategories, pictures } from '../../lib/constants';
import { toMoneyDisplay, toTitleCase } from '../../lib/util/displayUtils';
import Icon from '../Icon/Icon';
import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';
import menu from '../../resources/menu.json';

import FilterItem from './FilterItem/FilterItem';

const Menu = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = id => {
    setFilter(id);
  }

  const filterIsActive = id => {
    return filter === id;
  }

  let filters = ['all', 'lunch', 'dinner'];
  let filterItems = filters.map((f, i) => {
    return (
      <Col key={`filter-item-${i}`} xs='4' md='4'>
        <FilterItem id={f} active={filterIsActive(f)} onClick={handleFilter} text={toTitleCase(f)} />
      </Col>
    );
  });

  let categories = {};
  menu.forEach(i => {
    let cat = i.category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(i);
  });

  const getItems = () => {
    let items = Object.keys(categories).map((c, index) => {
      let itemsInCategory = categories[c].map(item => {
        return (
          <Row key={`item-${item.id}`} className='menu-items'>
            <Col className='item item-id' xs='1' sm='1' md='1' lg='1'>
              <span>{`${item.id}. `}</span>
            </Col>
            <Col className='item item-name' xs='9' sm='10' md='10' lg='10'>
              <span>
                {item.vegan && <Icon icon={faSeedling} size='sm' color='#528026' />}
                {item.spicy && <Icon icon={faPepperHot} size='sm' color='red' />}
                {item.name}
              </span>
            </Col>
            <Col className='item item-price' xs='1' sm='1' md='1' lg='1'>
              <span>{toMoneyDisplay(item.price.small ? item.price.large : item.price)}</span>
            </Col>
          </Row>
        )
      });

      let itemPics = '';
      if (pictures[c]) {
        itemPics = pictures[c].map((pic, picIndex) => {
          let img = require(`../../img/${c}/${pic.path}`);
          return (
            <Col key={picIndex} sm='6'>
              <MenuItem name={pic.name} src={img} />
            </Col>
          )
        })
      }
      return (
        <div key={`category-${index}`} className='category-section'>
          <h2>{mainMenuCategories[c]}</h2>
          {itemsInCategory}
          <Container className='pic-container'>
            <Row>
              {itemPics}
            </Row>
          </Container>

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
      <Container className='menu-filter'>
        <Row>
          {filterItems}
        </Row>
      </Container>
      <Container className='menu-section'>
        {items}
      </Container>
    </section>
  )
}

export default Menu;