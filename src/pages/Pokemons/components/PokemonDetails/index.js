import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonByNameThunk } from "pages/Pokemons/api";
import {
  currentPokemon,
  currentPokemonIsLoading,
} from "pages/Pokemons/selectors";
import { statsPackage } from "pages/Pokemons/utils";
import PokemonStat from "../PokemosStat";

import sword from "static/icon/sword.png";
import swords from "static/icon/swords.png";
import defence from "static/icon/defence.png";
import defenceSpecial from "static/icon/defenceSpecial.png";
import health from "static/icon/heart.png";
import speed from "static/icon/fast-forward.png";
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
            <PokemonStat
              countStat={pokemonStat && pokemonStat.attack}
              srcImg={sword}
              textStat="Attack"
            />
            <PokemonStat
              countStat={pokemonStat && pokemonStat["special-attack"]}
              srcImg={swords}
              textStat="Special attack"
            />
            <PokemonStat
              countStat={pokemonStat && pokemonStat.defense}
              srcImg={defence}
              textStat="Defense"
            />
            <PokemonStat
              countStat={pokemonStat && pokemonStat["special-defense"]}
              srcImg={defenceSpecial}
              textStat="Special defense"
            />
            <PokemonStat
              countStat={pokemonStat && pokemonStat.hp}
              srcImg={health}
              textStat="Health"
            />
            <PokemonStat
              countStat={pokemonStat && pokemonStat.speed}
              srcImg={speed}
              textStat="Speed"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PokemonDetails;
