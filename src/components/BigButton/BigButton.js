import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';

import './BigButton.scss';

const BigButton = props => {
  let disabledClass = props.isDisabled ? 'disabled' : 'btn-primary';
  let button = (
    <Button disabled={props.isDisabled} className={`btn ${disabledClass}`} onClick={props.onClick}>
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