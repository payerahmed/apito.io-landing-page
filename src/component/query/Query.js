import React, { useEffect, useState } from 'react';
import './Query.css';
import queryImg from '../../img/code.png';
var quaryArr = [
  { isActive: true, name: 'Wildcard Search on All Records' },
  { isActive: false, name: 'Filtering and Sorting' },
  { isActive: false, name: 'Filtering and Sorting' },
  { isActive: false, name: 'Complex Nested Filtering' },
  { isActive: false, name: 'Geo Location Search' },
  { isActive: false, name: 'Custom Functions' },
  { isActive: false, name: 'Records with Pagination' },
  { isActive: false, name: 'Login or Signup' }
];
const Query = () => {
const [arr, setArr] = useState([])

useEffect(()=> {
  setArr(quaryArr)
}, [])
  const over = e => () => {
    var quaryArrCopy = arr.slice()
    quaryArrCopy.map((e,i) => {
      if(e.isActive) {
        quaryArrCopy.splice(i, 1, {...e, isActive: false})
      }
    })
    var target = quaryArr[e]
    quaryArrCopy.splice(e, 1,{...target, isActive: true})
    setArr(quaryArrCopy)
  }
  return (
    <div>
      <div className='section__text'>QUERY Patterns</div>
      <div className='section__heading'>
        Perform Complex Queries and Write Custom Functions
      </div>
      <div className='container'>
        <div className='flex'>
          <div className='perfom__container'>
            {arr.map((e, indx) => {
              return (
                <div className='perfom__container--left' key={indx}>
                  <div
                    className={
                      e.isActive
                        ? 'left__text left__text--active'
                        : 'left__text'
                    }
                    onMouseOver={over(indx)}
                  >
                    <div>{e.name}</div>
                  </div>
                </div>
              );
            })}
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
