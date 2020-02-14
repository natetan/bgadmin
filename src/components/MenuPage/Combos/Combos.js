import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import MenuItem from '../MenuItem/MenuItem';

import './Combos.scss';

const Combos = props => {
  let foodCombos = props.data.map((c, i) => {
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
  });

  return (
    <Container className='combo-section'>
      <h1>Combos</h1>
      <Row>
        {foodCombos}
      </Row>
    </Container>
  )
}

export default Combos;