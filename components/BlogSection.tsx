// import { formatDate, shimmer, toBase64 } from "utils";
import { Post } from "contentlayer/generated";
import styles from '../styles/BlogSection.module.scss'
import { Container } from 'components';
import Link from 'next/link';

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <Container as="section">
      <div className={styles.posts}>
        {posts?.length ? (
          <>
            {posts.map((p) => (
              <Link
                key={p._id}
                href={`/${p.slugAsParams}`}
                className={styles.post}
              >
                <h2>
                  {p.title}
                </h2>
                <p >
                  {p.description}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <p>Brak wpisów</p>
        )}
      </div>
    </Container>
  );
}
