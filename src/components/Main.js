import styled from "styled-components";
import table from "../resource/images/table.png";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  width: 80vw;
  background-image: url(${table});
  background-repeat: no-repeat;
  background-size: 30% 100%;
  background-position: 70% 0;
  h3 {
    width: 30vw;
    font-size: 30px;
    text-align: start;
    font-weight: normal;
  }
  h1 {
    font-size: 70px;
    text-align: start;
    line-height: 1px;
  }
  button {
    width: 190px;
    height: 50px;
    background: #daa520;
    border-radius: 4px;
    margin-top: 5vh;
    border: none;
    color: #fff;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <h3>
        Are you looking for <b>woodden</b> furniture for your place?
      </h3>
      <h1>This is the </h1>
      <h1>Right Place</h1>
      <button>Explore Categories</button>
    </MainStyled>
  );
};

export default Main;
