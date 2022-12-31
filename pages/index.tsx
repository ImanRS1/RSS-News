import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function Home() {
  console.log("hej");

  return (
    <MainWrapper>
      <NavBar />
    </MainWrapper>
  );
}
