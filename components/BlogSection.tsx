// import { formatDate, shimmer, toBase64 } from "utils";
import { Post } from "contentlayer/generated";
import { Container } from 'components';
import Link from 'next/link';

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <Container as="section">
      <div>
        {posts?.length ? (
          <>
            {posts.map((p) => (
              <div
                key={p._id}
              >
                <Link
                  href={`/${p.slugAsParams}`}
                >
                  <h2>
                    {p.title}
                  </h2>
                  <p >
                    {p.readingTime.text}
                  </p>
                  {p.tags?.length ? (
                    <div>
                      {p.tags.map((t, index) => (
                        <span
                          key={index}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </Link>
              </div>
            ))}
          </>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </Container>
  );
}
