import React from 'react';

import './FilterItem.scss';

const FilterItem = props => {

  const handleClick = e => {
    props.onClick(e.target.id);
  }

  let className = 'filter-item';
  if (props.active) {
    className += ' active';
  }

  return <div id={props.id} className={className} onClick={handleClick} >
    {props.text}
  </div>;
}

export default FilterItem;