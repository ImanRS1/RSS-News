import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
`;

export default function Home() {
  console.log("hej");

  return <Wrapper>hej</Wrapper>;
}
