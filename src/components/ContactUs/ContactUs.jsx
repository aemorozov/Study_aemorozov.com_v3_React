import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactsUs.module.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    if (form.current[0].value.length < 3 || form.current[1].value.length < 3 || form.current[2].value.length < 3) {
      e.preventDefault();
      alert("Write Name, Email and Message, please.");
    } else {
      e.preventDefault();

      emailjs.sendForm("service_gv09w9z", "template_oc9k4qk", form.current, "tIKKRtE9Lvts5KJtQ").then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message sended. Thank you!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form className={styles.contact__form} ref={form} onSubmit={sendEmail}>
      <h4>Contact form</h4>
      <p>
        <label className={styles.label} htmlFor="name"></label>
        <input type="text" className={styles.input} name="user_name" id="name" placeholder="Name" />
      </p>
      <p>
        <label className={styles.label} htmlFor="email"></label>
        <input type="email" className={styles.input} name="user_email" id="email" placeholder="Email" />
      </p>
      <p>
        <label className={styles.label} htmlFor="message"></label>
        <textarea
          type="text"
          className={styles.input + " " + styles.message}
          name="message"
          id="message"
          placeholder="Message"
          rows="2"
        />
      </p>
      <input type="submit" className={styles.button} value="Send message" disabled={false} />
    </form>
  );
};
