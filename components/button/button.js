import styles from "../../styles/Home.module.css";

const Button = ({ text }) => {
    return (
      <div className={styles.bar}>
        <p className={styles.buttontext}> {text} </p>
      </div>
    );
  };

  export default Button