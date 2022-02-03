import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";

const Technology: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head />
      <div className={styles.technology}>
        <Navigation open={open} close={() => setOpen(false)} />
      </div>
    </>
  );
};

export default Technology;
