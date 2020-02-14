import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import Menu from '../Menu/Menu';
import MenuItem from '../MenuItem/MenuItem';

import './Lunch.scss';
import combos from '../../../resources/combos.json';
import lunch from '../../../resources/lunch.json';

const Lunch = () => {
  let lunchCombos = combos.lunch.map((c, i) => {
    let data = {
      name: c.name, 
      items: c.items,
      price: c.price
    };
    return (
      <Col key={i} md='6' lg='4'>
        <MenuItem data={data} />
      </Col>
    )
  })
  return (
    <div className='lunch'>
      <Container>
        <h1>Combos</h1>
        <Row>
          {lunchCombos}
        </Row>
      </Container>
      <Menu menu={lunch} type='lunch' />
    </div>
    
  );
}

export default Lunch;