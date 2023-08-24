import { Link } from "react-router-dom";
import styles from "./ContentBlock.module.css";

export function ContentBlockLeftImg(props) {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={props.data.imgUrl} alt={props.data.alt} />
      <div className={styles.text}>
        <Link to={props.data.link}>
          <h1 className={styles.h1}>{props.data.title}</h1>
        </Link>
        <p>{props.data.text}</p>
      </div>
    </div>
  );
}
