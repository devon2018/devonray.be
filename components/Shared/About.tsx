import Image from "next/image";
import React from "react";
import me from "../../public/me.jpg";

interface AboutUsProps {
  id?: string;
  title?: string;
  children?: any;
  imageAlt?: string;
}
const AboutUs = ({
  id = "about-me",
  title = "About Me",
  imageAlt = "About Devon Ray - Freelance software developer",
  children = <></>,
}: AboutUsProps) => {
  return (
    <section id={id} className="p-5 bg-gray-950">
      <div className="max-w-6xl mx-auto md:grid grid-cols-2 gap-8 md:my-20 bg-black rounded-2xl shadow-sm overflow-hidden">
        <div className="relative h-full bg-green-200">
          <Image
            src={me}
            alt={imageAlt}
            className="h-full object-cover aspect-square"
          />
          <div className="w-full h-full top-0 left-0 absolute bg-gradient-to-r from-transparent  to-black/50"></div>
        </div>
        <div className="px-6 md:px-10 py-8 md:py-12 text-gray-400">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="md:text-lg font-medium">{children}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
