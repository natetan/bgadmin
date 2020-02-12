import { faHome } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import React from 'react';

import Icon from '../Icon/Icon';

import './Navigation.scss';
import Logo from '../../img/bg-logo.png';

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
      <LinkContainer to={n.to} key={i}>
        <Nav.Link>{n.name}</Nav.Link>
      </LinkContainer>
    )
  })
  return (
    <NavBar id='main-nav' expand='lg' bg='dark' variant='dark' fixed='top'>
      <Container>
        <LinkContainer to='/'>
          <NavBar.Brand href='#'>
            {/* <img src={Logo} width='50' height='50' alt='logo' /> */}
            <Icon icon={faHome} />
          </NavBar.Brand>
        </LinkContainer>

        <NavBar.Toggle />
        <NavBar.Collapse id='basic-NavBar-nav'>
          <Nav className='ml-auto'>
            {navElements}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Navigation;