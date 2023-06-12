import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";

const theme = Theme();

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  .desktop-content {
    display: flex;

    ${theme.breakpoints.mobile} {
      display: none;
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-left: 10px;

    h3 {
      margin-top: 0;
    }
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }

  .mobile-content {
    display: none;

    ${theme.breakpoints.mobile} {
      display: flex;
      flex-direction: row-reverse;
      flex-direction: column;

      img {
        margin-left: 10px;
      }

      .text-content {
        margin-left: 0;
        margin-top: 10px;
      }
    }

    .header-content {
      display: flex;
    }
  }
`;

export default ContentContainer;
