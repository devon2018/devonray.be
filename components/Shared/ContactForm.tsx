"use client";
import React from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending Message....");
    const formData = new FormData(event.target);

    formData.append("access_key", "94bb68d7-f860-44e6-b8d3-ccdec4a7b613");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully, I will get back to you asap");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Name*"
        required
        name="name"
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email address*"
        required
      />
      <input
        className="form-input"
        type="tel"
        placeholder="Phone number"
        name="number"
      />
      <textarea
        placeholder="Your Message"
        rows={3}
        className="form-input"
        required
        name="message"
      />
      <div>
        <button
          type="submit"
          className="bg-primary rounded-full px-10 py-4 text-white mt-10"
        >
          Send Message
        </button>

        <span className="ml-4 inline-block">{result}</span>
      </div>
    </form>

    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //   }}
    // >
    //   <input className="form-input" type="text" placeholder="Name*" />
    //   <input className="form-input" type="email" placeholder="Email address*" />
    //   <input className="form-input" type="tel" placeholder="Phone number" />
    //   <textarea placeholder="Your Message" rows={3} className="form-input" />
    //   <button
    //     type="submit"
    //     className="bg-primary rounded-full px-10 py-4 text-white mt-10"
    //   >
    //     Send Message
    //   </button>
    // </form>
  );
};

export default ContactForm;
