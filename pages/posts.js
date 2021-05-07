import React from "react";
import { getAllPosts } from "../lib/data/posts-api";
import styled from "styled-components";
import { COLORS, FONTSIZES, SPACING, WEIGHTS } from "../styles/constants";
import Link from "next/link";

function Blog({ posts }) {
  let years = [];
  posts.map((post) => years.push(parseInt(post.year)));
  let uniqueYears = new Set(years);
  years = [...uniqueYears];
  years.sort((a, b) => (a > b ? -1 : 1));

  return (
    <Wrapper>
      <BlogWrapper>
        <BlogTitle>blolg</BlogTitle>
        <BlogList>
          {years.map((year) => {
            return (
              <YearWrapper>
                <Year>{year}</Year>
                {posts
                  .filter((post) => post.year == year)
                  .sort((post1, post2) =>
                    post1.published < post2.published ? -1 : 1
                  )
                  .map((post) => {
                    return (
                      <IndividualPostWrapper>
                        <PublishedDateWrapper>
                          <PublishedDate>
                            {post.data.human_published
                              ? post.data.human_published
                              : "Jun 01"}
                          </PublishedDate>
                        </PublishedDateWrapper>
                        <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                          <PostContentWrapper>
                            <PostTopLineWrapper>
                              <Title>{post.data.title}</Title>
                              {/* <ReadStatus>Unread</ReadStatus> */}
                            </PostTopLineWrapper>
                            <Summary>
                              {post.data.summary
                                ? post.data.summary
                                : "A brief snippet of a line from a movie, whomst is bad"}
                            </Summary>
                          </PostContentWrapper>
                        </Link>
                      </IndividualPostWrapper>
                    );
                  })}
              </YearWrapper>
            );
          })}
        </BlogList>
      </BlogWrapper>
    </Wrapper>
  );
}

export default Blog;

export async function getStaticProps() {
  // why do i have to do this just to read date objects? annoying...
  const posts = JSON.parse(JSON.stringify(getAllPosts()));
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

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
  font-size: 32px;
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
  margin: 32px 8px;
  display: flex;
`;

const PublishedDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: solid 1px ${COLORS.gray[300]};
  padding-right: 2px;
  height: 54px;
  width: 64px;
`;

const PublishedDate = styled.span`
  font-size: 16px;
  margin-right: 8px;
  justify-self: baseline;
`;

const PostContentWrapper = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 550px;
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
  text-decoration: unset !important;
`;
