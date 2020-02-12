import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import React from 'react';

import './Navigation.scss';
import Logo from '../../img/bg-logo.png';

import {faHome} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon/Icon';

const Navigation = props => {

  let navs = [
    {
      to: 'menu',
      name: 'Menu'
    },
    {
      to: 'contact',
      name: 'Contact'
    }
  ];
  let navElements = navs.map((n, i) => {
    return (
    <Nav.Link>{n.name}</Nav.Link>
    )
  })
  return (
    <NavBar id='main-nav' expand='lg' bg='dark' variant='dark' fixed='top'>
      <div className="container">
        <NavBar.Brand className="js-scroll-trigger" href='#'>
          {/* <img src={Logo} width='50' height='50' alt='logo' /> */}
          <Icon icon={faHome} />
        </NavBar.Brand>
        <NavBar.Toggle />
        <NavBar.Collapse id="basic-NavBar-nav">
          <Nav className="ml-auto">
            {navElements}
          </Nav>
        </NavBar.Collapse>
      </div>
    </NavBar>
  )
}

export default Navigation;