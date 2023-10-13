import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Header from "../components/header.js";
import HeroSection from "../components/heroSection.js";
import SearchComp from "../components/search.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Etherscan Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <Header />
        <SearchComp />
        <HeroSection />
      </section>
    </>
  );
}
