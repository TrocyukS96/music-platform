import { Button } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Добро пожаловать </h1>
        <h3 className={styles.subTitle}>Здесь собраны лучшие треки</h3>
      </div>
    </main>
  );
}
