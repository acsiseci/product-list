import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";

const App = () => {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="product" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
