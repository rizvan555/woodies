import styled from "styled-components";
import logo from "../resource/images/logo.png";
import footerBg from "../resource/images/footerBg.png";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  background-color: #f1f1f1;
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: 35% 100%;

  .title-footer-box {
    display: flex;
    align-items: center;
    gap: 1vw;
    color: #3e3f43;
    margin-top: 20px;
    width: 60vw;
    border-top: 2px solid #c4c4c4;
    h2 {
      letter-spacing: 2px;
    }
  }
  .info-box {
    line-height: 10px;
    color: #8d8d8d;
    font-size: 14px;
    img {
      width: 25px;
      height: 25px;
    }
    p {
      letter-spacing: 1px;
    }
  }
  .down-box {
    padding: 30px 30px 0 30px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="info-box">
        <div className="title-footer-box">
          <img src={logo} alt="logo" />
          <h2>WOODIES</h2>
        </div>
        <p className="tel">(012) 8967453</p>
        <p className="email">woodies@gmail.com</p>
        <p className="adress">Jakarta, Indonesia</p>
      </div>
      <div className="down-box">@ 2023 WOODIES</div>
    </FooterStyled>
  );
};

export default Footer;
