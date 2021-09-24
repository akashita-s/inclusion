import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar/navbar";
import { detailone, detailtwo, images } from "../constants/api";
import styles from "../styles/Home.module.css";
import Button from "../components/button/button"

const Minorities = ({ source, text, wd, ht }) => {
  return (
    <div className={styles.imagecontainer}>
      <div className={styles.imageone}>
        <Image src={source} height={wd} width={ht} />
      </div>
      <p className={styles.imagetext}>{text}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={`${styles.innercontainer} ${styles.bluecontainer}`}>
        <div className={styles.containerone}>
          <h1 className={styles.text}>What is Inclusion?</h1>
          <p className={styles.detail}>{detailone}</p>
          <Button text={"LEARN MORE"} />
        </div>
        <Image src={"/g503.png"} height={500} width={650} />
      </div>

      <div className={styles.innercontainer}>
        <div className={styles.containertwo}>
          <h1 className={styles.text}>Who do we need to Include in India?</h1>
          <p className={styles.detail}>{detailtwo}</p>
          <div className={styles.images}>
            {images.map((item) => (
              <Minorities
                source={item.source}
                text={item.text}
                wd={item.width}
                ht={item.height}
              />
            ))}
          </div>
          <Button text={"LEARN MORE"} />
        </div>
      </div>

      <div className={`${styles.innercontainer} ${styles.bluecontainer}`}>
      <div className={styles.containerone}>
          <h1 className={styles.text}>How can you make your Program more Inclusive?</h1>
          <p className={styles.detail}>{detailone}</p>
          
        </div>

        <div className={styles.whitecontainer}>
          <li>Inclusive Health learning Brief</li>
          <li>Inclusive Health learning Brief</li>
          <li>Inclusive Health learning Brief</li>
        </div>
      </div>

      <div className={styles.innercontainer}>
        <Image src={"/g82.png"} height={400} width={500} />
        <h1 className={styles.text}>Contact Us</h1>
      </div>

      <div className={`${styles.innercontainer} ${styles.bluecontainer}`}>
        .
      </div>
    </div>
  );
}
