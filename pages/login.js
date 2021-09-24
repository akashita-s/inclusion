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
      <div>
        <h1 className={styles.text}>Login Page</h1>
        <div onClick={() => onclicklink("/dashboard")}>
          <Button text={"LOGIN"} />
        </div>
      </div>
    </div>
  );
}
