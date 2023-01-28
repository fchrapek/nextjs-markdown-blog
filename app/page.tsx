// import { useState } from "react";
import BlogSection from '@/components/BlogSection';
import { allPosts } from "contentlayer/generated";
// import { compareDesc } from "date-fns";

export default function BlogIndexPage() {
  const posts = allPosts.filter((post) => post.published)

  return (
    <BlogSection posts={posts} />
  );
}
