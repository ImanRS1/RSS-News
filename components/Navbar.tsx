import React from "react";
import styled from "styled-components";
import { urlArray } from "../utils/urlArray";

const generateNavbarLinks = (urlArray: string[]) => {
  return urlArray.map((url) => <p>{url.split("/").at(-1)}</p>);
};

const Navbar = () => {
  return (
    <Wrapper>
      <Title>RSS News</Title>
      <CategoryContainer>{generateNavbarLinks(urlArray)}</CategoryContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fefefe;
  border-bottom: 3px solid red;
  display: flex;
  align-items: center;
  height: 50px;
`;

const Title = styled.div`
  font-size: 25px;
  width: 250px;
  margin-left: 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1100px;

  p::first-letter {
    text-transform: capitalize;
  }
`;

export default Navbar;
