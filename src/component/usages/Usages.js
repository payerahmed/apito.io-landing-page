import React from 'react';
import './Usages.css';
import product from '../../img/product.png';
import developers from '../../img/developers.png';
import startup from '../../img/startup.png';
const Usages = () => {
  const usagesArr = [
    {
      img: startup,
      name: 'Startup Founders',
      position: 'Created by founders, for founders',
      detailes:
        ' Apito lets entrepreneurs focus on their go-to-market strategy and Bring ideas to market faster and with more control.'
    },
    {
      img: product,
      name: 'Product Leaders ',
      position: 'Dream it, build it',
      detailes:
        ' Create new services, capture new markets with a ready-to-go foundation for digital transformation'
    },
    {
      img: developers,
      name: 'Architects & Developers ',
      position: 'Built for developers, by developers',
      detailes:
        ' Build app for desktop, mobile and web applications faster using apito forget about backend administration & devOps.'
    }
  ];
  return (      
    <div>
      <div className='section__text'>USAGES</div>
      <div className='section__heading'>Who usages Apito ?</div>
      <div className='container'>
        <div className='usages__center'>
          <div className='usages__cards'>
            {usagesArr.map((e, indx) => {
              return (
                <div className='usages__card' key = {indx}>
                  <img src={e.img} alt='' />
                  <div className='name'>{e.name}</div>
                  <div className='position'>{e.position}</div>
                  <div className='detailes'>{e.detailes}</div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usages;
