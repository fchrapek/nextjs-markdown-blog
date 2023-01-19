import Header from "./Header"
// import Meta from './Meta'
import styles from '../styles/Layout.module.scss'
// import { NextSeo } from 'next-seo';

export default function Layout(props) {
  return (
    <>
      {/* <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      /> */}
      {/* <NextSeo
        title={props.siteTitle}
        description="Home page description of the page"
      /> */}
      <div className={styles.layout}>
        <Header siteTitle={props.siteTitle} />

        <main className={styles.layout__container}>
          {props.children}
        </main>
      </div>
    </>
  )
}
