import Link from "next/link"
import ReactMarkdown from "react-markdown"
import styles from "../styles/BlogList.module.scss"
import Image from "next/image"

function truncateSummary(content) {
  return content.slice(0, 125).trimEnd() + '...'
}

function reformatDate(fullDate) {
  const date = new Date(fullDate)
  return date.toDateString().slice(4)
}

const BlogList = ({ allBlogs }) => {
  return (
    <ul className={styles.bloglist}>
      {allBlogs && allBlogs.length > 1 &&
        allBlogs.map(post => (
          <li key={post.slug} className={styles.bloglist__item}>
            <Link href={{ pathname: `/blog/${post.slug}` }} className={styles.bloglist__link}>
              <h2>{post.frontmatter.title}</h2>
              {/* <h3>{reformatDate(post.frontmatter.date)}</h3> */}
              <ReactMarkdown disallowedElements={["a"]}>
                {truncateSummary(post.markdownBody)}
              </ReactMarkdown>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default BlogList
