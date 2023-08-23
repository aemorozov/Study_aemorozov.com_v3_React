import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={classes.navItems}>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className={setActive}>
          Portfolio
        </NavLink>
        <NavLink to="/contacts" className={setActive}>
          Contacts
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
      </div>
      <div className={classes.closeButton}></div>
    </>
  );
}

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export default Header;
