import { combineReducers } from "redux";

import tasksManagerReducer from "pages/Tasks/reducers";
import pokemons from "pages/Pokemons/reducers";
import auth from "pages/SignIn/reducers";

export const rootReducer = combineReducers({
  tasksManager: tasksManagerReducer,
  pokemons,
  auth,
});
