import styled from "styled-components";
import Header from "../components/Header";
import logo from "../resource/images/logo.png";
import Group19 from "../resource/images/Group19.png";
import Group18 from "../resource/images/Group18.png";
import Group20 from "../resource/images/Group20.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductsTopContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  margin-top: -8vh;
  p {
    width: 25vw;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: black;
    }
  }
  h1 {
    font-size: 72px;
    line-height: 98px;
    text-align: right;
    color: rgba(34, 34, 34, 0.1);
  }
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    color: #3e3f43;
  }
`;
const ProductsMainStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 7vw;
  margin-bottom: 10vh;
`;

const Products = () => {
  const categories = [
    {
      title: "Jenson",
      image: Group19,
    },
    {
      title: "Deon",
      image: Group18,
    },
    {
      title: "Krisha",
      image: Group20,
    },
  ];

  const handleItemClick = (title) => {
    window.location.href = `/products/${title}`;
  };

  return (
    <div>
      <Header />
      <ProductsTopContainerStyled>
        <img src={logo} alt="logo" />
        <h2>Who we are</h2>
        <p></p>
        <h1>PRODUCTS</h1>
      </ProductsTopContainerStyled>
      <ProductsMainStyled>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <img
                src={category.image}
                alt={category.title}
                onClick={() => handleItemClick(category.title)}
              />
            </div>
          );
        })}
      </ProductsMainStyled>
      <Footer />
    </div>
  );
};

export default Products;
