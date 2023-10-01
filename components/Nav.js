import Link from "next/link";
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">/Avidu</Link>
      <ul className={styles.links}>
        <li>
          <Link href="/website-design">Which,</Link>
        </li>

        <li>
          <Link href="/projects">Works,</Link>
        </li>

        <li>
          <Link href="/about-me">Me.</Link>
        </li>
      </ul>
    </nav>
  );
}
