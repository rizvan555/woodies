import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

import Products from "./pages/Products";

const AppStyled = styled.div``;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
