import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import styles from "./page.module.scss";
// import markdownStyles from "./markdown-styles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <article className={[styles.post, ''].join(' ')} >
      <main>
        <header className={styles.post__header}>
          <h1 className={styles.post__title}>
            {post.title}
          </h1>
        </header>
        <div
          // className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />

      </main>
    </article>
  );
}
