import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  p {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }
`;

export default ContentContainer;
