import Card from 'react-bootstrap/Card';
import React from 'react';

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
    content = (
      <>
        <Card.Header>{props.data.id}</Card.Header>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Img src={props.src} />
          <Card.Text>
            {props.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>{props.name}</Card.Footer>
      </>
    )
  }
  return (
    <div className='menu-item'>
      <Card className='box-shadow'>
        {content}
      </Card>
    </div>
  )
}

export default MenuItem;