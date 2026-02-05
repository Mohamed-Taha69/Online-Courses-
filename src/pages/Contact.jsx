import React from "react";

import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import ContactButtons from "../components/ContactButtons";

const Contact = () => {
  return (
    <section className="w-full mx-auto">
      <ContactHeader />
      <div className="grid grid-cols-[2fr_1fr] md:grid-cols-1 max-w-[1596px] mx-auto my-[100px] bg-white rounded-xl md:my-[50px] md:mx-auto md:gap-0 md:p-0">
        <ContactForm />
        <ContactButtons />
      </div>
    </section>
  );
};
export default Contact;