import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../../../img/bg-front.jpg';
import './About.scss';

const About = () => {
  return (
    <section id='about' className='about-page'>
      <h1 className='mb-4'>Vegetarian Cuisine</h1>
      <p className='blurb'>
        Bamboo Garden is a Chinese <b>vegetarian</b> restaurant located in Lower Queen Anne in Seattle. It offers a variety of dishes as well as vegan options.
      </p>
      <Container>
        <Row>
          <Col lg={6} className='mx-auto'>
            <p className='desc'>
              In the tradition of Chinese vegetarian cuisine, we are pleased to offer tantalizing dishes whose origins go back thousands of years to China's early imperial dynasties. Before making his annual prayer for the kingdom's prosperity, the emperor was required to practice strict vegetarianism for seven weeks. The royal court's skilled chef created extraordinary vegetarian recipes, with the appearance, texture, and taste of the emperor's favorite meat, poultry, and seafood dishes.
            </p>
            <p className='desc'>
              We are pleased to offer you the same skilled techniques, exotic seasoning, and ingredients enjoyed by Chinese royalty. The Bamboo Garden shares the tradition of healthful delicacies with the finest and freshest ingredients. Our staff has recreated the authentic recipes and tastes that were once served exclusively at the royal court. It is our pleasure to serve you and we hope you enjoy your dining experience.
            </p>
          </Col>
          <Col lg={5}>
            <img className='bg-photo' src={bg} alt='Front of restaurant' />
            <div className='hours'>
              <h3>Opening Hours</h3>
              <p>Tuesday to Sunday 12:00 PM - 7:45 PM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;