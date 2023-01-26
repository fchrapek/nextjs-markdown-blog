// import { formatDate, shimmer, toBase64 } from "utils";
import { Post } from "contentlayer/generated";
import Container from "./Container";
import Link from 'next/link';

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <Container as="section" className="animate-in fade-in duration-500">
      <span className="font-mono text-sm font-semibold lowercase text-gray-500">
        scroll &rarr;
      </span>
      <div className="flex flex-row items-start justify-start space-x-6 overflow-x-auto pb-8">
        {posts?.length ? (
          <>
            {posts.map((p) => (
              <div
                key={p._id}
                className="group w-[330px] flex-none rounded-md border border-gray-300"
              >
                <Link
                  href={`/${p.slugAsParams}`}
                  className="group flex flex-col"
                >


                  <div className="flex h-80 flex-col items-start justify-between p-4">
                    <div className="flex flex-col">
                      <h2 className="h3 mt-1 inline font-bold leading-8">
                        {p.title}
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <p className="text-sm lowercase text-gray-500">
                        {p.readingTime.text}
                      </p>
                      {p.tags?.length ? (
                        <div className="space-x-1">
                          {p.tags.map((t, index) => (
                            <span
                              key={index}
                              className="inline-flex text-xs font-normal uppercase tracking-wider before:content-['#'] after:ml-1 after:content-['•'] last:after:content-none"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
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
