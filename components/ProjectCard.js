import Link from "next/link";
import styles from "./ProjectCard.module.css"

export default function ProjectCard({ title, slug, id }) {
  return (
    <li key={id} className={styles.projectItem}>
      <Link href={`/projects/${slug}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
}
