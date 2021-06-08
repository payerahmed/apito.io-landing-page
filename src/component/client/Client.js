import React from 'react';
import star from '../../img/star.png';
import cone from '../../img/cone.png';
import ctwo from '../../img/ctwo.png';
import cthree from '../../img/cthree.png';
import cfour from '../../img/cfour.png';
import arrowleft from '../../img/arrwleft.png';
import arrwright from '../../img/arrwright.png';

import './Client.css';

const Client = () => {
  const clientArr = [
    {
      star: star,
      position: 'Modern look & trending design',
      detailes:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      clientImg: cone,
      clientName: 'Denny Hilguston',
      clientEmail: '@denny.hil'
    },
    {
      star: star,
      position: 'Design Quality & performance',
      detailes:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      clientImg: ctwo,
      clientName: 'Denny Hilguston',
      clientEmail: '@denny.hil'
    },
    {
      star: star,
      position: 'Layout and organized layers',
      detailes:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      clientImg: cthree,
      clientName: 'Denny Hilguston',
      clientEmail: '@denny.hil'
    },
    {
      star: star,
      position: 'Modern look & trending design',
      detailes:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      clientImg: cfour,
      clientName: 'Denny Hilguston',
      clientEmail: '@denny.hil'
    },
    {
      star: star,
      position: 'Modern look & trending design',
      detailes:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      clientImg: cfour,
      clientName: 'Denny Hilguston',
      clientEmail: '@denny.hil'
    }
  ];

  return (
    <div>
      <div className='section__text'>Testimonial</div>
      <div className='section__heading'>Meet Client Satisfaction</div>
      <div className='client__card--container'>
        <div className='client__cards'>
          {clientArr.map((e, indx) => {
            return (
              <div className='client__card'>
                <img src={e.star} alt='' />
                <div className='position'>{e.position}</div>
                <div className='detailes'>{e.detailes}</div>
                <div className='client__profile'>
                  <img className='client__img' src={e.clientImg} alt='' />
                  <div className='card__profile--info'>
                    <div className='clientName'>{e.clientName}</div>
                    <div className='clientEmail'>{e.clientEmail}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='arrIcons'>
          <img src={arrowleft} alt='' className='arrow__left' />
          <img src={arrwright} alt='' className='arrow__left' />
        </div>
      </div>
    </div>
  );
};

export default Client;
