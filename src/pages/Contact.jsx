import React from "react";
import styles from '../components/Contact.module.css';
import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import ContactButtons from "../components/ContactButtons";

const Contact = () => {
  return (
    <section className={styles["Contact"]}>
      <ContactHeader />
      <div className={styles["contact-container-2"]}>
        <ContactForm />
        <ContactButtons />
      </div>
    </section>
  );
};
export default Contact;