import { useState, useEffect } from "react";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "axios";
import { rssData } from "../interfaces/rssData.interface";
import ErrorText from "../components/ErrorText";

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
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
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

  useEffect(() => {
    async function fetchData() {
      const rssData = await fetchRssData();

      if (rssData.data.errorMessage) {
        setErrorText(rssData.data.errorMessage);
        return;
      }

      setRssData(rssData.data);
    }
    fetchData();
  }, []);

  return (
    <MainWrapper>
      <NavBar />
      <LinkContainer>
        {rssData &&
          rssData.map((data) => (
            <StyledAnchorTag key={data.id} href={data.link}>
              {data.title}
            </StyledAnchorTag>
          ))}
        {errorText && ErrorText(errorText)}
      </LinkContainer>
    </MainWrapper>
  );
}
