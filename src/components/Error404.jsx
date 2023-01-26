import React from 'react';

const Error404 = () => {
  return (
    <div className='div--isError'>
      <div className='div__div--isError'>
        <h2 className='div__div--h2IsError'>4</h2>
        <img className='div__div--imgIsError' src="pokeball.png" alt="pokeball" />
        <h2 className='div__div--h2IsError'>4</h2>
      </div>
      <h2 className='div__h2--isError'>Ups, no se han encontrado resultados...</h2>
    </div>
  );
};

export default Error404;