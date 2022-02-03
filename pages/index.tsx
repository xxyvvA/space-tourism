import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import NextLink from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head />

      <div className={styles.index}>
        <Navigation open={open} close={() => setOpen(false)} />

        <header className={styles.header}>
          <img src="/img/shared/logo.svg" className={styles.logo} alt="Space Travel Logo" />

          <svg className={styles.line} width="630.6" height="3">
            <path stroke="#979797" strokeWidth="1" d="M0,2 H630.6" />
          </svg>

          <button
            className={styles.button}
            style={{ color: "white" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg width="24" height="21">
              <path stroke="#D0D6F9" strokeWidth="3" d="M0,1.5 H24" />
              <path stroke="#D0D6F9" strokeWidth="3" d="M0,10 H24" />
              <path stroke="#D0D6F9" strokeWidth="3" d="M0,19 H24" />
            </svg>
          </button>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <p className={styles.hook}>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let's face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we'll
              give you a truly out of this world experience!
            </p>
          </div>
          <NextLink href="/destination" passHref>
            <a className={styles.explore}>
              <div className={styles.hover}></div> EXPLORE
            </a>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default Home;
