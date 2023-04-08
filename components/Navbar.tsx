import Link from "next/link";
import React from "react";
import styled from "styled-components";
import getCategoryFromUrl from "../utils/getCategoryFromUrl";
import { urlArray } from "../utils/urlArray";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <Title className={montserrat.className}>
          <Link href="/">RSS News</Link>
        </Title>
        <CategoryContainer>{generateNavbarLinks(urlArray)}</CategoryContainer>
      </MainContainer>
    </Wrapper>
  );
};

const MainContainer = styled.div`
  width: 1440px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: inset 0px -3px 5px -5px rgba(0, 0, 0, 0.75);

  a {
    text-decoration: none;
    color: #303030;
    font-weight: lighter;

    &:hover {
      transform: scale(1.05);
      text-shadow: 0.2px 0.2px 0.2px black;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  width: 150px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1100px;
`;

export default Navbar;
