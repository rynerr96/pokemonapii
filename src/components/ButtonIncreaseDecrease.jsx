import React, { useState } from 'react';
import PokemonsPaginatedButton from './PokemonsPaginatedButton';

const ButtonIncrementDecrease = ({ setPage, textPrev, textNext, totalPages, pagesNumbers, setPokemonsPerPage }) => {

  const [numberPage, setNumberPage] = useState(1);

  // Function Decrease
  const functionPagesPrev = () => {
    setNumberPage(numberPage - 1);
    setPage(numberPage - 1);
  }

  // Function Increse
  const functionPagesNext = () => {
    setNumberPage(numberPage + 1);
    setPage(numberPage + 1);
  }

  // Functipon Goes to the page number
  const pagesOfNumber = (number) => {
    setNumberPage(number);
    setPage(number);
  }

  const pokemonsPaginatedButton = <PokemonsPaginatedButton
    numberPage={2}
    functionSet={setPokemonsPerPage}
  />

  return (
    <div className='div--paginated'>
      <div className='div__div--paginated'>
        {/* Decrease */}
        <button
        className='div__div--buttonPaginated'
          onClick={() => (functionPagesPrev())}
          disabled={numberPage === 1}
        >
          {textPrev}
        </button>

        {/* Increse */}
        <button
         className='div__div--buttonPaginated'
          onClick={() => (functionPagesNext())}
          disabled={totalPages === numberPage}
        >
          {textNext}
        </button>
      </div>
      {/* Goes to the page number */}
      <div  className='div__div--paginatedNumbers'>
        {pagesNumbers?.map((number, index) =>
        <button 
        className='div__div--buttonNumber'
        onClick={() => pagesOfNumber(number)} key={index}>
          {number}
        </button>)}
      </div>


      {/* PokemonsPerPage */}
      {pokemonsPaginatedButton}

    </div>

  );
};

export default ButtonIncrementDecrease;