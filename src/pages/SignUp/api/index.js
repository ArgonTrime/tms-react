import { pokemonLocalApiConfig } from "config/pokemonApiConfig";

export const signUp = (body) =>
  pokemonLocalApiConfig.post("/auth/signup", body);
