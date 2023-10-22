import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { MdWhatsapp } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7d54m4d', 'template_xxh7s2l', form.current, '94eXZ-dAtv65TiCy_')
      .then((result) => {
        console.log(result.text);
        // Clear the input fields after sending the message
        nameInput.current.value = '';
        emailInput.current.value = '';
        messageInput.current.value = '';
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>manushiez@gmail.com</h5>
            <a href="mailto:manushiez@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9311479598</h5>
            <a href="https://api.whatsapp.com/send?+919311479598" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            ref={nameInput}
            className='text'
            type="text"
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            ref={emailInput}
            className='text'
            type="email"
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            ref={messageInput}
            className='text'
            name="message"
            cols="30"
            rows="7"
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
