import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_content", "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = {};
  post.data = data;
  post.content = content;
  post.slug = realSlug;
  post.year = slug.match(/\d\d\d\d/)[0];

  return post;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.published < post2.published ? -1 : 1));

  return posts;
}
