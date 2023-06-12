import { PropsWithChildren } from "react";
import styled from "styled-components";

const Header = ({ children }: PropsWithChildren) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

const HeaderStyle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
`;

export default Header;
