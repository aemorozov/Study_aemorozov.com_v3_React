import toTop from "../../functions/toTop/toTop";
import styles from "./Post.module.css";
import { devPosts } from "../../data/data";

export const Post = (props) => {
  toTop();
  return (
    <div className={styles.content__block}>
      <div className={styles.top__block}>
        <img src={window.location.origin + "/" + devPosts[props.id].imgUrl} className={styles.img__block} />
        <div className={styles.info__block}>
          <h1 className={styles.h1__title}>
            {devPosts[props.id].title}
            <span className={styles.date}>{devPosts[props.id].date}</span>
          </h1>
          <div className={styles.text__block}>
            {devPosts[props.id].text}
            {devPosts[props.id].fullJSX()}
          </div>
        </div>
      </div>
    </div>
  );
};
