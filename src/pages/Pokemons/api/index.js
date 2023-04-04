import { createAsyncThunk } from "@reduxjs/toolkit";
import { pick } from "lodash";

import { pokemonApiConfig } from "config/pokemonApiConfig";

const getPokemons = () => pokemonApiConfig.get("/pokemon");
const getPokemonByName = (pokemonName) =>
  pokemonApiConfig.get(`/pokemon/${pokemonName}`);

export const getPokemonsThunk = createAsyncThunk(
  "pokemons/getPokemons",
  async () => {
    const responce = await getPokemons();
    return responce.data;
  }
);
export const getPokemonByNameThunk = createAsyncThunk(
  "pokemons/getPokemonByName",
  async (pokemonName) => {
    const responce = await getPokemonByName(pokemonName);
    return pick(responce.data, ["name", "stats", "sprites"]);
  }
);
