import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          <li>Welcome to Snab Mat</li>
          <li>Shopping made easy, fast, and secure</li>
        </ul>
      </main>
    </div>
  );
}
