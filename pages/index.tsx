import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { log } from "console";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const fetchInitData = async () => {
  const res = await fetch("http://localhost:3002/api/getRssData", {
    method: "POST",
    headers: {
      ["x-siteid"]: "DI",
      ["content-type"]: "application/json",
    },
    body: JSON.stringify({ lCusno: 4407715 }),
  });
  const data = await res.json();
  console.log("hämtad data: ", data.name);

  return data.name;
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
