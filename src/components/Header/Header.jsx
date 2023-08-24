import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const home = props.menuItems.home;
  const development = props.menuItems.development;
  const traveling = props.menuItems.traveling;
  const blog = props.menuItems.blog;
  const contacts = props.menuItems.contacts;

  return (
    <>
      <div className={styles.navItems}>
        <NavLink to={home.url} className={setActive}>
          {home.name}
        </NavLink>
        <NavLink to={development.url} className={setActive}>
          {development.name}
        </NavLink>
        <NavLink to={traveling.url} className={setActive}>
          {traveling.name}
        </NavLink>
        <NavLink to={blog.url} className={setActive}>
          {blog.name}
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
