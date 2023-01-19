import Link from "next/link"
// import styles from '../styles/header.module.scss'

export default function Header() {
  type NavLink = {
    href: string;
    children: React.ReactNode;
  };

  const NavLink = ({ href, children }: NavLink) => {
    return (
      <Link className="hover:text-gray-300 hover:underline" href={href}>
        {children}
      </Link>
    );
  };

  return (
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
      >
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

