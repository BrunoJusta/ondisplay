import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <Head>
        <title>OnDisplay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.blob}></div>
      <div className={styles.blobTwo}></div>
      <Footer />
    </div>
  );
}
