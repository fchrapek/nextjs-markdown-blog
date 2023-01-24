import { Post } from "contentlayer/generated";

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <>
      <div>
        {posts?.length ? (
          <>
            {posts.map((p) => (
              <div key={p._id}>
                {p.title}
              </div>
            ))}
          </>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </>
  );
}
