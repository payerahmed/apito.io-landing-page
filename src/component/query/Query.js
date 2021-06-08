import React from 'react';
import './Query.css';
import queryImg from '../../img/code.png';
const Query = () => {
  return (
    <div>
      <div className='section__text'>QUERY Patterns</div>
      <div className='section__heading'>
        Perform Complex Queries and Write Custom Functions
      </div>
      <div className='perfom__container'>
        <div className='flex'>
          <div className='perfom__container--left'>
            <div className='left__text'>
              <span>Wildcard Search on All Records</span>
            </div>
            <div className='left__text'>
              <span>Filtering and Sorting</span>
            </div>
            <div className='left__text'>
              <span>Filtering and Sorting</span>
            </div>
            <div className='left__text'>
              <span>Complex Nested Filtering</span>
            </div>
            <div className='left__text'>
              <span>Geo Location Search</span>
            </div>
            <div className='left__text'>
              <span>Custom Functions</span>
            </div>
            <div className='left__text'>
              <span>Records with Pagination</span>
            </div>
            <div className='left__text'>
              <span>Login or Signup</span>
            </div>
          </div>
          <div className='perfom__container--right'>
            <img src={queryImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
