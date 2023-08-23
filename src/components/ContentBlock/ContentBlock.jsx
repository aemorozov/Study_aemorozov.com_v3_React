import styles from "./ContentBlock.module.css";

function ContentBlock() {
  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <img className={styles.img} />
        <div className={styles.text} />
      </div>
    </div>
  );
}

export default ContentBlock;
