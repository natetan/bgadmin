import { faPepperHot, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { mainMenuCategories, pictures } from '../../../lib/constants';
import { toMoneyDisplay } from '../../../lib/util/displayUtils';
import Icon from '../../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';

import './Menu.scss';

const Menu = props => {
  let categories = {};
  props.menu.forEach(i => {
    let cat = i.category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(i);
  });

  const getItems = () => {
    let items = Object.keys(categories).map((c, index) => {
      let itemsInCategory = categories[c].map(item => {
        return (
          <Row key={`item-${item.id}`} className='menu-items'>
            <Col className='item item-id' xs='1' sm='1' md='1' lg='1'>
              <span>{`${item.id}. `}</span>
            </Col>
            <Col className='item item-name' xs='9' sm='10' md='10' lg='10'>
              <span>
                {item.vegan && <Icon icon={faSeedling} size='sm' color='#528026' />}
                {item.spicy && <Icon icon={faPepperHot} size='sm' color='red' />}
                {item.name}
              </span>
            </Col>
            <Col className='item item-price' xs='1' sm='1' md='1' lg='1'>
              <span>{toMoneyDisplay(item.price.small ? item.price.large : item.price)}</span>
            </Col>
          </Row>
        )
      });

      let itemPics = '';
      if (pictures[props.type] && pictures[props.type][c]) {
        itemPics = pictures[props.type][c].map((pic, picIndex) => {
          let img = require(`../../../img/${c}/${pic.path}`);
          return (
            <Col key={picIndex} sm='6'>
              <MenuItem name={pic.name} src={img} />
            </Col>
          )
        })
      }
      return (
        <div key={`category-${index}`} className='category-section'>
          <h2>{categories[c][0].categoryDisplay}</h2>
          {itemsInCategory}
          <Container className='pic-container'>
            <Row>
              {itemPics}
            </Row>
          </Container>

        </div>
      )
    });
    return items;
  }
  let items = getItems();

  return (
    <Container className='menu-section'>
      {items}
    </Container>
  )
}

export default Menu;