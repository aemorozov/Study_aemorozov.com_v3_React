import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";
import styles from "./Contacts.module.css";
import { Link } from "react-router-dom";

function Contacts(props) {
  toTop();
  return (
    <>
      <HeadMeta page={props.page} />
      <div className={styles.big__block}>
        <div className={styles.left__block}>
          <iframe
            title="Google Map"
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48767.30499528616!2d44.50585195534077!3d40.18778012864409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1694760333464!5m2!1sru!2sam"
            style={{ border: 0, width: "100%", height: "100%", filter: "gray(0.2)" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.right__block}>
          <div className={styles.text__block}>
            <p>
              Email:{" "}
              <Link to="mailto:admin@aemorozov.com" className={styles.link}>
                admin@aemorozov.com
              </Link>
            </p>
            <p>
              Telegram:{" "}
              <Link to="https://t.me/ae_morozov" target="_blank" className={styles.link}>
                @ae_morozov
              </Link>
            </p>
            <p>
              Linkedin:{" "}
              <Link to="https://www.linkedin.com/in/aemorozov/" target="_blank" className={styles.link}>
                Aleksei Morozov
              </Link>
            </p>
          </div>
          <form className={styles.contact__form}>
            <h4>Contact form</h4>
            <p>
              <label className={styles.label} htmlFor="name"></label>
              <input type="text" className={styles.input} name="name" id="name" placeholder="Name" />
            </p>
            <p>
              <label className={styles.label} htmlFor="email"></label>
              <input type="email" className={styles.input} name="email" id="email" placeholder="Email" />
            </p>
            <p>
              <label className={styles.label} htmlFor="message"></label>
              <input type="text" className={styles.input} name="message" id="message" placeholder="Message" />
            </p>
            <button className={styles.button}>Send message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
