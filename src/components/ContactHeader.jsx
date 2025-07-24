import styles from '../components/Contact.module.css';

const ContactHeader = () => {
  return (
    <div className={styles["contact-container-1"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-left"]}>
          <h2 className={styles["contact-header"]}>Contact Us</h2>
        </div>
        <div className={styles["text-right"]}>
          <p className={styles["contact-paragraph"]}>
            Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
