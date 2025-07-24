import styles from '../components/Contact.module.css';
import emailIcon from '../images/email.svg';
import phoneIcon from '../images/phone.svg';
import locationIcon from '../images/location.svg';
import fbIcon from '../images/fb.svg';
import xIcon from '../images/x.svg';
import inIcon from '../images/in.svg';

const ContactButtons = () => {
  return (
    <div className={styles["buttons-container"]}>
      <div className={styles["email-btn"]}>
        <button className={styles["icons"]}><img src={emailIcon} alt="email" /></button>
        <p className={styles["email-p"]}>support@skillbridge.com</p>
      </div>
      <div className={styles["phone-btn"]}>
        <button className={styles["icons"]}><img src={phoneIcon} alt="phone" /></button>
        <p className={styles["phone-p"]}>+91 00000 00000</p>
      </div>
      <div className={styles["location-btn"]}>
        <button className={styles["icons"]}><img src={locationIcon} alt="location" /></button>
        <p className={styles["location-p"]}>Some Where in the World</p>
      </div>
      <div className={styles["socials-btn"]}>
        <div className={styles["socials-row"]}>
          <button className={styles["socials-icons"]}><img src={fbIcon} alt="facebook" /></button>
          <button className={styles["socials-icons"]}><img src={xIcon} alt="twitter" /></button>
          <button className={styles["socials-icons"]}><img src={inIcon} alt="linkedin" /></button>
        </div>
        <p className={styles["socials-p"]}>Social Profiles</p>
      </div>
    </div>
  );
};

export default ContactButtons;
