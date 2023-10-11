import styles from "./TopButtons.module.css";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

function TopButtons(props) {
  return (
    <div className={styles.topButtons}>
      <Link to={props.backAddress} className={styles.backButtonBlock}>
        <div>
          <p className={!props.backButton ? styles.backButton : styles.backButton + " " + styles.opacity__1}>
            {"<"} Back
          </p>
        </div>
      </Link>
      <Title />
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
