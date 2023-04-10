import { Route, Routes } from "react-router-dom";

import CounterContainder from "pages/Counter/container/CountContainer";
import CountersContainer from "pages/Counters/containers/CountersContainer";
import TasksContainer from "pages/Tasks/containers/TasksContainer";
import PokemonContainer from "pages/Pokemons/containers/PokemonsContainer";
import PokemonDetails from "pages/Pokemons/components/PokemonDetails";
import SignUpContainer from "pages/SignUp/containers/SignUpContainer";
import SignInContainer from "pages/SignIn/containers/SignInContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainder />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<CountersContainer />} />
      <Route path={ROUTE_NAMES.TASKS} element={<TasksContainer />} />
      <Route path={ROUTE_NAMES.POKEMONS} element={<PokemonContainer />} />
      <Route path={ROUTE_NAMES.POKEMON_DETAILS} element={<PokemonDetails />} />
      <Route path={ROUTE_NAMES.SING_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
};
export default Router;
