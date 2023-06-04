import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";
import BurgerMenuOptions from "./BurgerMenuOptions";
import { motion, AnimatePresence } from "framer-motion";

const theme = Theme();

const BurgerMenu = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <AnimatePresence>
      <Container onClick={() => setClicked(!clicked)} key="bm-container">
        <div className={clicked ? "icon nav-icon-2 open" : "icon nav-icon-2"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
      {clicked && (
        <BurgerMenuOptions setClicked={setClicked} key="bm-options" />
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
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

export default BurgerMenu;
