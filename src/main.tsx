import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Header from "./pages/components/Header";
import Layout from "./pages/components/Layout";
import Signin from "./pages/signin/index";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Issues from "./pages/issues/index";
import Search from "./pages/search/index";
import Simulation from "./pages/simulation/index";

import { Provider } from "react-redux";
import { store } from "./states/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/signin" element={<Signin />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/search" element={<Search />} />
            <Route path="/simulation" element={<Simulation />} />
          </Route>

          <Route path="/*" element={<Navigate replace to="/signin" />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
