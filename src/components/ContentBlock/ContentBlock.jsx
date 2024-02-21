import { Link } from "react-router-dom";
import styles from "./ContentBlock.module.css";
import { forDevPage } from "./../../data/data";
import { Post } from "../Post/Post";

export function ContentBlockLeftImg(props) {
  return (
    <>
      <Link to={props.data.link}>
        <div className={styles.content}>
          <img className={styles.img} src={props.data.imgUrl} alt={props.data.alt} />
          <div className={styles.text}>
            <h1 className={styles.h1}>
              {props.data.title}
              <span className={styles.date}>{props.data.date}</span>
            </h1>
            <p className={styles.text__p}>{props.data.text}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
