import React from 'react';
import './Integration.css';
import logo from '../../img/logo.png';
import langause from '../../img/langauge.png';
import join from '../../img/join.png';
import chat from '../../img/chat.png';
import github from '../../img/github.png';

const Integration = () => {
  const integarationArr = [
    {
      img: join,
      name: 'Join our Discord',
      details:
        'Our Team is always active on our Slack Channel. Ask your Questions, Join the discussions and much more'
    },
    {
      img: chat,
      name: 'Instant Chat',
      details:
        'If you have any further queries aobut our platform, please leave a message at the messanger (bottom right)'
    },
    {
      img: github,
      name: 'Github Access',
      details:
        'We share Projects, Codes & Documentation for Apito Projects at our Github Account. Do check it out.'
    }
  ];
  return (
    <div>
      <div className='section__text'>Easy integration</div>
      <div className='section__heading'>
        Meet Integrate Your API with Variety of Languages & Frameworks
      </div>
      <div className='container'>
        <div className='integra__center'>
          <div className='langause__img'>
            <img src={langause} alt='' />
          </div>
          <div className='container'>
            {integarationArr.map((e, indx) => {
              return (
                <div className='work' key={indx}>
                  <img src={e.img} alt='' />
                  <div className='name'>{e.name}</div>
                  <div className='details'>{e.details}</div>
                </div>
              );
            })}
          </div>
          <div className='bar'></div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
