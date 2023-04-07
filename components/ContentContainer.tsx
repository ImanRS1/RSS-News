import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;

  .text-content {
    display: flex;
    flex-direction: column;
    padding: 5px;

    h3 {
      margin-top: 0;
    }
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }
`;

export default ContentContainer;
