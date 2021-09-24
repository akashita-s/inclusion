import React from "react";
import Button from "../components/button/button";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const onclicklink = (link) => {
    router.push(link);
  };
  return (
    <div className={styles.login}>
      <div className={styles.middle}>
        <h1 className={styles.text}>Login Page</h1>
        <div className={styles.inputarea}>
          <input className={styles.inputbox} placeholder="Enter your Name" />
          <input
            className={styles.inputbox}
            placeholder="Enter your Password"
            type="password"
          />
        </div>
        <div onClick={() => onclicklink("/dashboard")}>
          <Button text={"LOGIN"} />
        </div>
      </div>
    </div>
  );
}
