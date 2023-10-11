import styles from "./Title.module.css";

const Title = () => {
  if (document.URL.split("/")[3] === "") {
    return <h1 className={styles.title}>Home</h1>;
  } else {
    return <h1 className={styles.title}>{document.URL.split("/")[3]}</h1>;
  }
};

export default Title;
