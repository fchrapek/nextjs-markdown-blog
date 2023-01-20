import Image from 'next/image'
import styles from './page.module.scss'
import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import Link from "next/link";


export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "slug"]);
  // const recentPosts = posts.slice(0, 2);

  return (
    <main>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostPreview key={post.title} post={post} />
        ))}
      </div>
    </main>
  )
}
