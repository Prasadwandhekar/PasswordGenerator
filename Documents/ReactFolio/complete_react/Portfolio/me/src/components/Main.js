import React from 'react';
import "./Main.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Main = () => {
  const resumePdfLink = './images/prasadresume.png'; // Replace with the actual path to your PDF

  return (
    <div className='main'>
      <div className='container'>
        <div className='content'>
          <div className='text'>
            <h4>Hello Everyone</h4>
            <h2 className='names'>I am a Web Developer</h2>

            <div className='icons'>
              <a href='https://www.instagram.com/prasad.wandhekar/?next=%2F' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='icon' />
              </a>
              <a href='https://www.linkedin.com/in/prasad-wandhekar-092b0b201' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='icon' />
              </a>
              <a href='https://github.com/Prasadwandhekar' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='icon' />
              </a>
              <a href='https://wa.me/9579394354' target='_blank' rel='noopener noreferrer'>
                <IoLogoWhatsapp className='icon' />
              </a>
            </div>

            <div className='btns'>
              <a href='mailto:prasadwandhekar25@gmail.com'>
                <button className='btn'>Hire Me</button>
              </a>
              <a href={resumePdfLink} target='_blank' rel='noopener noreferrer'>
                <button className='btn'>My Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className='photo'>
          <img src='./images/hero.png' width={250} height={250} className='imgsh' alt='images' />
        </div>
      </div>
    </div>
  );
};

export default Main;
