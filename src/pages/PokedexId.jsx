import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import upperCase from '../customHooks/upperCase';
import getDataApi from '../customHooks/getDataApi';
import '../styles/PokedexId.css'
import Nav from '../components/Nav';
import Loading from '../components/Loading'
import Error404 from '../components/Error404'

const PokedexId = () => {

  //Nav section//
  const nav = <Nav />

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const { id } = useParams();
  const navigate = useNavigate();
  const navigatePokedex = () => { navigate(-1) };

  const { data, isLoading, isError } = getDataApi(`${url + id}`)

  const { upperCaseString: name } = upperCase(data?.name)

  const { loading } = <Loading />
  const { error } = <Error404 />


  return (
    <>
      {
        isLoading === true
          ?
          loading
          :
          isError === true
            ?
            error
            :
            <section className='section--pokedexId'>

              <article className='section__article--headerPokedex'>
                <img className='section__article--imgPokedex' src="/pokedex-3d-logo (1).png" alt="" />
                <div className='section__article--circlePokedex'>{nav}</div>
              </article>

              <button className='section__button' onClick={() => navigatePokedex()}>
                <i className='bx bx-arrow-back bx-fade-left bx-flashing-hover'></i></button>

              <article className='section__article--pokedexId'>
                <article className='article__article--pokedexId' >
                  <img className='article__article--imgPokedexId' src={data.sprites?.other?.['official-artwork']?.front_default} alt={`${data?.name}`} />

                  <div className='article__article--divPokedexId'>
                    <div className='article__div--NamePokedexId'>
                      <h2 className='div__h2--idPokedexId'># {id}</h2>
                      <h2 className='div__h2--NamePokedexId'>{String(name)}</h2>
                    </div>

                    <div className='article__div--descriptionPokedexId'>

                      <div className='article__div--divDescriptionPokedexId'>
                        <h4 className='div__h4--descriptionPokedexId'>Altura </h4>
                        <h4 className='div__h4--descriptionData'>{data?.height}</h4>
                      </div>

                      <div className='article__div--divDescriptionPokedexId'>
                        <h4 className='div__h4--descriptionPokedexId'>Peso </h4>
                        <h4 className='div__h4--descriptionData'>{data?.weight}</h4>
                      </div>
                    </div>
                  </div>

                  <article className='section__article--typePokedexId'>
                    <div className='article__div--typePokedexId'>
                      <h3 className='div__h3--typePokedexId' >Tipo</h3>
                      <ul className='div__ul--typePokedexId'>

                        {data?.types?.map((object, index) => {
                          if (index < 2) {
                            const { upperCaseString } = upperCase(object?.type?.name);
                            return (
                              <li key={index} className='ul__li--typePokedexId'>
                                {upperCaseString}
                              </li>
                            )
                          }}
                        )}


                      </ul>
                    </div>

                    <div className='article__div--typePokedexId'>
                      <h3 className='div__h3--typePokedexId'>Habilidades</h3>
                      <ul className='div__ul--typePokedexId'>
                        {data?.abilities?.map((object,index)=>{
                          if(index<2){
                            const { upperCaseString } = upperCase(object?.ability?.name);
                            return(
                              <li key={index} className='ul__li--typePokedexId'>{upperCaseString}</li>
                            )
                          }
                        })}
                        
                      </ul>
                    </div>
                  </article>

                  <article className='section__article--statsPokedexId'>
                    <h2 className='article__h2--statsPokedexId'>Stats</h2>

                    <div className='article__div--statsPokedexId'>
                      <div className='div__div--statsPokedexId'>
                        <h3>HP:</h3>
                        <h3> {data?.stats?.[0]?.base_stat}/100</h3>
                      </div>
                      <div className='div__div--statsProgressPokedexId'>
                        <div
                          className='div__div--divstatsProgress'
                          style={{ width: `${data?.stats?.[0]?.base_stat}%` }}
                        >
                        </div>
                      </div>
                    </div>

                    <div className='article__div--statsPokedexId'>
                      <div className='div__div--statsPokedexId'>
                        <h3>Ataque: </h3>
                        <h3>{data?.stats?.[1]?.base_stat}/100</h3>
                      </div>
                      <div className='div__div--statsProgressPokedexId'>
                        <div
                          className='div__div--divstatsProgress'
                          style={{ width: `${data?.stats?.[1]?.base_stat}%` }}
                        >
                        </div>
                      </div>
                    </div>

                    <div className='article__div--statsPokedexId'>
                      <div className='div__div--statsPokedexId'>
                        <h3>Defensa: </h3>
                        <h3>{data?.stats?.[2]?.base_stat}/100</h3>
                      </div>

                      <div className='div__div--statsProgressPokedexId'>
                        <div
                          className='div__div--divstatsProgress'
                          style={{ width: `${data?.stats?.[2]?.base_stat}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className='article__div--statsPokedexId'>
                      <div className='div__div--statsPokedexId'>
                        <h3>Velocidad: </h3>
                        <h3>{data?.stats?.[5]?.base_stat}/100</h3>
                      </div>
                      <div className='div__div--statsProgressPokedexId'>
                        <div
                          className='div__div--divstatsProgress'
                          style={{ width: `${data?.stats?.[5]?.base_stat}%` }}
                        >
                        </div>
                      </div>
                    </div>
                  </article>

                </article>

                <article className='section__article--abilities'>
                  <h2 className='article__h2--abilities'>Movimientos</h2>
                  <ol className='section__ol--abilities'>
                    {
                      data?.moves?.map((move, index) => {
                        if (index < 25) {
                          const { upperCaseString } = upperCase(move?.move?.name)
                          return (
                            <li className='article__li--abilities'
                              key={index}>
                              {`${upperCaseString}`}
                            </li>)
                        }
                      })

                    }
                  </ol>

                </article>


              </article>

            </section>
      }




    </>
  );
};

export default PokedexId;