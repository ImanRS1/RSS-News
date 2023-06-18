import React from "react";
import styled from "styled-components";
import parseDate from "../utils/parseDate";
import Theme from "../themes/theme";

interface DateContainerProps {
  date: string;
}

const theme = Theme();

const DateContainer: React.FC<DateContainerProps> = ({ date }) => {
  return <Container>{parseDate(date)}</Container>;
};

const Container = styled.div`
  margin-top: 15px;
  font-weight: 300;
  font-size: 14px;

  ${theme.breakpoints.mobile} {
    font-size: 12px;
  }
`;

export default DateContainer;
