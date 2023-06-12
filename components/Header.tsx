import { PropsWithChildren } from "react";
import styled from "styled-components";
import Theme from "../themes/theme";

const theme = Theme();

const Header = ({ children }: PropsWithChildren) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

const HeaderStyle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;

  ${theme.breakpoints.mobile} {
    font-size: 1.3rem;
  }
`;

export default Header;
