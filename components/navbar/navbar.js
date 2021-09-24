import React from "react";
import styles from "../../styles/navigation.module.css";
import Image from "next/image";
import { navigation } from "../../constants/api";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const onclicklink = (link) => {
    router.push(link);
  };
  return (
    <div className={styles.navigation}>
      <div className={styles.image} onClick={() => onclicklink("/")}>
        <Image src={"/g45.png"} width={45} height={45} alt="img" />
      </div>

      {navigation.map((item) => (
        <h3
          key={item.key}
          className={styles.text}
          onClick={() => onclicklink("/login")}
        >
          {item.text}
        </h3>
      ))}
    </div>
  );
};

export default Navbar;
