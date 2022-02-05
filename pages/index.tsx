import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import NextLink from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <div className={styles.index}>
        <Navigation />

        <main className={styles.main}>
          <div className={styles.content}>
            <p className={styles.hook}>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let&apos;s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax because
              we&apos;ll give you a truly out of this world experience!
            </p>
          </div>
          <NextLink href="/destination" passHref>
            <a className={styles.explore}>
              <div className={styles.spacing}>
                <div className={styles.hover}>EXPLORE</div>
              </div>
            </a>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default Home;
