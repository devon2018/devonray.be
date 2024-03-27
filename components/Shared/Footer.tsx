import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsStackOverflow,
  BsTwitterX,
} from "react-icons/bs";
import { SiStackshare } from "react-icons/si";

interface FooterProps {
  lang?: "en" | "nl" | "fr";
}

const services = {
  en: [
    "Mobile app development",
    "Web Development",
    "DevOps & Infrastructure Development",
    "AI Development",
    "Custom Software Development",
  ],
  nl: [
    "Ontwikkeling van mobiele apps",
    "Webontwikkeling",
    "DevOps & Infrastructuurontwikkeling",
    "AI ontwikkeling",
    "Ontwikkeling van maatwerksoftware",
  ],
  fr: [
    "Développement d'applications mobiles",
    "Développement web",
    "DevOps et développement d'infrastructure",
    "Développement en intelligence artificielle",
    "Développement de logiciels sur mesure ",
  ],
};

const mainServiceTitle = {
  en: "Main Services",
  nl: "Hoofddiensten",
  fr: "Principaux services",
};

const emailAddress = {
  en: "hello@devonray.be",
  nl: "hallo@devonray.be",
  fr: "bonjour@devonray.be",
};

const Footer: React.FC<FooterProps> = ({ lang = "en" }) => {
  return (
    <footer className="px-5 bg-primary py-10 text-white">
      <div className="max-w-6xl mx-auto md:grid grid-cols-3 gap-8 space-y-10 md:space-y-0">
        <div>
          <h5 className="text-xl font-semibold">Devon Ray</h5>
          <address className="my-5">
            Uitbreidingstraat 84, <br />
            Berchem, Antwerpen <br />
            2600 <br />
            België
          </address>
          <a href="tel:+447577038482" className="block my-3">
            +44 7577 038 482
          </a>
          <a href={`mailto:${emailAddress[lang]}`} className="block my-3">
            {emailAddress[lang]}
          </a>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">
            {mainServiceTitle[lang]}
          </h5>
          <ul className="list-disc ml-3 space-y-2 font-semibold">
            {services[lang].map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-4xl grid grid-cols-3 gap-8">
            <BsGithub />
            <BsLinkedin />
            <BsInstagram />
            <BsTwitterX />
            <SiStackshare />
            <BsStackOverflow />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
