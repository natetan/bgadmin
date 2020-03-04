import React from 'react';

import './Thanksgiving.scss';
import thanksgiving from '../../../resources/thanksgiving.json';
import MenuItem from '../MenuItem/MenuItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Thanksgiving = props => {
  let data = {
    name: thanksgiving.name,
    items: thanksgiving.items,
    price: thanksgiving.price
  };
  let thanksgivingItem = <MenuItem data={data} />
  if (!props.show) {
    return '';
  }
  return (
    <section className='thanksgiving'>
      <header className='thanksgiving-header'>
        <h1>Thanksgiving Dinner</h1>
        <p>Enjoy our annual Turkey Dinner! <span>Only on Thanksgiving!</span></p>
        <Container className='thanksgiving-container'>
          <Row>
            <Col md='12'>
              {thanksgivingItem}
            </Col>
          </Row>
        </Container>
      </header>
    </section>
  )
}

export default Thanksgiving;