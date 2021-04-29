import React from "react";
import styled from "styled-components";
import { COLORS, FONTSIZES, SPACING, WEIGHTS } from "../styles/constants";

function Blog() {
  return (
    <Wrapper>
      <BlogWrapper>
        <BlogTitle>blolg</BlogTitle>
        <BlogList>
          <YearWrapper>
            <Year>2021</Year>
            <PostsContainer>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
                <PostContentWrapper>
                  <PostTopLineWrapper>
                    <Title>Allo Arry</Title>
                    <ReadStatus>Unread</ReadStatus>
                  </PostTopLineWrapper>
                  <Summary>
                    A brief snippet of a line from a movie, whomst is bad A
                    brief
                  </Summary>
                </PostContentWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
            </PostsContainer>
          </YearWrapper>

          <YearWrapper>
            <Year>2020</Year>
            <PostsContainer>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
            </PostsContainer>
          </YearWrapper>
          <YearWrapper>
            <Year>2019</Year>
            <PostsContainer>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
              <IndividualPostWrapper>
                <PublishedDateWrapper>
                  <PublishedDate>June 1</PublishedDate>
                </PublishedDateWrapper>
              </IndividualPostWrapper>
            </PostsContainer>
          </YearWrapper>
        </BlogList>
      </BlogWrapper>
    </Wrapper>
  );
}

export default Blog;

const Wrapper = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogWrapper = styled.div`
  position: relative;
`;

const BlogTitle = styled.header`
  font-size: ${FONTSIZES.pageHead};
  position: sticky;
  display: block;
  height: 96px;
  z-index: 1;
  top: 0;
  background-color: #fff;
`;

const BlogList = styled.div`
  position: relative;
`;

const YearWrapper = styled.section`
  padding: 8px 36px;
  &:last-of-type {
    margin-bottom: 100vh;
  }
`;

const Year = styled.span`
  display: block;
  position: sticky;
  top: 96px;
  font-size: 24px;
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  margin-bottom: 24px;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IndividualPostWrapper = styled.div`
  margin: 16px 8px;
  display: flex;
  max-width: 550px;
`;

const PublishedDateWrapper = styled.div`
  display: inline-block;
  text-align: left;
  border-right: solid 1px ${COLORS.gray[300]};
  height: 64px;
`;

const PublishedDate = styled.span`
  font-size: 16px;
  margin-right: 8px;
`;

const PostContentWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PostTopLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Summary = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.gray[700]};
  max-width: fit-content;
`;

const ReadStatus = styled.em`
  color: ${COLORS.primary};
  font-size: 14px;
`;
