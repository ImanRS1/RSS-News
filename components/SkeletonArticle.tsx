import React from "react";
import styled from "styled-components";
import { Line, Wrapper } from "./Article";
import Theme from "../themes/theme";

const theme = Theme();

const SkeletonArticle = () => {
  return (
    <Skeleton>
      <Wrapper>
        <Container>
          <div className="image skeleton-box"></div>
          <div className="text-content">
            <div className="title skeleton-box"></div>
            <div className="text skeleton-box"></div>
            <div className="text skeleton-box"></div>
            <div className="text skeleton-box"></div>
            <div className="text skeleton-box"></div>
          </div>
        </Container>
        <Line />
      </Wrapper>
    </Skeleton>
  );
};

export default SkeletonArticle;

const Container = styled.div`
  display: flex;

  ${theme.breakpoints.mobile} {
    flex-direction: row-reverse;
  }
`;

const Skeleton = styled.div`
  padding-top: 30px;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;

  .image {
    height: 10rem;
    width: 15rem;
    margin-right: 15px;
  }

  .text-content {
    width: 100%;
  }

  .title {
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
  }

  .text {
    width: 100%;
    height: 20px;
    margin-top: 5px;
  }

  .skeleton-box {
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #dfdfdf;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
      );
      animation: shimmer 2s infinite;
      content: "";
      background-color: #dddbdd;
    }

    @keyframes shimmer {
      100% {
        transform: translateX(150%);
      }
    }
  }

  ${theme.breakpoints.mobile} {
    .image {
      height: 5rem;
      width: 10rem;
      margin-right: 0px;
      margin-left: 15px;
    }
  }
`;
