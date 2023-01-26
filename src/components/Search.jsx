import React from 'react';

const Search = ({textPlaceHolder,textButton,setCatch,setCatchInput}) => {

  const functionSubmit = (e)=>{
    e.preventDefault();
    setCatch(e.target[0].value.trim())
  }

  return (
    <form className='form' onSubmit={(e)=>functionSubmit(e)}>
      <input className='form__input' type="text" onChange={(e)=>setCatchInput(e.target.value)} placeholder={textPlaceHolder}  />
      <button className='form__button' type='submit'>{textButton} </button>
    </form>
  );
};

export default Search;