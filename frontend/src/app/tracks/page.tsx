import Image from "next/image";
import styles from "./page.module.css";
import { Navigation } from "@/components/navbar/Navbar";
import RootLayout from "../layout";

export default function Tracks() {
  return (
    <main >
      {/* <RootLayout>
        <Navigation />
      </RootLayout> */}
      <RootLayout>
      Треки
      </RootLayout>
      
    </main>
  );
}
