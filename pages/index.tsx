import { useState, useEffect } from "react";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "axios";
import { rssData } from "../interfaces/rssData.interface";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const fetchRssData = async () => {
  const fetchedData = await axios.get("http://localhost:3002/api/getRssData");
  return fetchedData;
};

export default function Home() {
  const [rssData, setRssData] = useState<[rssData]>();

  useEffect(() => {
    async function fetchData() {
      const rssData = await fetchRssData();
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
