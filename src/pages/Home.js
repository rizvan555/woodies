import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";

const HomeStyled = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 61%,
    rgba(249, 189, 189, 1) 61%
  );
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Main />
    </HomeStyled>
  );
};

export default Home;
