import '../styles/Home.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setVerificationName } from '../store/slices/nameVerification.Slice';

const Home = () => {

 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setVerificationName(e.target[0].value));
    navigate('/Pokedex')
  }

  return (
    <section className='section'>

      <article  className='section__article'>
        <img  className='section__article--img' src="/pokedex-3d-logo (1).png" alt="pokedex" />
        <h1 className='section__article--h1'>¡Hola entrenador!</h1>
        <h2 className='section__article--h2'>Para poder comenzar, dame tu nombre</h2>
      </article>

      <article className='section__article--input'>
        <form className='article--form' action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            className='article--form--input'
            type="text"
            placeholder='Ingrese su Nombre'
          />
          <button className='article--form--button' type='submit'>Comenzar</button>
        </form>
      </article>
      <div className='section--circle'></div>

    </section>
  );
};

export default Home;