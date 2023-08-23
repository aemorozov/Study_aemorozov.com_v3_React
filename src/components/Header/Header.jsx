import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  const home = props.pages.home;
  const portfolio = props.pages.portfolio;
  const contacts = props.pages.contacts;
  const about = props.pages.about;

  return (
    <>
      <div className={classes.navItems}>
        <NavLink to={home.url} className={setActive}>
          {home.name}
        </NavLink>
        <NavLink to={portfolio.url} className={setActive}>
          {portfolio.name}
        </NavLink>
        <NavLink to={contacts.url} className={setActive}>
          {contacts.name}
        </NavLink>
        <NavLink to={about.url} className={setActive}>
          {about.name}
        </NavLink>
      </div>
      {/* <div className={classes.closeButton}></div> */}
    </>
  );
}

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export default Header;
