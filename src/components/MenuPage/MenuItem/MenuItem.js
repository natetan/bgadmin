import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { toMoneyDisplay } from '../../../lib/util/displayUtils';

import './MenuItem.scss';

const MenuItem = props => {
  let content;
  if (props.src) {
    content = (
      <Card.Body>
        <Card.Img src={props.src} />
        <Card.Text>
          {props.name}
        </Card.Text>
      </Card.Body>
    );
  } else {
    let items = props.data.items.map((item, index) => {
      return <Row key={`combo-item-${index}`}>
        <Col md='12'>
          <Card.Text>{item}</Card.Text>
        </Col>
      </Row>
    });
    content = (
      <>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Body>
          {/* <Card.Title>{props.data.name}</Card.Title> */}
          {items}
        </Card.Body>
        <Card.Footer className='text-muted'>{toMoneyDisplay(props.data.price)}</Card.Footer>
      </>
    )
  }
  return (
    <div className='menu-item'>
      <Card className='box-shadow combo'>
        {content}
      </Card>
    </div>
  )
}

export default MenuItem;