import { useState, useEffect } from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import axios from "axios";
import { rssData } from "../interfaces/rssData.interface";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const ArticleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let currentHost: string;
if (typeof window !== "undefined") {
  currentHost = window.location.host;
}

const fetchRssData = async () => {
  const fetchedData = await axios.get(`http://${currentHost}/api/getRssData`);
  return fetchedData;
};

export default function Home() {
  const [rssData, setRssData] = useState<[rssData]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const rssData = await fetchRssData();
        setLoading(false);
        setRssData(rssData.data);
      } catch (error: unknown) {
        setErrorText("Något gick fel, försök igen senare.");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <MainWrapper>
        <ArticleContainer>
          {loading && <p>Laddar...</p>}
          {rssData &&
            rssData.map((data) => (
              <Article key={data.id} href={data.link} data={data} />
            ))}
          {errorText && ErrorText(errorText)}
        </ArticleContainer>
      </MainWrapper>
    </>
  );
}
