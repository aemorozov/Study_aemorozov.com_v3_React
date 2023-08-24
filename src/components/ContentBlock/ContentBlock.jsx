import styles from "./ContentBlock.module.css";

export function ContentBlockLeftImg() {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={require("../../img/photo_2023-08-23_22-46-34.jpg")} />
      <div className={styles.text}>
        <h1>Development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos, ipsam, quisquam tempore saepe sed
          id inventore neque eveniet rem aut quasi facere quidem, autem tenetur perferendis! Quis, qui fuga! Libero
          voluptate corporis quaerat maiores ad porro neque sed sunt aliquid quo. Fugiat minima veniam magnam quasi
          culpa, doloribus repellat, pariatur ratione nesciunt, sequi quia! Quod nulla rerum magnam veniam.
        </p>
      </div>
    </div>
  );
}

export function ContentBlockRightImg() {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Traveling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos, ipsam, quisquam tempore saepe sed
          id inventore neque eveniet rem aut quasi facere quidem, autem tenetur perferendis! Quis, qui fuga! Libero
          voluptate corporis quaerat maiores ad porro neque sed sunt aliquid quo. Fugiat minima veniam magnam quasi
          culpa, doloribus repellat, pariatur ratione nesciunt, sequi quia! Quod nulla rerum magnam veniam.
        </p>
      </div>
      <img className={styles.img} src={require("../../img/photo_2023-08-23_22-46-32.jpg")} />
    </div>
  );
}
