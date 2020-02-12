import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faEnvelopeOpen, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Icon from '../Icon/Icon';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='contact-section'>
      <section id='contact' className='bg-black'>
        <div className='container'>
          <Row>
            <Col md={4} className='mb-3 mb-md-0'>
              <Card className='py-4 h-100'>
                <Card.Body className='text-center'>
                  <Icon icon={faMapMarkedAlt} color='#528026' />
                  <h4 className='m-0'>Address</h4>
                  <hr className='my-4' />
                  <div className='small text-black-50'>364 Roy Street</div>
                  <div className='small text-black-50'>Seattle, WA 98108</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className='mb-3 mb-md-0'>
              <Card className='py-4 h-100'>
                <Card.Body className='text-center'>
                  <Icon icon={faEnvelopeOpen} color='#528026' />
                  <h4 className='m-0'>Email</h4>
                  <hr className='my-4' />
                  <div className='small text-black-50'>bamboogardenseattle@gmail.com</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className='mb-3 mb-md-0'>
              <Card className='py-4 h-100'>
                <Card.Body className='text-center'>
                  <Icon icon={faMobileAlt} color='#528026' />
                  <h4 className='m-0'>Phone</h4>
                  <hr className='my-4' />
                  <div className='small text-black-50'>+1 (206) 282-6616</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <footer className='bg-black small text-center text-white-50'>
        <Container>
          &copy; Bamboo Garden {new Date().getFullYear()}. All Rights Reserved
        </Container>
      </footer>
    </div>
  )
}

export default Footer;