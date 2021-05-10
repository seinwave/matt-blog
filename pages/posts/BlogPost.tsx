import * as React from "react";
import styled from "styled-components";
import BlogImage from "../../lib/components/blog-post/BlogImage";
import { getMDXComponent } from "mdx-bundler/client";

type PostProps = {
  code: string;
  frontmatter: string;
};

function BlogPost({ code, frontmatter }: PostProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Wrapper>
      <Title>How I Poasty My Toasty</Title>
      <Byline>
        <PublishedPlace>Brooklyn, NY</PublishedPlace>•
        <PublishedDate>Oct 22, 2021</PublishedDate>
      </Byline>
      <BodyWrapper>
        <Body>
          Clicky clicky clacky clacky click click bish Clicky clicky clacky
          clacky click click bishClicky clicky clacky clacky click click
          bishClicky clicky clacky clacky click click bishClicky clicky clacky
          clacky click click bishClicky clicky clacky clacky click click
          bishClicky clicky clacky clacky click click bishClicky clicky clacky
          clacky click click bishClicky clicky clacky clacky click click
          bishClicky clicky clacky clacky click click bishClicky clicky clacky
          clacky click click bishClicky clicky clacky clacky click click
          bishClicky clicky clacky clacky click click bishClicky clicky clacky
          clacky click click bish
          <BlogImage
            src={
              "https://www.sickchirpse.com/wp-content/uploads/2019/01/Tony-Soprano.jpg"
            }
          ></BlogImage>
          <p>
            Clicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click
            bishClicky clicky clacky clacky click click bishClicky clicky clacky
            clacky click click bishClicky clicky clacky clacky click click bish
          </p>
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
}

export default BlogPost;

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

const Body = styled.div`
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
`;
