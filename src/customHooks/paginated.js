import { useState } from "react";
function paginated (pokemons){
  
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10);
  const [page, setPage] = useState(1)
  let lastIndex = page * pokemonsPerPage;
  let firstIndex = lastIndex - pokemonsPerPage
  const pokemonsPaginated = pokemons?.slice(firstIndex, lastIndex);

   //Max Page
   const totalPages = Math.ceil(pokemons?.length / pokemonsPerPage);
   //Number of Pages
   let pagesNumbers = []
   for (let i = 1; i <= totalPages; i++) {
     pagesNumbers.push(i)
   };

  return{
    //function Number Page
    page,
    setPage,
    //array slice
    pokemonsPaginated,
    //totalPages
    totalPages,
    //Numbers of Pages
    pagesNumbers,
    //PokemonsPerPage
    setPokemonsPerPage

   
  }
}

export default paginated;