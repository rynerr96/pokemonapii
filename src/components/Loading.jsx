import React from 'react';

const Loading = () => {
  return (
    <div className='div--isLoading'>
      <img className='div__img--isLoading' src="pokemon-pokeball.gif" alt="pokemon-pokebeball" />
      <h2 className='div__h2--isLoading'>Loading...</h2>
    </div>
  );
};

export default Loading;