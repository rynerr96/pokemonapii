import React, { useState } from 'react';
import getDataApiDirect from '../customHooks/getDataApiDirect';
import paginated from '../customHooks/paginated';
import ButtonIncrementDecrease from './ButtonIncreaseDecrease';
import PokemonCard from './PokemonCard';
import Loading from './Loading';
import Error404 from './Error404';

const TypesPokemonsSelected = () => {

  const urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279';
  const [isBooleanAll, setIsBooleanAll] = useState(false);
  const urlTypes = 'https://pokeapi.co/api/v2/type';
  const [isBooleanType, setIsBooleanType] = useState(false);
  const [urlType, setUrlType] = useState('https://pokeapi.co/api/v2/type/1/');
  const [allPokemons, setAllPomons] = useState(true)

  const selectedtypes = (e) => {
    const url = e.target.value;
    if (url === urlAllPokemons) {
      setIsBooleanAll(!isBooleanAll)
      setAllPomons(true)
    } else {
      setIsBooleanType(!isBooleanType);
      setUrlType(url)
      setAllPomons(false)
    }
  }


  ////!Alls Pokemons////

  const { data } = getDataApiDirect(urlAllPokemons, isBooleanAll);


  const pokemonsAll = data?.results;

  // Paginated Prev & Next 
  const { setPage, pokemonsPaginated, totalPages, pagesNumbers, setPokemonsPerPage } = paginated(pokemonsAll);

  const buttonIncrementDecrease =
    <ButtonIncrementDecrease
      setPage={setPage}
      textPrev={<i className='bx bxs-skip-previous-circle' ></i>}
      textNext={<i className='bx bxs-skip-next-circle'></i>}
      totalPages={totalPages}
      pagesNumbers={pagesNumbers}
      setPokemonsPerPage={setPokemonsPerPage}
    />

  //Cards Alls Pokemons 
  const pokeomnCardAll = pokemonsPaginated?.map((obeject, index) => <PokemonCard
    key={index}
    url={obeject.url}
  />)

  ////!Types Pokemons////
  const { data: types } = getDataApiDirect(urlTypes, isBooleanType);

  const pokemonsTypes = types?.results;

  const typesPokemons = pokemonsTypes?.map((object, index) => {
    if(index<18){
      return<option
        key={index}
        id="select"
        value={`${object.url}`}
      >
        {object.name.toUpperCase()}
      </option>}
    })
  
  const { data: typesSelected } = getDataApiDirect(urlType, isBooleanType);

  const pokemonsTypesSelected = typesSelected?.pokemon;

  // Paginated Prev & Next 
  const { setPage: setPageType, pokemonsPaginated: pokemonsPaginatedType, totalPages: totalPagesTypes, pagesNumbers: PagesNumbresTypes, setPokemonsPerPage: setPokemonsPerPageType } = paginated(pokemonsTypesSelected);

  const buttonIncrementDecreaseType =
    <ButtonIncrementDecrease
      setPage={setPageType}
      textPrev={<i className='bx bxs-skip-previous-circle' ></i>}
      textNext={<i className='bx bxs-skip-next-circle'></i>}
      totalPages={totalPagesTypes}
      pagesNumbers={PagesNumbresTypes}
      setPokemonsPerPage={setPokemonsPerPageType}
    />

  const pokeomnCardType = pokemonsPaginatedType?.map((object, index) => <PokemonCard
    key={index}
    url={object?.pokemon?.url}
  />)

  const loading = <Loading />

  const error = <Error404 />



  return (


    <div className='div__pokemons'>
      <select className='div__select--pokemons'
        name=""
        id="select"
        onChange={selectedtypes}

      >
        {/* Alls Pokemons */}
        <option className='div__select--optionPokemons' id="select" value={`${urlAllPokemons}`}>ALL POKEMONS</option>

        {/* Types Pokemons */}
        {typesPokemons}
      </select>


      {
        allPokemons === true
          ?

          <div className='div--pokemonsStructure'>
            <div className='div__div--pokemons'>
              {pokeomnCardAll}
            </div>
            <div className='div__div--divPokemons'>
              {buttonIncrementDecrease}
            </div>
          </div>

          :
          <div>
            <div className='div__div--pokemons'>
              {pokeomnCardType}
            </div>
            <div className='div__div--divPokemons'>
              {buttonIncrementDecreaseType}
            </div>
          </div>

      }


    </div>



  );
};

export default TypesPokemonsSelected;