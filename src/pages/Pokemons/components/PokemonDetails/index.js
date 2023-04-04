import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonByNameThunk } from "pages/Pokemons/api";
import {
  currentPokemon,
  currentPokemonIsLoading,
} from "pages/Pokemons/selectors";
import { statIconsByName, statsPackage } from "pages/Pokemons/utils";
import PokemonStat from "../PokemosStat";

import styles from "./style.module.scss";

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const { pokemonName } = useParams();
  const { sprites, name, stats } = useSelector(currentPokemon);
  const isLoading = useSelector(currentPokemonIsLoading);
  const pokemonStat = stats && statsPackage(stats);

  useEffect(() => {
    dispatch(getPokemonByNameThunk(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <div className={styles.wrapper}>
      <h1>Pokemon details</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.wrapperPokemon}>
          <h2>{pokemonName.toUpperCase()}</h2>
          <img src={sprites && sprites.front_default} alt={name} />
          <div className={styles.statsWrapper}>
            {pokemonStat?.map(([statName, statValue]) => (
              <PokemonStat
                key={statName}
                countStat={statValue}
                textStat={statName}
                srcImg={statIconsByName[statName]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default PokemonDetails;
