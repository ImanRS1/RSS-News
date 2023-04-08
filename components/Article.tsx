import styled from "styled-components";
import { rssData } from "../interfaces/rssData.interface";
import parseContentImage from "../utils/parseContentImage";
import ContentContainer from "./ContentContainer";

export const Article = ({ href, data }: { href: string; data: rssData }) => {
  return (
    <Wrapper href={href}>
      {window.location.pathname.length === 1 && (
        <CategoryInfo>{data.category}</CategoryInfo>
      )}

      <ContentContainer>
        {parseContentImage(data.content)}
        <div className="text-content">
          <h3>{data.title}</h3>
          {data.contentSnippet}
        </div>
      </ContentContainer>
      <Line />
    </Wrapper>
  );
};

const Line = styled.div`
  height: 0.5px;
  margin: 20px auto 0 auto;
  border-bottom: 2px solid #e8e8e8;
`;

const CategoryInfo = styled.div`
  text-align: end;
  font-weight: 300;
  font-size: 17px;
  letter-spacing: 2px;
`;

const Wrapper = styled.a`
  width: 95%;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  padding-top: 20px;

  &:hover {
    img {
      filter: brightness(1.08);
    }
  }
`;
