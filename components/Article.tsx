import styled from "styled-components";
import { rssData } from "../interfaces/rssData.interface";
import parseContentImage from "../utils/parseContentImage";
import ContentContainer from "./ContentContainer";
import Theme from "../themes/theme";
import Paragraph from "./Paragraph";

const theme = Theme();

export const Article = ({ href, data }: { href: string; data: rssData }) => {
  return (
    <Wrapper href={href} target="_blank">
      {window?.location?.pathname?.length === 1 && (
        <CategoryInfo>{data.category}</CategoryInfo>
      )}

      <ContentContainer>
        <div className="desktop-content">
          {parseContentImage(data.content)}
          <div className="text-content">
            <h3>{data.title}</h3>
            <Paragraph>{data.contentSnippet}</Paragraph>
          </div>
        </div>
        <div className="mobile-content">
          <div className="header-content">
            <h3>{data.title}</h3>
            {parseContentImage(data.content)}
          </div>
          <div className="text-content">
            <Paragraph>{data.contentSnippet}</Paragraph>
          </div>
        </div>
      </ContentContainer>
      <Line />
    </Wrapper>
  );
};

export const Line = styled.div`
  height: 0.5px;
  margin: 20px auto 0 auto;
  border-bottom: 2px solid ${theme.grey2};
`;

export const CategoryInfo = styled.div`
  text-align: end;
  font-weight: 300;
  font-size: 17px;
  letter-spacing: 2px;
`;

export const Wrapper = styled.a`
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
