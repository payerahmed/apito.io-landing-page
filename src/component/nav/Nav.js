import React from 'react';
import logo from '../../img/logo.png';
import brandImg from '../../img/apito.io.png';
import './Nav.css';
const Nav = () => {
  return (
    <div className='nav_container'>
      <div className='logo__brand'>
        <div className='img'>
          <img src={logo} alt='' />
        </div>
        <img className='brand_img' src={brandImg} alt='' />
      </div>
      <div className='nav__items'>
        <div className='nav__item'>Home</div>
        <div className='nav__item'>Documentation</div>
        <div className='nav__item'>Projects</div>
        <div className='nav__item'>Pricing</div>
        <div className='nav__item'>FAQ</div>
      </div>
      <div className="nav__btn-container">
      <button className="login">Log In</button>
      <button className='signup'> Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
