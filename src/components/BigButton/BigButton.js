import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';

import './BigButton.scss';

const BigButton = props => {
  let button = (
    <Button className='btn btn-primary' onClick={props.onClick}>
      {props.text}
    </Button>
  )
  if (props.to) {
    return (
      <LinkContainer to='/menu'>
        {button}
      </LinkContainer>
    );
  }
  return button;

}

export default BigButton;