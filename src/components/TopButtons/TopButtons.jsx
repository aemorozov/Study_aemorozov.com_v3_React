import styles from "./TopButtons.module.css";
import { useNavigate } from "react-router-dom";
import { changeBackButton, letsGoBack } from "../../functions/backButton/backButton";
import { Link } from "react-router-dom";
import { useState } from "react";

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
