
import Container from "../../components/Container";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
// import { formatDate, shimmer, toBase64 } from "utils";

interface ISingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<ISingleBlogPost["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function SingleBlogPost({ params }: ISingleBlogPost) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return (
    <>

      <Container className="">
        {post.body.raw}
      </Container>
    </>
  );
}
