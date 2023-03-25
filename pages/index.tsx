import { useState, useEffect } from "react";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "axios";
import { rssData } from "../interfaces/rssData.interface";
import ErrorText from "../components/ErrorText";
import parse from "html-react-parser";

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAnchorTag = styled.a`
  border: 2px solid red;
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
`;

const ArticleTitle = styled.h3``;

const ContentContainer = styled.div`
  display: flex;
  p {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
  }
`;

let currentHost: string;
if (typeof window !== "undefined") {
  currentHost = window.location.host;
}

const fetchRssData = async () => {
  const fetchedData = await axios.get(`http://${currentHost}/api/getRssData`);
  return fetchedData;
};

const parseContentImage = (content: string) => {
  const parsedContent: any = parse(content);

  if (parsedContent[0].type === "img") {
    return parsedContent[0];
  }
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
    <MainWrapper>
      <NavBar />
      <LinkContainer>
        {loading && <p>Laddar...</p>}
        {rssData &&
          rssData.map((data) => (
            <StyledAnchorTag key={data.id} href={data.link}>
              <>
                <h3>{data.title}</h3>
                <ContentContainer>
                  {parseContentImage(data.content)}
                  {data.contentSnippet}
                </ContentContainer>
              </>
            </StyledAnchorTag>
          ))}
        {errorText && ErrorText(errorText)}
      </LinkContainer>
    </MainWrapper>
  );
}
