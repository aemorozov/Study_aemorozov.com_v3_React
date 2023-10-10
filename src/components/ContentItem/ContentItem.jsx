import { Link } from "react-router-dom";
import styles from "./ContentItem.module.css";

const ContentItem = (props) => {
  return (
    <div className={styles.item}>
      <Link to={props.item.link} target="_blank">
        <img className={styles.backImg} src={props.item.imgUrl} alt={props.item.alt} />
        <div className={styles.content}>
          <h2 className={styles.title}>{props.item.title}</h2>
          <p className={styles.description}>{props.item.description}</p>
          <p className={styles.description}>Version: {props.item.version}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentItem;
