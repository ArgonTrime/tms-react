import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (store) => store.pokemons;

export const pokemonsData = createSelector(
  baseSelector,
  (pokemons) => pokemons.allPokemons.data
);
export const pokemonsIsLoading = createSelector(
  baseSelector,
  (pokemons) => pokemons.allPokemons.isLoading
);

export const currentPokemon = createSelector(
  baseSelector,
  (pokemons) => pokemons.pokemon.data
);
export const currentPokemonIsLoading = createSelector(
  baseSelector,
  (pokemons) => pokemons.pokemon.isLoading
);
