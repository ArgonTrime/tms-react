import { createSlice } from "@reduxjs/toolkit";

import { getPokemonByNameThunk, getPokemonsThunk } from "../api";

const initialState = {
  allPokemons: {
    data: [],
    isLoading: false,
    errors: null,
  },
  pokemon: {
    data: {},
    isLoading: false,
    errors: null,
  },
};
const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, ({ allPokemons }) => {
      allPokemons.isLoading = true;
    });
    builder.addCase(
      getPokemonsThunk.fulfilled,
      ({ allPokemons }, { payload }) => {
        allPokemons.isLoading = false;
        allPokemons.data = payload.results;
      }
    );
    builder.addCase(
      getPokemonsThunk.rejected,
      ({ allPokemons }, { payload }) => {
        allPokemons.isLoading = false;
        allPokemons.errors = payload;
      }
    );

    builder.addCase(getPokemonByNameThunk.pending, ({ pokemon }) => {
      pokemon.isLoading = true;
    });
    builder.addCase(
      getPokemonByNameThunk.fulfilled,
      ({ pokemon }, { payload }) => {
        pokemon.isLoading = false;
        pokemon.data = payload;
      }
    );
    builder.addCase(
      getPokemonByNameThunk.rejected,
      ({ pokemon }, { payload }) => {
        pokemon.isLoading = false;
        pokemon.errors = payload;
      }
    );
  },
});
export default pokemonsSlice.reducer;
