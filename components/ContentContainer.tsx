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
  }

  .text-content {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-left: 10px;
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }

  .mobile-content {
    display: none;

    .header-content {
      display: flex;
      justify-content: space-between;
    }
  }

  ${theme.breakpoints.mobile} {
    .desktop-content {
      display: none;
    }
    .mobile-content {
      display: flex;
      flex-direction: row-reverse;
      flex-direction: column;

      img {
        margin-left: 10px;
        width: 10rem;
        height: 5rem;
      }

      .text-content {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
`;

export default ContentContainer;
