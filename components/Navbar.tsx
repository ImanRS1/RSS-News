import Link from "next/link";
import React from "react";
import styled from "styled-components";
import getCategoryFromUrl from "../utils/getCategoryFromUrl";
import { urlArray } from "../utils/urlArray";

const generateNavbarLinks = (urlArray: string[]) => {
  return urlArray.map((url: string) => {
    return (
      <Link href={`${url.split("/").at(-1)}`} key={url}>
        <p>{getCategoryFromUrl(url)}</p>
      </Link>
    );
  });
};

const Navbar = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Title>
          <Link href="/">RSS News</Link>
        </Title>
        <CategoryContainer>{generateNavbarLinks(urlArray)}</CategoryContainer>
      </MainContainer>
    </Wrapper>
  );
};

const MainContainer = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #fefefe;
  border-bottom: 3px solid red;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100vw;
  position: fixed;
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
