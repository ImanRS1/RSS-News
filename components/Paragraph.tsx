import { PropsWithChildren } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";

const theme = Theme();

const Paragraph = ({ children }: PropsWithChildren) => {
  return <ParagraphStyle>{children}</ParagraphStyle>;
};

const ParagraphStyle = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

export default Paragraph;
