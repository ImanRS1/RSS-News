import React from "react";
import styled from "styled-components";

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
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Title>RSS News</Title>
      <CategoryContainer>
        <p>Lorem1</p>
        <p>Lorem2</p>
        <p>Lorem3</p>
        <p>Lorem4</p>
        <p>Lorem5</p>
        <p>Lorem6</p>
        <p>Lorem7</p>
        <p>Lorem8</p>
        <p>Lorem9</p>
        <p>Lorem10</p>
      </CategoryContainer>
    </Wrapper>
  );
};

export default NavBar;
