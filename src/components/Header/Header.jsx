import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const home = props.menuItems.home;
  const portfolio = props.menuItems.portfolio;
  const contacts = props.menuItems.contacts;
  const about = props.menuItems.about;

  return (
    <>
      <div className={styles.navItems}>
        <NavLink to={home.url} className={setActive}>
          {home.name}
        </NavLink>
        <NavLink to={portfolio.url} className={setActive}>
          {portfolio.name}
        </NavLink>
        <NavLink to={about.url} className={setActive}>
          {about.name}
        </NavLink>
        <NavLink to={contacts.url} className={setActive}>
          {contacts.name}
        </NavLink>
      </div>
    </>
  );
}

const setActive = ({ isActive }) => (isActive ? styles.active : "");

export default Header;
