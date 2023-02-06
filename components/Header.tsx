import { Container, Logo } from 'components';
import styles from '../styles/Header.module.scss'


export default function Header() {
  return (
    <Container
      as="header"
      className={styles['site-header']}
    >
      <Logo />
      <p className={styles['site-header__tagline']}>
        Blog o web devie & web designie
      </p>
    </Container>
  )
}
