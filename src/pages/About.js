import styled from "styled-components";
import Header from "../components/Header";
import logo from "../resource/images/logo.png";
import vegetables from "../resource/images/vegetables.png";
import Footer from "../components/Footer";

const AboutTopContainerStyled = styled.header`
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
const AboutMainStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 90vw;
  padding: 50px;
  gap: 10vw;
  margin-top: -15vh;
  margin-bottom: -10vh;
  img {
    width: 55vw;
  }
  .text-box {
    display: flex;
    flex-direction: column;
    width: 70vw;
    word-spacing: 5px;
    h1 {
      font-size: 45px;
    }
    p {
      width: 40vw;
      font-size: 25px;
    }
  }
`;
const About = () => {
  return (
    <div>
      <Header />
      <AboutTopContainerStyled>
        <img src={logo} alt="logo" />
        <h2>Who we are</h2>
        <p></p>
        <h1>ABOUT US</h1>
      </AboutTopContainerStyled>
      <AboutMainStyled>
        <img src={vegetables} alt="" />
        <div className="text-box">
          <h1>WOODIES is the home of modern wooden furniture</h1>
          <p>
            the answer to your need for furniture with shapes, sizes and colors.
          </p>
        </div>
      </AboutMainStyled>
      <Footer />
    </div>
  );
};

export default About;
