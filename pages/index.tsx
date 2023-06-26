import { useState, useEffect } from "react";

import styled from "styled-components";
import { rssData } from "../interfaces/rssData.interface";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";
import { urlArray } from "../utils/urlArray";
import fetchRssData from "../utils/fetchRssData";
import useScrollToBottom from "../utils/useScrollToBottom";
import SkeletonLoader from "../components/SkeletonLoader";
import Theme from "../themes/theme";

const theme = Theme();

export default function Home() {
  const [rssData, setRssData] = useState<rssData[]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [rssSection, setRssSection] = useState<number>(0);

  const handleScrollToBottom = async () => {
    try {
      setLoading(true);
      const nextRssData = await fetchRssData(urlArray, rssSection + 10, true);
      setRssData((prevRssData) => {
        if (prevRssData) {
          return [...prevRssData, ...nextRssData?.data];
        } else {
          return [];
        }
      });
      setLoading(false);
      setRssSection((prevRssSection) => prevRssSection + 10);
    } catch (error: unknown) {
      setErrorText("Något gick fel, försök igen senare.");
    }
  };

  useScrollToBottom(handleScrollToBottom);

  useEffect(() => {
    async function fetchData() {
      try {
        const initialRssData = await fetchRssData(urlArray, rssSection, true);
        setLoading(false);
        setRssData(initialRssData?.data);
      } catch (error: unknown) {
        setLoading(false);
        setErrorText("Något gick fel, försök igen senare.");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <MainWrapper>
        <ArticleContainer>
          {loading && <SkeletonLoader />}
          {rssData &&
            rssData.map((data, i) => (
              <Article key={i} href={data.link} data={data} />
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
  margin: 110px auto 20px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.grey1};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  ${theme.breakpoints.mobileAndTablet} {
    width: 95%;
  }
`;
