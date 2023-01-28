import { MetaPost } from "components";

export default function Head({ params }: { params: { slug: string[] } }) {
  return <MetaPost params={params} />;
}
