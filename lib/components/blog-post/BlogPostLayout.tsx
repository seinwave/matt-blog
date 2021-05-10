import * as React from "react";
import styled from "styled-components";
import BlogImage from "./BlogImage";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXProvider } from "@mdx-js/react";

type PostProps = {
  code: string;
  frontmatter: string;
};

function BlogPostLayout({ code, frontmatter }: PostProps) {
  return (
    <MDXProvider components={components}>
      <Wrapper>
        <Title>How I Poasty My Toasty</Title>
        <Byline>
          <PublishedPlace>Brooklyn, NY</PublishedPlace>•
          <PublishedDate>Oct 22, 2021</PublishedDate>
        </Byline>
        <BodyWrapper>
          <Body>
            <Text>
              Clicky clicky clacky clacky click click bish Clicky clicky clacky
              clacky click click bishClicky clicky clacky clacky click click
              bishClicky clicky clacky clacky click click bishClicky clicky
              clacky clacky click click bishClicky clicky clacky clacky click
              click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bishClicky clicky clacky clacky
              click click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bishClicky clicky clacky clacky
              click click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bish
            </Text>
            <BlogImage
              src={
                "https://www.sickchirpse.com/wp-content/uploads/2019/01/Tony-Soprano.jpg"
              }
            ></BlogImage>
            <Text>
              Clicky clicky clacky clacky click click bish Clicky clicky clacky
              clacky click click bishClicky clicky clacky clacky click click
              bishClicky clicky clacky clacky click click bishClicky clicky
              clacky clacky click click bishClicky clicky clacky clacky click
              click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bishClicky clicky clacky clacky
              click click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bishClicky clicky clacky clacky
              click click bishClicky clicky clacky clacky click click bishClicky
              clicky clacky clacky click click bish
            </Text>
          </Body>
        </BodyWrapper>
      </Wrapper>
    </MDXProvider>
  );
}

export default BlogPostLayout;

const Wrapper = styled.div`
  margin-top: 75px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
`;

const Byline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 12px;
  font-size: 12px;
  font-weight: 300;
  margin-top: -24px;
  max-width: 360px;
`;

const PublishedPlace = styled.em``;

const PublishedDate = styled.em``;

const BodyWrapper = styled.div`
  margin-top: 64px;
  text-align: left;
  max-width: 600px;
`;

const Text = styled.p``;

const Body = styled.div`
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
`;

const components = {
  img: BlogImage,
  h2: Title,
  p: Text,
};
