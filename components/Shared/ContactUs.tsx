import React from "react";
import ContactForm from "./ContactForm";

interface ContactUsProps {
  title: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  title = "Do you want to start a project?",
}: ContactUsProps) => {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="max-w-6xl mx-auto md:grid grid-cols-3 gap-6 w-full space-y-6 md:space-y-0">
        <div className="col-span-3 bg-gray-950 rounded-2xl shadow p-10">
          <h4 className="text-xl font-semibold">{title}</h4>
          <ContactForm />
        </div>
        {/* <div className="bg-primary p-6 rounded-2xl shadow md:rounded-tr-[50px] text-white">
          adsf
        </div> */}
      </div>
    </section>
  );
};

export default ContactUs;
