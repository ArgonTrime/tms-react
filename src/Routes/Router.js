import { Route, Routes } from "react-router-dom";
import CounterContainder from "../pages/Counter/container/CountContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainder />} />
    </Routes>
  );
};
export default Router;
