"use client";
import React from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input className="form-input" type="text" placeholder="Name*" />
      <input className="form-input" type="email" placeholder="Email address*" />
      <input className="form-input" type="tel" placeholder="Phone number" />
      <textarea placeholder="Your Message" rows={3} className="form-input" />
      <button
        type="submit"
        className="bg-primary rounded-full px-10 py-4 text-white mt-10"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
