import styles from "./Footer.module.css";
const y = new Date();
let year = y.getFullYear();

export default function Footer() {
    return (
        <footer>&copy;<span>{year}</span>/</footer>
    )
}