import { Container } from 'components';
import styles from '../styles/Footer.module.scss'


export default function Header() {
  return (
    <Container
      as="footer"
      className={styles['site-footer']}
    >
      <p className={styles['site-footer__tagline']}>
        happySpiders.pl
      </p>
    </Container>
  )
}
