"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Grid, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

import rdImage from "../../public/projects/redi-bg.jpg";
import dbxImage from "../../public/projects/dbx-image.jpg";
import khumbulaImage from "../../public/projects/khumbula.webp";
import unumImage from "../../public/projects/unum.png";

interface PortfolioProps {
  sectionId?: string;
  title?: string;
  subtitle?: string;
  lang: "en" | "nl" | "fr";
}

const projects = [
  {
    slug: "khumbula",
    title: "Khumbula",
    image: khumbulaImage,
    subline: {
      en: "E-Commerce, Laravel, React, AWS",
      nl: "E-Commerce, Laravel, React, AWS",
      fr: "E-Commerce, Laravel, React, AWS",
    },
    externalUrl: "https://khumbula.co.uk",
  },
  {
    slug: "readers-digest-uk",
    title: "Reader's Digest",
    image: rdImage,
    subline: {
      en: "Publishing, Laravel, React, Flutter, AWS",
      nl: "Publishing, Laravel, React, Flutter, AWS",
      fr: "Publishing, Laravel, React, Flutter, AWS",
    },
    externalUrl: "https://readersdigest.co.uk",
  },
  {
    slug: "dirtbikexpress",
    title: "DirtbikeXpress",
    image: dbxImage,
    subline: {
      en: "E-Commerce, Laravel, VueJS, AWS",
      nl: "E-Commerce, Laravel, VueJS, AWS",
      fr: "E-Commerce, Laravel, VueJS, AWS",
    },
    externalUrl: "https://dirtbikexpress.co.uk",
  },
  {
    slug: "unum-bh",
    title: "Unum Behavioral Health",
    image: unumImage,
    subline: {
      en: "Insurance, React Native",
      nl: "Insurance, React Native",
      fr: "Insurance, React Native",
    },
    externalUrl: "https://behavioralhealth.unum.com/",
  },
];

const Portfolio: React.FC<PortfolioProps> = ({
  sectionId = "portfolio",
  title = "Latest Projects",
  subtitle = "",
  lang,
}) => {
  return (
    <section id={sectionId} className="px-5 bg-gray-900 py-10 pb-20">
      <div className="relative">
        <Swiper
          breakpoints={{
            576: {
              spaceBetween: 40,
              slidesPerView: 1.5,
            },
            700: {
              spaceBetween: 40,
              slidesPerView: 2.5,
            },
            1018: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
          grid={{
            rows: 1,
            fill: "row",
          }}
          modules={[Grid, Mousewheel]}
          mousewheel={{
            enabled: true,
            releaseOnEdges: true,
          }}
        >
          <div slot="container-start">
            <SwiperControls />
          </div>

          <SwiperSlide className="aspect-square">
            <div className="flex items-start justify-center flex-col w-full h-full pl-20 text-left">
              <h3 className="text-3xl font-semibold text-left">{title}</h3>
              <p className="">{subtitle}</p>
            </div>
          </SwiperSlide>

          {projects.map((project) => (
            <SwiperSlide
              className="group relative aspect-square"
              key={project.slug}
            >
              <Link
                href={project.externalUrl}
                className=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={project.image}
                  alt={project.subline[lang]}
                  className="object-cover w-full h-full"
                />
                <div className="md:opacity-0 group-hover:opacity-100 flex w-full h-full top-0 left-0 bg-black/50 absolute transition-all ease-in-out items-center justify-center flex-col text-white">
                  <h4 className="text-xl lg:text-3xl font-semibold tracking-wider uppercase text-center">
                    {project.title}
                  </h4>
                  <p className="lg:text-xl">{project.subline[lang]}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SwiperControls = () => {
  const swiper = useSwiper();

  return (
    <div className="flex text-3xl justify-end items-center w-full mb-10">
      <button type="button" onClick={() => swiper.slidePrev()}>
        <HiOutlineArrowSmLeft />
      </button>
      <button type="button" onClick={() => swiper.slideNext()}>
        <HiOutlineArrowSmRight />
      </button>
    </div>
  );
};

export default Portfolio;
