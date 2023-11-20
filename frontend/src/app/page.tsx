import Image from "next/image";
import styles from "./page.module.css";
import { Navigation } from "@/components/navbar/Navbar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main className={styles.main}>
      <RootLayout>
        {/* <Navigation /> */}
        <h1>Добро пожаловать</h1>
        <h2>Здесь собраны лучшие треки</h2>
      </RootLayout>
    </main>
  );
}
