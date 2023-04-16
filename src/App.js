import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";

const AppStyled = styled.div`
  font-family: "Nunito";
`;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:title" element={<ProductDetail />}></Route>
      </Routes>
    </AppStyled>
  );
}

export default App;
