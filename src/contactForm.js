import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfawlmg', 'template_agz1eqh', form.current, 'user_2oOqWFN9c6PcG6ZsUnXOF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
  };


  return (
    
    
  );
}

export default Contact;
