import React, { useState, useEffect } from "react";
import { rssData } from "../interfaces/rssData.interface";
import { useRouter } from "next/router";
import fetchRssData from "../utils/fetchRssData";
import { urlArray } from "../utils/urlArray";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";
import { ArticleContainer, MainWrapper } from ".";
import SkeletonLoader from "../components/SkeletonLoader";

const topic = () => {
  const [rssData, setRssData] = useState<[rssData]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { topic } = query;

  useEffect(() => {
    async function fetchData() {
      if (!topic) return;
      setLoading(true);
      try {
        const currentUrl = urlArray.filter(
          (url) => url.split("/").at(-1) === `${topic}`.toLowerCase()
        );
        const rssData = await fetchRssData(currentUrl);
        setLoading(false);
        setRssData(rssData?.data);
      } catch (error: unknown) {
        setErrorText("Något gick fel, försök igen senare.");
      }
    }
    fetchData();
  }, [topic]);

  return (
    <MainWrapper>
      <ArticleContainer>
        {loading && <SkeletonLoader />}
        {rssData &&
          rssData.map((data) => (
            <Article key={data.id} href={data.link} data={data} />
          ))}
        {errorText && ErrorText(errorText)}
      </ArticleContainer>
    </MainWrapper>
  );
};

export default topic;
