import styles from "./Title.module.css";

export default function Title({ big, small }) {
    return (
        <h2 className={styles.title}>
            <span className={styles.big}>{big}</span>
            <span className={styles.small}>{small}</span>
        </h2>
    )
}