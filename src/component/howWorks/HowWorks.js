import React from 'react';
import './HowWorks.css';
const HowWorks = () => {
  const worksArr = [
    {
      step: '01',
      name: 'Create Your Project',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      step: '02',
      name: 'Name Your Models & Feilds',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      step: '03',
      name: 'Your API is Ready for Connect',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    }
  ];

  return (
    <div>
      <div className='section__text works '>Whats the function</div>
      <div className='section__heading'>Let’s see how it works</div>
      <div className='works__contener'>
        <div className='work___container'>
          {worksArr.map((e) => {
            return (
              <div className='work__content'>
                <div className='count'>
                  <div className='step'>{e.step}</div>
                </div>
                <div className='workName'>{e.name}</div>
                <div className='text'>{e.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
