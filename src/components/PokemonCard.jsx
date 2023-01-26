import { Link } from "react-router-dom";
import getDataApi from '../customHooks/getDataApi';
import upperCase from "../customHooks/upperCase";
import Error404 from "./Error404";
import Loading from "./Loading";

const PokemonCard = ({ url }) => {

  const { data, isLoading, isError } = getDataApi(url, url);
  const { upperCaseString: name } = upperCase(data?.name);


  const loading = <Loading />
  const error = <Error404 />

  return (
    <>
      {
        isLoading === false
          ?
          isError === false
            ?
            <li data-aos="fade-up"
            data-aos-delay="400"
             className="li--pokemonCard">
              <Link to={`/pokedex/${data.id}`}>

                <article className="li__article--pokemonCard">
                  <div className="li__article--divImgdPokedex">
                    <img className="article__div--imgCardPokedex" 
                    src={data.sprites?.other?.['official-artwork']?.front_default ? data.sprites?.other?.['official-artwork']?.front_default : '/pokeball.png' } alt={`${data?.name}`} />
                  </div>

                  <div className="li__article--divCardPokedex">
                    <h2 className="article__div--h2cardPokedex">{String(name)}</h2>
                    <ul className="article__div--divCardPokedex">

                      {data?.types?.map((object, index) => {
                        if (index < 2) {
                          const { upperCaseString } = upperCase(object?.type?.name);
                          return (
                            <li key={index} className='div__h3--CardPokedex'>
                              {upperCaseString}
                            </li>
                          )
                        }
                      }
                      )}
                      
                    </ul>
                    <h3 className="article__div--h3cardPokedex">Tipo</h3>
                  </div>
                </article>

                <article className="li__article--descriptionCard">
                  <div className="li__article--divCard" >
                    <h3 className="article__div--h3pokemonCard" >HP</h3>
                    <h3> {data?.stats?.[0]?.base_stat}</h3>
                  </div>

                  <div className="li__article--divCard">
                    <h3 className="article__div--h3pokemonCard" >ATTAQUE </h3>
                    <h3>{data?.stats?.[1]?.base_stat}</h3>
                  </div>

                  <div className="li__article--divCard">
                    <h3 className="article__div--h3pokemonCard" >DEFENSA</h3>
                    <h3>{data?.stats?.[2]?.base_stat}</h3>
                  </div>

                  <div className="li__article--divCard">
                    <h3 className="article__div--h3pokemonCard">VELOCIDAD </h3>
                    <h3>{data?.stats?.[5]?.base_stat}</h3>
                  </div>
                </article>

              </Link>
            </li>
            :
            error
          :
          loading
      }
    </>
  );
};

export default PokemonCard;
