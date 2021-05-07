import React from "react";
// import { prepareMDX } from "../../lib/functions/prepare-mdx";
import markdownToHtml from "../../lib/functions/markdownToHtml.js";
import { getPostBySlug, getAllPosts } from "../../lib/data/posts-api";

export async function getStaticProps({ params }) {
  const post = JSON.parse(JSON.stringify(getPostBySlug(params.slug)));

  // this is what you're subbing w/ mdx-bundler
  const content = await markdownToHtml(post.content || "");

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

export default function Post({ post }) {
  return <>{post.content}</>;
}
