import Image, { StaticImageData } from "next/image";
import React from "react";
import aboutUs from "../../public/freelance-mobile-app-developer.jpg";
import Link from "next/link";

interface ServicesPageProps {
  id: string;
  title: string;
  services: {
    image: StaticImageData;
    title: string;
    description: string;
  }[];
}

const OurServices = ({ id, title, services }: ServicesPageProps) => {
  return (
    <section id={id} className="px-5 my-10">
      <div className="max-w-6xl mx-auto md:grid grid-cols-4 gap-8 my-20">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold sticky top-[20vh]">{title}</h3>
        </div>
        <div className="col-span-3 grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceBlock key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ title, description, image }: any) => {
  return (
    <div className="bg-primary shadow-md rounded-2xl text-white overflow-hidden group">
      <Image
        src={image}
        alt={title}
        className="w-full object-cover max-h-[300px]"
      />
      <div className="p-6">
        <h4 className="font-semibold text-3xl">{title}</h4>
        <p className="mt-6">{description}</p>
        {/* <p className="w-fit px-5 py-2 rounded-full flex items-center justify-between bg-white text-black ">
          Speak to an expert
          <HiOutlineArrowRight className="ml-2 mr-1 group-hover:ml-3 group-hover:mr-0 transition-all ease-in-out" />
        </p> */}
      </div>
    </div>
  );
};

export default OurServices;
