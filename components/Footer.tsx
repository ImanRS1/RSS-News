import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://iman.contact">
        <p className="developer-text">
          Developed by <img src={"images/I.png"} alt={"developer symbol"} />
        </p>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100vw;
  text-align: center;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: black;
  }

  .developer-text {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 0 0.3rem;
    }
  }
`;

export default Footer;
