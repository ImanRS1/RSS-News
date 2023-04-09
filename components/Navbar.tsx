import Link from "next/link";
import React from "react";
import styled from "styled-components";
import getCategoryFromUrl from "../utils/getCategoryFromUrl";
import { urlArray } from "../utils/urlArray";
import { Montserrat } from "@next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const renderCategories = (url: string) => {
  const pathname = usePathname()?.split("/")[1];
  const urlEnd = `${url.split("/").at(-1)}`;

  return (
    <p className={pathname === urlEnd ? "active" : ""}>
      {getCategoryFromUrl(url)}
    </p>
  );
};

const generateNavbarLinks = (urlArray: string[]) =>
  urlArray.map((url: string) => (
    <Link href={`${url.split("/").at(-1)}`} key={url}>
      {renderCategories(url)}
    </Link>
  ));

const Navbar = () => {
  return (
    <Wrapper>
      <MainContainer>
        <div className="sub-container">
          <Title className={montserrat.className}>
            <Link href="/">RSS News</Link>
          </Title>
          <CategoryContainer>{generateNavbarLinks(urlArray)}</CategoryContainer>
        </div>
      </MainContainer>
    </Wrapper>
  );
};

const MainContainer = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sub-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
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
  justify-content: space-between;

  .active {
    transform: scale(1.1);
    color: black;
    text-shadow: 0.2px 0.2px 0.2px black;
  }
`;

export default Navbar;
