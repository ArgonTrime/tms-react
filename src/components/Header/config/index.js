import { ROUTE_NAMES } from "Routes/routeNames";

export const NAVIGATION_ITEMS = {
  public: [
    {
      title: "Home",
      path: ROUTE_NAMES.HOME,
    },
    {
      title: "Sign In",
      path: ROUTE_NAMES.SIGN_IN,
    },
    {
      title: "Sign Up",
      path: ROUTE_NAMES.SING_UP,
    },
  ],
  private: [
    {
      title: "Counter",
      path: ROUTE_NAMES.COUNTER,
    },
    {
      title: "Counters",
      path: ROUTE_NAMES.COUNTERS,
    },
    {
      title: "Tasks",
      path: ROUTE_NAMES.TASKS,
    },
    {
      title: "Pokémons",
      path: ROUTE_NAMES.POKEMONS,
    },
  ],
};
export const publicNavsKeys = "public";
export const privateNavsKeys = "private";
