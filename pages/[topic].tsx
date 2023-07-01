import React, { useState, useEffect } from "react";
import { rssData } from "../interfaces/rssData.interface";
import { useRouter } from "next/router";
import fetchRssData from "../utils/fetchRssData";
import { urlArray } from "../utils/urlArray";
import ErrorText from "../components/ErrorText";
import { Article } from "../components/Article";
import { ArticleContainer, MainWrapper } from ".";
import SkeletonLoader from "../components/SkeletonLoader";
import useScrollToBottom from "../utils/useScrollToBottom";

const topic = () => {
  const [rssData, setRssData] = useState<rssData[]>();
  const [completeRssData, setCompleteRssData] = useState<rssData[]>();
  const [errorText, setErrorText] = useState<string>();
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { topic } = query;

  const handleScrollToBottom = async () => {
    try {
      if (rssData?.length) {
        const nextSection = completeRssData?.slice(
          rssData.length,
          rssData.length + 10
        );
        setRssData(rssData.concat(nextSection ?? []));
      }
    } catch (error: unknown) {
      setErrorText("Något gick fel, försök igen senare.");
    }
  };

  useScrollToBottom(handleScrollToBottom);

  useEffect(() => {
    async function fetchData() {
      if (!topic) return;
      setLoading(true);
      try {
        const currentUrl = urlArray.filter(
          (url) => url.split("/").at(-1) === `${topic}`.toLowerCase()
        );
        const initialRssData = await fetchRssData(currentUrl);
        setCompleteRssData(initialRssData?.data);
        setLoading(false);
        setRssData(initialRssData?.data.slice(0, 10));
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
