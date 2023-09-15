import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";
import styles from "./Contacts.module.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ContactUs } from "../../components/ContactUs/ContactUs";

function Contacts(props) {
  toTop();
  return (
    <>
      <HeadMeta page={props.page} />
      {emailjs.init("service_zld1lus")}
      <div className={styles.big__block}>
        <div className={styles.left__block}>
          <iframe
            title="Google Map"
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48767.30499528616!2d44.50585195534077!3d40.18778012864409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1694760333464!5m2!1sru!2sam"
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
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default Contacts;
