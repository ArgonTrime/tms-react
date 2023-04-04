import { configureStore } from "@reduxjs/toolkit";

import tasksManagerReducer from "pages/Tasks/reducers";
import pokemons from "pages/Pokemons/reducers";

export const store = configureStore({
  reducer: {
    tasksManager: tasksManagerReducer,
    pokemons,
  },
});
