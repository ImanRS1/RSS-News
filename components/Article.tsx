import styled from "styled-components";
import { rssData } from "../interfaces/rssData.interface";
import parseContentImage from "../utils/parseContentImage";
import ContentContainer from "./ContentContainer";

export const Article = ({ href, data }: { href: string; data: rssData }) => {
  return (
    <Wrapper href={href}>
      {window.location.pathname.length === 1 && (
        <p style={{ textAlign: "end" }}>{data.category}</p>
      )}

      <ContentContainer>
        {parseContentImage(data.content)}
        <div className="text-content">
          <h3>{data.title}</h3>
          {data.contentSnippet}
        </div>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  border: 2px solid red;
  width: 100%;
  border-radius: 1rem;
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  box-sizing: border-box;
`;
