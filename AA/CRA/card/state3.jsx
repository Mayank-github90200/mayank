import React from 'react'
import { useState } from 'react';
const State3 = () => {
    const [total, setTotal] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
            setTotal(total + 1);
        }}
        >
            Bhadta Hua
        </button>
        <button
        onClick={() => {
            setTotal(total -1);
        }}
        >
            ghatta hua
        </button>

        
         MY FAVORITE COLOR IS RED!
          
        <h2>{total}</h2>
    </div>
  )
}

export default State3