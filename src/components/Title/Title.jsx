import styles from "./Title.module.css";
import { Link } from "react-router-dom";

const Title = () => {
  if (document.URL.split("/")[3] === "") {
    return (
      <h1 className={styles.title}>
        <Link to={"/"} className={styles.titleLink} style={{ textTransform: "lowercase" }}>
          aemorozov.com
        </Link>
      </h1>
    );
  } else {
    return (
      <h1 className={styles.title}>
        <Link to={"/" + document.URL.split("/")[3]} className={styles.titleLink}>
          {document.URL.split("/")[3]}
        </Link>
      </h1>
    );
  }
};

export default Title;
