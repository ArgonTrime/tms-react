import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Router from "./Routes/Router";
import MainLayout from "./components/MainLayout";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </HashRouter>
  </React.StrictMode>
);
