import styles from "./page.module.css";
import Categories from "@/components/view/Categories";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Categories />
          <ul>
            <li>Welcome to Snab Mat</li>
            <li>Shopping made easy, fast, and secure</li>
          </ul>
        </main>
      </div>
    </>
  );
}
