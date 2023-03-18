import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./Routes/Router";
import MainLayout from "./components/MainLayout";
import { store } from "./store/configureStore";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
