import React from "react";
import styles from "../../styles/navigation.module.css";
import Image from "next/image";
import { navigation } from "../../constants/api";

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <a className={styles.image} href="/">
        <Image src={"/g45.png"} width={45} height={45} />
      </a>

      {navigation.map((item) => (
        <a href="/login">
          <h3 key={item.key} className={styles.text}>
            {item.text}
          </h3>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
