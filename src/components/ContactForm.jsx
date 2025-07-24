import styles from '../components/Contact.module.css';

import React, { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", 
    subject: "", 
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    alert("Submitted data: \n" + JSON.stringify(formData, null, 10));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit}>
      <div className={styles["elements"]}>
        <div className={styles["elements-1"]}>
          <div className={styles["element-1-1"]}>
            <h5>First Name</h5>
            <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleChange} placeholder="Enter First Name" />
          </div>
          <div className={styles["element-1-2"]}>
            <h5>Last Name</h5>
            <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleChange} placeholder="Enter Last Name" />
          </div>
        </div>
        <div className={styles["elements-2"]}>
          <div className={styles["element-2-1"]}>
            <h5>Email</h5>
            <input type="text" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Enter your Email" />
          </div>
          <div className={styles["element-2-2"]}>
            <h5>Phone</h5>
            <input type="text" name="phone" value={formData.phone || ""} onChange={handleChange} placeholder="Enter your Number" />
          </div>
        </div>
        <div className={styles["element-3"]}>
          <h5>Subject</h5>
          <input type="text" name="subject" value={formData.subject || ""} onChange={handleChange} placeholder="Enter your Subject" />
        </div>
      </div>
      <div className={styles["text-container-2"]}>
        <h5>Message</h5>
        <textarea name="message" value={formData.message || ""} onChange={handleChange} placeholder="Enter your Message here..." />
      </div>
      <button className={styles["send-button"]} type="submit">Send Your Message</button>
    </form>
  );
};

export default ContactForm;
