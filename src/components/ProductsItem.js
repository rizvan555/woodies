import { useState } from "react";
import Group19 from "../resource/images/Group19.png";
import Group18 from "../resource/images/Group18.png";
import Group20 from "../resource/images/Group20.png";
import styled from "styled-components";
import logo from "../resource/images/logo.png";

const ProductsItemTopContainerStyled = styled.div`
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
const ProductsItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  margin: 5vh 0;
  img {
    width: 30vw;
  }
  p {
    width: 40%;
  }
`;

const ProductsItem = () => {
  const [items, setItams] = useState([
    {
      title: "Jenson",
      image: Group19,
      contain:
        "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    },
    {
      title: "Deon",
      image: Group18,
      contain:
        "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    },
    {
      title: "Krisha",
      image: Group20,
      contain:
        "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <ProductsItemTopContainerStyled>
        <img src={logo} alt="logo" />
        <h2>Who we are</h2>
        <p></p>
        <h1>PRODUCTS</h1>
      </ProductsItemTopContainerStyled>
      {items.map((item, index) => {
        return (
          <ProductsItemStyled key={index} onClick={() => handleItemClick()}>
            <img src={item.image} alt="image" />
            <p>{item.contain}</p>
            {selectedIndex === index && (
              <div>
                <img src={item.image} alt="image" />
                <h3>{item.title}</h3>
                <p>{item.contain}</p>
              </div>
            )}
          </ProductsItemStyled>
        );
      })}
    </div>
  );
};

export default ProductsItem;
