import { Link } from "react-router-dom";
import styles from "./CV.module.css";

export const CV = () => {
  return (
    <>
      <h2 className="alignCenter" style={{ marginTop: 50 + "px", marginBottom: 0 }}>
        CV
      </h2>
      <div className={styles.big__block}>
        <Link to={"/AlekseiMorozov_eng.pdf"} style={{ fontSize: "16px", padding: 0 }} target="_blank">
          <div className={styles.CV__block__eng}>Download CV (Eng)</div>
        </Link>
        <Link to={"/AlekseiMorozov_rus.pdf"} style={{ fontSize: "16px", padding: 0 }} target="_blank">
          <div className={styles.CV__block__rus}>Download CV (Rus)</div>
        </Link>
      </div>
    </>
  );
};
