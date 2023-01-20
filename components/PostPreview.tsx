// import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PostPreview.module.scss";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <article className={styles.post}>
      <Link href={`/posts/${post.slug}`} className={styles.post__link}>
        {/* {post?.coverImage && (
          <Image
            alt={`cover image for ${post.title}`}
            src={post.coverImage}
            width={400}
            height={400}
            style={{ width: "100%" }}
          />
        )} */}

        <h3 className={styles.post__title}>
          {post.title}
        </h3>
        {/* <DateFormatter dateString={post.date} /> */}

        <p className={styles.post__excerpt}>
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
