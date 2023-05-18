import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";

const theme = Theme();

interface ChildProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenuOptions = ({ setClicked }: ChildProps) => {
  return <Container onClick={() => setClicked(false)}>hej</Container>;
};
const Container = styled.div`
  position: absolute;
  right: 0.2px;
  top: 100px;
  background-color: ${theme.grey1};
  width: 350px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
`;

export default BurgerMenuOptions;
