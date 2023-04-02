import React, { useState, useEffect } from "react";
import { rssData } from "../interfaces/rssData.interface";
import { useRouter } from "next/router";
import fetchRssData from "../utils/fetchRssData";
import { urlArray } from "../utils/urlArray";
import styled from "styled-components";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";

const topic = () => {
  const [rssData, setRssData] = useState<[rssData]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { topic } = query;

  useEffect(() => {
    async function fetchData() {
      if (!topic) return;

      try {
        const currentUrl = urlArray.filter(
          (url) => url.split("/").at(-1) === `${topic}`.toLowerCase()
        );
        const rssData = await fetchRssData(currentUrl);
        setLoading(false);
        console.log(rssData);
        setRssData(rssData?.data);
      } catch (error: unknown) {
        setErrorText("Något gick fel, försök igen senare.");
      }
    }
    fetchData();
  }, [topic]);

  return (
    <div>
      <ArticleContainer>
        {loading && <p>Laddar...</p>}
        {rssData &&
          rssData.map((data) => (
            <Article key={data.id} href={data.link} data={data} />
          ))}
        {errorText && ErrorText(errorText)}
      </ArticleContainer>
    </div>
  );
};

const ArticleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export default topic;
