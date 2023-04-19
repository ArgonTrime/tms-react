import axios from "axios";
import localStorageService from "services/localStorageService";

const config = {
  baseURL: "https://pokeapi.co/api/v2/",
};
const configLocal = {
  baseURL: "http://localhost:3001/",
};
export const pokemonApiConfig = axios.create(config);

export const pokemonLocalApiConfig = axios.create(configLocal);
pokemonLocalApiConfig.interceptors.request.use((config) => {
  const accessToken = localStorageService.getToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
});
