import Link from "next/link";
import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
    return (
      <ul>
        <li>
          <Link className={styles.link} href="#">
            <span className="icon">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.646 15.646L19.293 13H3v-1h16.293l-2.647-2.646.707-.707 3.854 3.853-3.854 3.854z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
            </span>
            <span className="text">
                <h3>
                    portfolio websites
                </h3>
            </span>
          </Link>
        </li>
      </ul>
    );
}