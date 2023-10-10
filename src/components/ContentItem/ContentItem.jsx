import { Link } from "react-router-dom";
import styles from "./ContentItem.module.css";

const ContentItem = (props) => {
  return (
    <div className={styles.item}>
      <Link to={props.item.link}>
        <img className={styles.backImg} src={props.item.imgUrl} alt={props.item.alt} />
        <div className={styles.content}>
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
          <p>Version: {props.item.version}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentItem;
