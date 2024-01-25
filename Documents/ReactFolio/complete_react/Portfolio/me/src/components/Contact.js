import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';
import Toast from "react-hot-toast"

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your own Email.js service ID, template ID, and user ID
    const serviceID = 'service_uie741w';
    const templateID = 'template_e7xcj48';
    const userID = 'p-OwjLfxcyzTXi6id';

    // Use the 'sendForm' function from emailjs library
    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then((result) => {
        console.log('Email sent successfully:', result);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    const handler = () =>{
      Toast.success("Submited Successfully")
    }

  return (
    <form className='contact' ref={formRef} onSubmit={handleSubmit}>
      <div className='inputs'>
        <h1>Contact Me</h1>
        <input type='text' name='name' placeholder='Name' />
        <input type='number' name='mobile' placeholder='Mobile number' />
        <input type='email' name='email' placeholder='Email' />
        <textarea name='message' placeholder='Type a message' className='message' />

        <button type='submit' className='btn' onClick={handler}>
          Submit
              
        </button>
      </div>
      <Link to='/' onClick={scrollToTop}>
        <FaRegArrowAltCircleUp className='arrow' />
      </Link>
    </form>
  );
};

export default Contact;
