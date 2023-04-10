import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store/configureStore";
import Router from "./Routes/Router";
import MainLayout from "./components/MainLayout";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Router />
        </MainLayout>
      </PersistGate>
    </Provider>
  </HashRouter>
  //</React.StrictMode>
);
