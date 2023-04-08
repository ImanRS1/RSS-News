import { useState, useEffect } from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import { rssData } from "../interfaces/rssData.interface";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";
import { urlArray } from "../utils/urlArray";
import fetchRssData from "../utils/fetchRssData";

export default function Home() {
  const [rssData, setRssData] = useState<[rssData]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const rssData = await fetchRssData(urlArray);
        setLoading(false);
        setRssData(rssData?.data);
      } catch (error: unknown) {
        setErrorText("Något gick fel, försök igen senare.");
      }
    }
    fetchData();
  }, []);

  return (
    <>
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

export const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const ArticleContainer = styled.div`
  margin: 90px auto 20px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
