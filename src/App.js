import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

import Products from "./pages/Products";
import ProductsItem from "./components/ProductsItem";

const AppStyled = styled.div`
  font-family: "Nunito";
`;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productsItem" element={<ProductsItem />}></Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
