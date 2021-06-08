import React, { useEffect, useState } from 'react';
import star from '../../img/star.png';
import cone from '../../img/cone.png';
import ctwo from '../../img/ctwo.png';
import cthree from '../../img/cthree.png';
import cfour from '../../img/cfour.png';
import arrowleft from '../../img/arrwleft.png';
import arrwright from '../../img/arrwright.png';

import './Client.css';
var clientArr = [
  {
    star: star,
    isActive: true,
    position: 'Modern look & trending design',
    detailes:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    clientImg: cone,
    clientName: 'Denny Hilguston',
    clientEmail: '@denny.hil'
  },
  {
    star: star,
    isActive: false,
    position: 'Design Quality & performance',
    detailes:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    clientImg: ctwo,
    clientName: 'Denny Hilguston',
    clientEmail: '@denny.hil'
  },
  {
    star: star,
    isActive: false,
    position: 'Layout and organized layers',
    detailes:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    clientImg: cthree,
    clientName: 'Denny Hilguston',
    clientEmail: '@denny.hil'
  },
  {
    star: star,
    isActive: false,
    position: 'Modern look & trending design',
    detailes:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    clientImg: cfour,
    clientName: 'Denny Hilguston',
    clientEmail: '@denny.hil'
  },
  {
    isActive: false,
    star: star,
    position: 'Modern look & trending design',
    detailes:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    clientImg: cfour,
    clientName: 'Denny Hilguston',
    clientEmail: '@denny.hil'
  }
];
const Client = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(clientArr);
  }, []);

  const cardHover = (e) => () => {
    var clientArrcopy = arr.slice();
    clientArrcopy.map((e, i) => {
      if (e.isActive) {
        clientArrcopy.splice(i, 1, { ...e, isActive: false });
      }
    });
    var activeCard = clientArr[e];
    clientArrcopy.splice(e, 1, { ...activeCard, isActive: true });
    setArr(clientArrcopy);
  };

  return (
    <div>
      <div className='section__text'>Testimonial</div>
      <div className='section__heading'>Meet Client Satisfaction</div>
      <div className='client__card--container'>
        <div className='client__cards'>
          {arr.map((e, indx) => {
            return (
              <div
                className={
                  e.isActive
                    ? 'client__card client__card--active'
                    : 'client__card'
                }
                onMouseOver={cardHover(indx)}
              >
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
