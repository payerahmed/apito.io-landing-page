import React from 'react';
import './Home.css'
import homeImg from '../../img/home.png'
const Home = () => {
  return (
    <div className='home__content'>
      <header className='home__heading'>
        The Simplified way of building your <span>API </span> on Cloud
      </header>
      <p className='home__text'>
        Build your API in the Cloud with The Most Powerful Headless CMS. Power
        your API with Authentication, Authorization, CDN, Webhooks, Custom
        Functions and much more..
      </p>
      <button className='home__btn'>Start your project now</button>
      <div className="home__img">
      <img src={homeImg} alt="" /></div>
    </div>
  );
};

export default Home;
