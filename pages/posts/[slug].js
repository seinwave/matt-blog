import React from "react";
import { prepareMDX } from "../../lib/functions/prepare-mdx";
// import { bundleMDX } from "mdx-bundler";
import { Content } from "../../lib/components/rendered-mdx";
// import markdownToHtml from "../../lib/functions/markdownToHtml.js";
import { getPostBySlug, getAllPosts } from "../../lib/data/posts-api";

export async function getStaticProps({ params }) {
  const post = JSON.parse(JSON.stringify(getPostBySlug(params.slug)));

  const mdxSource = `
  ---
  title: Example Post
  published: 2021-02-13
  description: This is some description
  ---
  
  # Wahoo

  Here's a **neat** demo:
  `;

  //todo: ISSUES - can't get bundleMDX() to work. And mdx-bundler may not support styled-components. Yuh-oh.
  //todo: It may be time to just do plain on markdown, until mdx-bundler / mdx-remote embrace wider styled-components support.

  const content = await prepareMDX(mdxSource, {});

  return {
    props: {
      post: {
        ...post,
        content,
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
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ source }) {
  return <Content source={source}></Content>;
}
