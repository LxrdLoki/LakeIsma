import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header/header";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div className="container">
        <div className="image">
          <img src="jessie.png" alt="jessie" />
        </div>
        <Button variant="contained">Contained</Button>
      </div>
    </section>
  );
}
