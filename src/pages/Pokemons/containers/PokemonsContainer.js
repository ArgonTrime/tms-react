import { useDispatch, useSelector } from "react-redux";

import PokemonsView from "../components/PokemonsView";
import { getPokemonsThunk } from "../api";
import { pokemonsData } from "../selectors";

const PokemonContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsData);

  const handleGetPokemon = () => {
    dispatch(getPokemonsThunk());
  };

  return (
    <PokemonsView handleGetPokemon={handleGetPokemon} pokemons={pokemons} />
  );
};
export default PokemonContainer;
