
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

import { toTitleCase } from '../../lib/util/displayUtils';
import FilterItem from './FilterItem/FilterItem';
import Menu from './Menu/Menu';
import Lunch from './Lunch/Lunch';

import './MenuPage.scss';
import menu from '../../resources/menu.json';

const MenuPage = () => {
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

  let menuContent;
  if (filter === 'all') {
    menuContent = <Menu menu={menu} type='all' />
  } else if (filter === 'lunch') {
    menuContent = <Lunch />
  } else {
    menuContent = <div>dinner not implemented</div>
  }

  return (
    <section className='menu-page'>
      <header className='menu-header'>
        <h1>Menu</h1>
        <p>See what delicious meals we have to offer!</p>
      </header>
      <Container className='menu-filter'>
        <Row>
          {filterItems}
        </Row>
      </Container>
      {menuContent}
    </section>
  )
}

export default MenuPage;