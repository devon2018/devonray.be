import Image from "next/image";
import React from "react";
import start from "../../public/freelance-mobile-app-developer.jpg";
import Link from "next/link";

const Intro = ({
  sectionId = "intro",
  title = "Freelance Software Developer",
  subtitle = "I provide high-quality software development services that meet your needs and drive business results.",
  buttonTitle = "Let's Talk",
}: {
  sectionId?: string;
  title?: string;
  subtitle?: string;
  buttonTitle?: string;
}) => {
  return (
    <section
      id={sectionId}
      className="h-screen w-screen relative z-10 bg-gradient-to-b from-gray-950 to-black"
    >
      <Image
        src={start}
        alt={title}
        className="h-screen w-screen object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-center flex-col text-white bg-black/70">
        <h1 className="text-4xl lg:text-6xl font-bold mb-2 max-w-3xl">
          {title}
        </h1>
        <p className="font-medium text-lg lg:text-xl max-w-xl my-6">
          {subtitle}
        </p>
        <Link
          className="bg-primary text-white px-10 py-4 block rounded-full shadow-xl hover:bg-primary-dark transition-all ease-in-out font-medium"
          href="#contact"
        >
          {buttonTitle}
        </Link>
      </div>
    </section>
  );
};

export default Intro;
