import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";
import { generateNavbarLinks } from "./Navbar";
import { urlArray } from "../utils/urlArray";

const theme = Theme();

interface ChildProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenuOptions = ({ setClicked }: ChildProps) => {
  return (
    <Container onClick={() => setClicked(false)}>
      {generateNavbarLinks(urlArray)}
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  right: 0.2px;
  top: 100px;
  background-color: ${theme.grey1};
  min-width: 200px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 10px 0 10px;

  p {
    border-bottom: 2px solid ${theme.grey2};
    margin-top: 0;
  }
`;

export default BurgerMenuOptions;
