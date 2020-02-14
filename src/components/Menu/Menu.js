
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

import { toTitleCase } from '../../lib/util/displayUtils';
import FilterItem from './FilterItem/FilterItem';
import MainMenu from './MainMenu/MainMenu';

import './Menu.scss';

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

  let menuContent;
  if (filter === 'all') {
    menuContent = <MainMenu />
  } else if (filter === 'lunch') {
    menuContent = <div>lunch not implemented</div>
  } else {
    menuContent = <div>dinner not implemented</div>
  }

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
      {menuContent}
    </section>
  )
}

export default Menu;