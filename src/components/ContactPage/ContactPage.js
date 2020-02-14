import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

import BigButton from '../BigButton/BigButton';
import Loader from '../Loader/Loader';

import './ContactPage.scss';

emailjs.init('user_w7OpR6cr0FxxoZtM2LAwi');

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  })

  const changeOption = e => {
    let value = e.target.value;
    if (value) {
      setForm({
        ...form,
        category: value
      });
    }
  }

  const handleInput = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  }

  const submitForm = () => {
    const templateId = 'template_S1KxlY52';
    setLoading(true);
    setSuccess(false);
    emailjs.send('gmail', templateId, {
      to_name: 'Bamboo Garden',
      from_name: form.name,
      from_email: form.email,
      category: form.category,
      from_phone: form.phone,
      message_html: form.message
    }).then(() => {
      setLoading(false);
      setSuccess(true);
      clearFields();
    }).catch(err => {
      setLoading(false);
      setError('Oh well, you failed. Here some thoughts on the error that occured:', err);
    });
  }

  const clearFields = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    });
  }

  const buttonIsDisabled = () => {
    return !form.name || !form.email || !form.category || !form.message;
  }

  let content = loading ? <Loader number={5} /> : <BigButton isDisabled={buttonIsDisabled()} text='Send Message' onClick={submitForm} />;
  return (
    <section className='contact-page'>
      <Container>
        <Row className='heading'>
          <Col lg='12' className='text-center'>
            <h1 className='section-heading text-uppercase'>Contact Us</h1>
            <p className='section-subheading'>Questions about food? Reservations? Anything? Send us a message!</p>
            <Alert className={success ? '' : 'd-none'} variant={'success'}>
              Email successfully sent!
            </Alert>
            <Alert className={error ? '' : 'd-none'} variant={'danger'}>
              {error}
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col lg='12'>
            <Form id='contactForm'>
              <Row>
                <Col md='6'>
                  <Form.Group>
                    <Form.Control value={form.name} type='name' placeholder='Name *' id='name' onChange={handleInput} />
                    <p className='help-block text-danger'></p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control value={form.email} type='email' placeholder='Email *' id='email' onChange={handleInput} />
                    <p className='help-block text-danger'></p>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control value={form.phone} type='tel' placeholder='Phone Number (optional)' id='phone' onChange={handleInput} />
                    <p className='help-block text-danger'></p>
                  </Form.Group>
                </Col>
                <Col md='6'>
                  <Form.Group>
                    <Form.Control value={form.category} as='select' onChange={changeOption}>
                      <option disabled={form.category !== ''} value=''>Choose a category *</option>
                      <option value='food'>Food</option>
                      <option value='reservation'>Reservation</option>
                      <option value='other'>Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control value={form.message} as='textarea' rows='3' placeholder='Message *' id='message' onChange={handleInput} />
                    <p className='help-block text-danger'></p>
                  </Form.Group>
                </Col>
                <div className='clearfix'></div>
                <div className='col-lg-12 text-center button-area'>
                  <div id='success'></div>
                  {content}
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactPage;