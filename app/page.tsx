"use client";
import { useState } from "react";
import { BlogSection, Container } from '@/components';
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import styles from './page.module.scss';

export default function BlogIndexPage() {
  // const posts = allPosts.filter((post) => post.published)

  const [searchValue, setSearchValue] = useState("");
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .filter((post) => {
      if (searchValue === "") {
        return post;
      } else if (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return post;
      }
    });

  return (
    <>
      <Container >
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="Wyszukaj artykuł"
          placeholder="Wyszukaj artykuł..."
          className={styles['search-bar']}
        />
      </Container>

      <BlogSection posts={posts} />
    </>
  );
}
