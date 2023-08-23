import styles from "./TopButtons.module.css";

function TopButtons(props) {
  return (
    <div className={styles.topButtons}>
      <div className={styles.backButtonBlock}>
        <div className={styles.backButton}>{"<"} Back</div>
      </div>
      <div
        className={styles.forBurgerMenu}
        onClick={() => {
          props.setMenuActive(!props.menuActive);
        }}
      >
        <div className={styles.menuButton}></div>
        <div className={styles.menuButton}></div>
        <div className={styles.menuButton}></div>
      </div>
    </div>
  );
}

export default TopButtons;
