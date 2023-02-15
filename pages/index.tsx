import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";

import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "axios";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const fetchRssData = async (urlArray: string[]) => {
  // const fetchedData = await (
  //   await axios.get("http://localhost:3001/api/getRssData")
  // ).data.name;

  const fetchedData = await axios.post("http://localhost:3001/api/getRssData", {
    urlArray,
  });

  return fetchedData;
};

interface rssData {
  status: string;
  value: {
    items: [
      {
        title: string;
      }
    ];
  };
}

export default function Home() {
  const [rssData, setRssData] = useState<[rssData]>();

  const urlArray: string[] = [
    "http://expressen.se/rss/debatt",
    "http://gt.se/rss/nyheter",
    "http://gt.se/rss/nyheter",
    "https://feeds.expressen.se/kvallsposten",
    "http://expressen.se/rss/halsa",
    "http://expressen.se/rss/kultur",
    "http://expressen.se/rss/ledare",
    "http://expressen.se/rss/motor",
    "http://expressen.se/rss/noje",
    "http://expressen.se/rss/res",
    "http://expressen.se/rss/sport",
  ];

  useEffect(() => {
    async function fetchData() {
      const rssData = await fetchRssData(urlArray);
      console.log(rssData.data);

      setRssData(rssData.data);
    }
    fetchData();
  }, []);

  return (
    <MainWrapper>
      <NavBar />
      {rssData ? rssData.map((data) => <p key={data.id}>{data.title}</p>) : ""}
    </MainWrapper>
  );
}
