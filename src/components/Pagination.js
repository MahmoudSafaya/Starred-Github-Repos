import React from 'react';
import { useGlobalContext } from './Context';

const Pagination = () => {
  const {page, setPage, setLoading} = useGlobalContext();
  let numbers = [];

  if(page === 1){
    numbers = [page, page + 1, page + 2];
  } else {
    numbers = [page - 1, page, page + 1]
  }

  return (
    <div>
      <ul>
          {
            <li 
            onClick={() => {
              if(page !== 1){
                setPage(page - 1);
                setLoading(true);
              }
            }}
            className={page === 1 ? 'not-allowed' : ''}
            >
              Prev
            </li>
          }
          {numbers.map(num => {
            return (
              <li 
              key={num}
              onClick={() => {setPage(num); setLoading(true)}}
              className={page === num ? 'active' : ''}>{num}</li>
            )
          })}
          {
            <li 
            onClick={() => {setPage(page + 1); setLoading(true)}}>
              Next
            </li>
          }
        </ul>
    </div>
  )
}

export default Pagination
