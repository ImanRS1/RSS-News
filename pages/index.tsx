import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { log } from "console";
import axios from "axios";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const fetchInitData = async () => {
  const fetchedData = await (
    await axios.get("http://localhost:3001/api/getRssData")
  ).data.name;

  return fetchedData;
};

export default function Home() {
  const [initData, setInitData] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const initData = await fetchInitData();
      setInitData(initData);
    }
    fetchData();
  }, []);

  console.log("index");

  return (
    <MainWrapper>
      <NavBar />
      {initData ? <h1>{initData}</h1> : ""}
    </MainWrapper>
  );
}
