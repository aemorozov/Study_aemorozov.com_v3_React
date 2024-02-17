import styles from "./TopButtons.module.css";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import toTop from "../../functions/toTop/toTop";

function TopButtons(props) {
  return (
    <div className={props.menuActive ? styles.topButtons + " " + styles.topButtonsAbsolute : styles.topButtons}>
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
          toTop();
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
