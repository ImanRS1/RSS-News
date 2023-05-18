import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import getCategoryFromUrl from "../utils/getCategoryFromUrl";
import { urlArray } from "../utils/urlArray";
import { Montserrat } from "@next/font/google";
import { usePathname } from "next/navigation";
import Theme from "../themes/theme";

const theme = Theme();

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
  const [clicked, setClicked] = useState(true);

  return (
    <Wrapper>
      <MainContainer>
        <div className="sub-container">
          <Title className={montserrat.className}>
            <Link href="/">RSS News</Link>
          </Title>
          <CategoryContainer>{generateNavbarLinks(urlArray)}</CategoryContainer>
          <BurgerMenu onClick={() => setClicked(!clicked)}>
            <div
              className={clicked ? "icon nav-icon-2 open" : "icon nav-icon-2"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </BurgerMenu>
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
    ${theme.breakpoints.mobileAndTablet} {
      width: 100%;
    }
  }

  ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  background-color: ${theme.grey1};
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

  ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  transform: scale(0.8);
  .nav-icon-2 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-2 span {
    background-color: ${theme.black1};
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-2 span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: 0px;
    left: 0px;
  }
  .nav-icon-2 span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
  }
  .nav-icon-2 span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-2:not(.open):hover span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-2:not(.open):hover span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
    transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-2:not(.open):hover span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: -2px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  .nav-icon-2.open span:nth-child(1) {
    left: 3px;
    top: 12px;
    width: 30px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(90deg);
    transition-delay: 150ms;
  }
  .nav-icon-2.open span:nth-child(2) {
    left: 2px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(45deg);
    transition-delay: 50ms;
  }
  .nav-icon-2.open span:nth-child(3) {
    left: 14px;
    top: 20px;
    width: 20px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: rotate(-45deg);
    transition-delay: 100ms;
  }

  ${theme.breakpoints.mobileAndTablet} {
    display: flex;
    position: absolute;
    right: 0;
  }
`;

export default Navbar;
