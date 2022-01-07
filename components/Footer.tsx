import styles from "../styles/Home.module.css";

export default function Footer() {
  return <footer className={styles.footer}>{new Date().getFullYear()} &copy;</footer>;
}
