

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
    <form className="flex flex-col gap-[50px] p-20 md:p-[30px] md:gap-[25px]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[30px] md:gap-5">
        <div className="flex gap-[30px] max-w-[916px] md:flex-col md:gap-5">
          <div className="flex-1 flex flex-col gap-4 max-w-[443px] w-full md:max-w-full">
            <h5 className="font-medium text-lg m-0 md:text-sm">First Name</h5>
            <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleChange} placeholder="Enter First Name" className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm" />
          </div>
          <div className="flex-1 flex flex-col gap-4 max-w-[443px] w-full md:max-w-full">
            <h5 className="font-medium text-lg m-0 md:text-sm">Last Name</h5>
            <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleChange} placeholder="Enter Last Name" className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm" />
          </div>
        </div>
        <div className="flex gap-[30px] max-w-[916px] md:flex-col md:gap-5">
          <div className="flex-1 flex flex-col gap-4 max-w-[443px] w-full md:max-w-full">
            <h5 className="font-medium text-lg m-0 md:text-sm">Email</h5>
            <input type="text" name="email" value={formData.email || ""} onChange={handleChange} placeholder="Enter your Email" className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm" />
          </div>
          <div className="flex-1 flex flex-col gap-4 max-w-[443px] w-full md:max-w-full">
            <h5 className="font-medium text-lg m-0 md:text-sm">Phone</h5>
            <input type="text" name="phone" value={formData.phone || ""} onChange={handleChange} placeholder="Enter your Number" className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-medium text-lg m-0 md:text-sm">Subject</h5>
          <input type="text" name="subject" value={formData.subject || ""} onChange={handleChange} placeholder="Enter your Subject" className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm max-w-[916px] h-[68px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-medium text-lg m-0 md:text-sm">Message</h5>
        <textarea name="message" value={formData.message || ""} onChange={handleChange} placeholder="Enter your Message here..." className="p-6 text-lg border border-[#F1F1F3] rounded-lg bg-[#f9f9f9] w-full m-0 md:p-5 md:text-sm max-w-[916px] h-[170px]" />
      </div>
      <button className="w-fit px-7 py-3.5 bg-[#ff9000] text-white font-semibold text-base border border-black rounded-lg self-center cursor-pointer hover:bg-[#e88000] md:w-full md:p-5 md:text-sm transition-colors duration-300" type="submit">Send Your Message</button>
    </form>
  );
};

export default ContactForm;
