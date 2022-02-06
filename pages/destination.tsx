import { useState } from "react";
import type { NextPage } from "next";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";
import data from "../data.json";

const Destination: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [celestial, setCelestial] = useState<"moon" | "mars" | "europa" | "titan">("moon");
  const planet = data.destinations[celestial];

  return (
    <>
      <Head />
      <div className={styles.destination}>
        <div className={styles.limit}>
          <Navigation />

          <main className={styles.main}>
            <h2 className={styles.section}>
              <span className={styles.number}>01</span>PICK YOUR DESTINATION
            </h2>

            <div className={styles.content}>
              <img src={planet.images.png} alt={`The celestial body ${celestial}`} />

              <div className={styles.mainContent}>
                <nav className={styles.destinationNav}>
                  <input
                    type="checkbox"
                    id="moon"
                    name="planets"
                    value="moon"
                    checked={celestial === "moon"}
                    onChange={() => setCelestial("moon")}
                  />
                  <label htmlFor="moon">MOON</label>

                  <input
                    type="checkbox"
                    id="mars"
                    name="planets"
                    value="mars"
                    checked={celestial === "mars"}
                    onChange={() => setCelestial("mars")}
                  />
                  <label htmlFor="mars">MARS</label>

                  <input
                    type="checkbox"
                    id="europa"
                    name="planets"
                    value="europa"
                    checked={celestial === "europa"}
                    onChange={() => setCelestial("europa")}
                  />
                  <label htmlFor="europa">EUROPA</label>

                  <input
                    type="checkbox"
                    id="titan"
                    name="planets"
                    value="titan"
                    checked={celestial === "titan"}
                    onChange={() => setCelestial("titan")}
                  />
                  <label htmlFor="titan">TITAN</label>
                </nav>

                <div className={styles.celestial}>
                  <h3 className={styles.name}>{planet.name}</h3>
                  <p className={styles.description}>{planet.description}</p>
                </div>

                <div className={styles.data}>
                  <div className={styles.datum}>
                    <p className={styles.statistic}>AVG. DISTANCE</p>
                    <p>{planet.distance}</p>
                  </div>

                  <div className={styles.datum}>
                    <p className={styles.statistic}>EST. TRAVEL TIME</p>
                    <p>{planet.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Destination;
