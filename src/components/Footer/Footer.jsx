import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <Link to={"https://react.dev/"} target="_blank" className={styles.link}>
        Powered by <span>React</span>
      </Link>
    </div>
  );
}

export default Footer;
