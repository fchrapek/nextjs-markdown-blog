import Link from "next/link"
import styles from '../styles/Header.module.scss'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav
        className={styles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/" passHref>
          <h1>{props.siteTitle}</h1>
        </Link>
      </nav>
    </header>
  )
}

