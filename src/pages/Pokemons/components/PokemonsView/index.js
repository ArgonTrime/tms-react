import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "Routes/routeNames";

import styles from "./style.module.scss";

const PokemonsView = ({ pokemons, handleGetPokemon }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pokemonGretings}>
        <h1>Pokemons</h1>
        <p>Click button get pokemons.</p>
        <Button variant="contained" onClick={handleGetPokemon}>
          GO
        </Button>
      </div>
      <div className={styles.pokemonList}>
        {pokemons.map(({ name }) => (
          <Link to={`${ROUTE_NAMES.POKEMONS}/${name}`} key={name}>
            <div className={styles.pokemonListItem}>{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
PokemonsView.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleGetPokemon: PropTypes.func.isRequired,
};
export default PokemonsView;
