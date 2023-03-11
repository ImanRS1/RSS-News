import styled from "styled-components";

const StyledErrorText = styled.p`
  font-size: 2rem;
`;

const ErrorText = (message: string) => {
  return <StyledErrorText>{message}</StyledErrorText>;
};

export default ErrorText;
