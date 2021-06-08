import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png';
import brand from '../../img/apito.io.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='logo__brand'>
          <div className='img'>
            <img src={logo} alt='' />
          </div>
          <img className='brand_img' src={brand} alt='' />
        </div>
      </div>
      <div className='fotter__items'>
        <div className='footer__item'>Home</div>
        <div className='footer__item'>Documentation</div>
        <div className='footer__item'>Projects</div>
        <div className='footer__item'>Pricing</div>
        <div className='footer__item'>FAQ</div>
      </div>
      <div className='copuright'>
        Copyright 2020 By Apito LLC | Privacy Policy | User Agreement{' '}
      </div>
    </div>
  );
};

export default Footer;
