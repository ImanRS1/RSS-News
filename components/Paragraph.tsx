import { PropsWithChildren } from "react";
import styled from "styled-components";

const Paragraph = ({ children }: PropsWithChildren) => {
  return <ParagraphStyle>{children}</ParagraphStyle>;
};

const ParagraphStyle = styled.p`
  margin: 0;
`;

export default Paragraph;
