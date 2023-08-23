import classes from "./TopButtons.module.css";

function TopButtons() {
  return (
    <div className={classes.topButtons}>
      <div className={classes.backButtonBlock}>
        <div className={classes.backButton}>{"<"} Back</div>
      </div>
      <div className={classes.forBurgerMenu}>
        <div className={classes.menuButton}></div>
        <div className={classes.menuButton}></div>
        <div className={classes.menuButton}></div>
      </div>
    </div>
  );
}

export default TopButtons;
