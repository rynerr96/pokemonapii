import React from 'react';

const PokemonsPaginatedButton = ({ numberPage, functionSet }) => {
  return (
    <div className='div__selectionPerPage'>
      <img className='div__img--selectionPerPage' src="/pokeball.png" alt="" />
      <div className='div__div--selectionPerPage'>
        <button className='div__div--buttonSelectionPerPage' onClick={() => functionSet(numberPage * 4)}>{numberPage * 4}</button>
        <button className='div__div--buttonSelectionPerPage' onClick={() => functionSet(numberPage * 6)}>{numberPage * 6}</button>
        <button className='div__div--buttonSelectionPerPage' onClick={() => functionSet(numberPage * 8)}>{numberPage * 8}</button>
        <button className='div__div--buttonSelectionPerPage' onClick={() => functionSet(numberPage * 10)}>{numberPage * 10}</button>
      </div>
    </div>
  );
};

export default PokemonsPaginatedButton;