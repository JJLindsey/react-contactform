import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import{ init } from '@emailjs/browser';
import {Container, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'
init("user_2oOqWFN9c6PcG6ZsUnXOF");

  // const validEmail = email => {
    //     const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // }

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfawlmg', 'template_zz92e4f', e.target, 'user_2oOqWFN9c6PcG6ZsUnXOF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
  };


  return (
    <Container fluid>
      <Form className='form' onSubmit={sendEmail}>
      <h1>Contact Form</h1>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Name"/>
        {/* <input type='text' name='user_name'/> */}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="name@example.com" />
        {/* <label>Email</label>
        <input type="email" name="user_email" /> */}
        <Form.Label>Message</Form.Label>
        {/* <label>Message</label> */}
        <Form.Control name="message" as="textarea" rows={4} />
        <Button type='submit' value='Send' variant='warning'>Send</Button>
      </Form>
    </Container>
  );
}

export default Contact;
