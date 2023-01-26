import '../styles/Pokedex.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Pokemons from '../components/Pokemons';
import PokemonCard from '../components/PokemonCard';
import Search from '../components/Search';
import upperCase from '../customHooks/upperCase';

const Pokedex = () => {


  //Nav section//
  const nav = <Nav />
  const nameInput = useSelector(state => state.userName);
  const { upperCaseString: name } = upperCase(nameInput)

  // Types
  const pokemons = <Pokemons />

  //Search section//
  const [namePokemon, setNamePokemon] = useState('pikachu');
  const [isSearch, setIsSearch] = useState(false);

  const setCatch = (e) => {
    if (e.length === 0) {
      setNamePokemon('pikachu') //por defecto siempre pikachu carga
      setIsSearch(false)
    } else {
      setNamePokemon(e);
      setIsSearch(true)
    }
  };

  const setCatchInput = (e) => {
    if (e.length === 0) {
      setIsSearch(false)
    }
  }
  const search = <Search
    textPlaceHolder={'Ingrese el nombre de un Pokemon'}
    textButton={'Buscar'}
    setCatch={setCatch}
    setCatchInput={setCatchInput}
  />

  const pokemonCardSearch = <PokemonCard
    url={`https://pokeapi.co/api/v2/pokemon/${namePokemon.toLocaleLowerCase().trim()}/`}
  />

  return (
    <section className='Pokedex'>

      <article className='section__article--headerPokedex'>
        <img className='section__article--imgPokedex' src="/pokedex-3d-logo (1).png" alt="" />
        <div className='section__article--circlePokedex'>{nav}</div>
      </article>

      <div className='section__div'>

        <article className='section__article--NavPokedex'>
          <h2 className='section__article--h2Pokedex'><span className='section__article--h2SpanPokedex'>Bienvenido {`${name}`}</span>, aquí puedes encontrar tu pokemon favorito </h2>

        </article>

        <article className='section__article--bodyPokedex'>
          {search}
          {isSearch === false
            ?
            <article className='article__article--cardsPokedex' >
              {/* types */}
              {pokemons}
            </article>
            :
            <article className='article__article--cardsPokedex'>
              {/* search */}
              <div className='article__div--cardsPokedex'>
                {pokemonCardSearch}
              </div>

            </article>
          }
        </article>
      </div>

    </section>


  );
};

export default Pokedex;