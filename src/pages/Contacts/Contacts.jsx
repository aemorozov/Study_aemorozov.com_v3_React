import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";
import styles from "./Contacts.module.css";

function Contacts(props) {
  toTop();
  return (
    <>
      <HeadMeta page={props.page} />
      {/* <h1 className="h1 alignCenter">{props.page.name}</h1>
      <p className="alignCenter">Content is in developing</p> */}
      <div className={styles.big__block}>
        <div className={styles.left__block}></div>
        <div className={styles.right__block}>
          <div className={styles.text__block}>
            <p>Email:</p>
            <p>Telegram:</p>
            <p>Linkedin:</p>
          </div>
          <form className={styles.contact__form}>
            <h4>Contact form</h4>
            <p>
              Name:
              <br />
              <input type="text" />
            </p>
            <p>
              Email:
              <br />
              <input type="email" />
            </p>
            <p>
              Message:
              <br />
              <input type="text" />
            </p>
            <button>Send message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
