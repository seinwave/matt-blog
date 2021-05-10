import React from "react";
import styled from "styled-components";
import BlogImage from "../../lib/components/blog-post/BlogImage";
import { getPostBySlug, getAllPosts } from "../../lib/data/posts-api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticProps({ params }) {
  const sourceObj = JSON.parse(JSON.stringify(getPostBySlug(params.slug)));

  console.log("RAW POST IS:", sourceObj.content);

  const mdxSource = await serialize(sourceObj.content);
  console.log(mdxSource);

  return {
    props: {
      post: {
        source: mdxSource,
        data: sourceObj.post.data,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = JSON.parse(JSON.stringify(getAllPosts()));

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.post.data.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ post }) {
  const { data, source } = post;
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Byline>
        <PublishedPlace>{data.place}</PublishedPlace>•
        <PublishedDate>Oct 22, 2021</PublishedDate>
      </Byline>
      <BodyWrapper>
        <Body>
          <MDXRemote {...source} components={components} />
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
}

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
  p: Text,
};
