import React from "react";
import Button from "../components/button/button";
import styles from "../styles/Home.module.css";

export default function Login() {
  return (
    
      <div className={styles.login}>
          <div>
          <h1 className={styles.text}>Login Page</h1>
        <a href="/dashboard">
          <Button text={"LOGIN"} />
        </a>
        </div>
      </div>
    
  );
}
