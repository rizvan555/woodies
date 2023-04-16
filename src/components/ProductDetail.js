import { useParams } from "react-router-dom";
import styled from "styled-components";
import Group19 from "../resource/images/Group19.png";
import Group18 from "../resource/images/Group18.png";
import Group20 from "../resource/images/Group20.png";

const ProductDetailContainer = styled.div`
 
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
    <ProductDetailContainer>
      <img src={image} alt={title} />
    </ProductDetailContainer>
  );
};

export default ProductDetail;
