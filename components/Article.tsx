import styled from "styled-components";
import { rssData } from "../interfaces/rssData.interface";
import parse from "html-react-parser";
import parseContentImage from "../utils/parseContentImage";

const LinkWrapper = styled.a`
  border: 2px solid red;
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  box-sizing: border-box;
`;

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

export const Article = ({ href, data }: { href: string; data: rssData }) => {
  return (
    <LinkWrapper href={href}>
      <h3>{data.title}</h3>
      <ContentContainer>
        {parseContentImage(data.content)}
        {data.contentSnippet}
      </ContentContainer>
    </LinkWrapper>
  );
};
