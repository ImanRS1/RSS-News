import React from "react";
import styled from "styled-components";
import parseDate from "../utils/parseDate";

interface DateContainerProps {
  date: string;
}

const DateContainer: React.FC<DateContainerProps> = ({ date }) => {
  return <div>{parseDate(date)}</div>;
};

// const Container = styled.div<ChildProps>`
//   color: gray;
// `;

export default DateContainer;
