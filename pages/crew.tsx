import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";
import crewmember from "../data.json";

const Crew: NextPage = () => {
  const [crew, setCrew] = useState<"douglas" | "mark" | "victor" | "anousheh">("douglas");
  const member = crewmember.crew[crew];

  return (
    <>
      <Head />
      <div className={styles.crew}>
        <div className={styles.limit}>
          <Navigation />

          <main className={styles.main}>
            <h2 className={styles.section}>
              <span className={styles.number}>02</span>MEET YOUR CREW
            </h2>

            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <img src={member.images.png} alt={`${member.role} ${member.name}`} />
              </div>

              <div className={styles.container}>
                <div className={styles.radio}>
                  <input
                    type="radio"
                    name="crew"
                    id="douglas"
                    value="douglas"
                    checked={crew === "douglas"}
                    onChange={() => setCrew("douglas")}
                  />
                  <label htmlFor="douglas">
                    <div className={styles.label}></div>
                  </label>

                  <input
                    type="radio"
                    name="crew"
                    id="mark"
                    value="mark"
                    checked={crew === "mark"}
                    onChange={() => setCrew("mark")}
                  />
                  <label htmlFor="mark">
                    <div className={styles.label}></div>
                  </label>

                  <input
                    type="radio"
                    name="crew"
                    id="victor"
                    value="victor"
                    checked={crew === "victor"}
                    onChange={() => setCrew("victor")}
                  />
                  <label htmlFor="victor">
                    <div className={styles.label}></div>
                  </label>

                  <input
                    type="radio"
                    name="crew"
                    id="anousheh"
                    value="anousheh"
                    checked={crew === "anousheh"}
                    onChange={() => setCrew("anousheh")}
                  />
                  <label htmlFor="anousheh">
                    <div className={styles.label}></div>
                  </label>
                </div>

                <div className={styles.crewDescription}>
                  <div className={styles.spacing}>
                    <p className={styles.position}>{member.role}</p>
                    <p className={styles.name}>{member.name}</p>
                  </div>

                  <p className={styles.bio}>{member.bio}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Crew;
