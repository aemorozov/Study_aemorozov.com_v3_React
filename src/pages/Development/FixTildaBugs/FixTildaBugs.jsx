import toTop from "../../../functions/toTop/toTop";
import styles from "./FixTildaBugs.module.css";
import { devPosts } from "../../../data/data";

export const FixTildaBugs = () => {
  toTop();
  return (
    <div className={styles.content__block}>
      <div className={styles.top__block}>
        <img src={window.location.origin + "/" + devPosts[0].imgUrl} className={styles.img__block} />
        <div className={styles.info__block}>
          <h1 className={styles.h1__title}>
            {devPosts[0].title}
            <span className={styles.date}>{devPosts[0].date}</span>
          </h1>
          <div className={styles.text__block}>
            {devPosts[0].text}
            {devPosts[0].fullText()}
          </div>
        </div>
      </div>
    </div>
  );
};
