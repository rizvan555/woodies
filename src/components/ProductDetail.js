import { useParams } from "react-router-dom";
import styled from "styled-components";
import Group19 from "../resource/images/Group19.png";
import Group18 from "../resource/images/Group18.png";
import Group20 from "../resource/images/Group20.png";
import Header from "./Header";
import logo from "../resource/images/logo.png";

const InfoDetails = styled.div`
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

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 6vh auto;
  img {
    width: 30vw;
  }
  p {
    width: 30vw;
    font-size: 25px;
  }
`;

const ProductDetail = () => {
  const { title } = useParams();

  const getImageForTitle = (title) => {
    if (title === "Jenson") {
      return Group19;
    } else if (title === "Deon") {
      return Group18;
    } else if (title === "Krisha") {
      return Group20;
    }
  };

  const image = getImageForTitle(title);

  return (
    <>
      <Header />
      <InfoDetails>
        <img src={logo} alt="logo" />
        <h2>{title}</h2>
        <p></p>
        <h1>PRODUCTS</h1>
      </InfoDetails>
      <ProductDetailContainer>
        <img src={image} alt={title} />
        <p>
          Jenson demonstrates what designer Tim Fenby does best. Clean lines,
          subtle curves and an oak finish nail this season's trends. Boomerang
          legs add serious style points – not that this dining table needs it.
          Nordic retro? You got it.
        </p>
      </ProductDetailContainer>
    </>
  );
};

export default ProductDetail;
