import { useState } from "react";
import type { NextPage } from "next";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";
import sequence from "../data.json";

const Technology: NextPage = () => {
  const [tech, setTech] = useState<"launch" | "port" | "capsule">("launch");
  const techs = sequence.technology[tech];

  return (
    <>
      <Head title={"Space Tourism - Technology"} />
      <div className={styles.technology}>
        <div className={styles.limit}>
          <Navigation />

          <main className={styles.main}>
            <h2 className={styles.section}>
              <span className={styles.number}>03</span>SPACE LAUNCH 101
            </h2>

            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <img
                  srcSet={`/img/technology/image-${tech}-landscape.jpg 768w,
                         /img/technology/image-${tech}-portrait.jpg 515w`}
                  sizes="(max-width: 1280px) 1280px,
                       515px"
                />
              </div>

              <div className={styles.container}>
                <div className={styles.radio}>
                  <input
                    type="radio"
                    name="tech"
                    id="launch"
                    value="launch"
                    checked={tech === "launch"}
                    onChange={() => setTech("launch")}
                  />
                  <label htmlFor="launch">
                    <p>1</p>
                  </label>

                  <input
                    type="radio"
                    name="tech"
                    id="port"
                    value="port"
                    checked={tech === "port"}
                    onChange={() => setTech("port")}
                  />
                  <label htmlFor="port">
                    <p>2</p>
                  </label>

                  <input
                    type="radio"
                    name="tech"
                    id="capsule"
                    value="capsule"
                    checked={tech === "capsule"}
                    onChange={() => setTech("capsule")}
                  />
                  <label htmlFor="capsule">
                    <p>3</p>
                  </label>
                </div>

                <div className={styles.description}>
                  <div className={styles.spacing}>
                    <p className={styles.terminology}>THE TERMINOLOGY...</p>
                    <p className={styles.name}>{techs.name}</p>
                  </div>

                  <p className={styles.techDescription}>{techs.description}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Technology;
