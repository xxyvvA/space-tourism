import { useState } from "react";
import styles from "./index.module.scss";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import clsx from "clsx";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  let path = router.pathname;

  return (
    <header className={styles.header}>
      <img src="/img/shared/logo.svg" className={styles.logo} alt="Space Travel Logo" />

      <svg className={styles.line} width="630.6" height="3">
        <path stroke="#979797" strokeWidth="1" d="M0,2 H630.6" />
      </svg>

      <button
        className={styles.button}
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

      <div className={styles.navContainer}>
        <nav className={clsx(styles.container, open && styles.open)}>
          <button className={styles.close} onClick={() => setOpen(false)}>
            <svg width="19.09" height="19.09">
              <path strokeWidth="3" stroke="#D0D6F9" d="M1.5,1.5 L17.59,17.59" />
              <path strokeWidth="3" stroke="#D0D6F9" d="M1.5,17.59 L17.59,1.5" />
            </svg>
          </button>

          <div className={styles.links}>
            <NextLink href="/">
              <a className={clsx(styles.section, path === "/" && styles.active)}>
                <span className={styles.number}>00</span>HOME
              </a>
            </NextLink>
            <NextLink href="/destination">
              <a className={clsx(styles.section, path === "/destination" && styles.active)}>
                <span className={styles.number}>01</span>DESTINATION
              </a>
            </NextLink>
            <NextLink href="/crew">
              <a className={clsx(styles.section, path === "/crew" && styles.active)}>
                <span className={styles.number}>02</span>CREW
              </a>
            </NextLink>
            <NextLink href="/technology">
              <a className={clsx(styles.section, path === "/technology" && styles.active)}>
                <span className={styles.number}>03</span>TECHNOLOGY
              </a>
            </NextLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
