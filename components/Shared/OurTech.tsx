import React from "react";
import {
  BiLogoAws,
  BiLogoCss3,
  BiLogoFlutter,
  BiLogoGoogleCloud,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import {
  TbBrandAws,
  TbBrandGoogle,
  TbBrandKotlin,
  TbBrandLaravel,
  TbBrandNextjs,
  TbBrandSvelte,
  TbBrandSwift,
} from "react-icons/tb";

interface OurTechProps {}

const OurTech: React.FC<OurTechProps> = () => {
  return (
    <section id="our-tech" className="px-5 my-20">
      <div className="bg-gray-1000 rounded-3xl shadow p-8 md:p-10 max-w-6xl mx-auto">
        <h4 className="text-2xl font-semibold mb-10">
          Technologies At Your Service
        </h4>
        <div className="tech-row">
          <h5 className="tech-header">Mobile</h5>
          <ul className="tech-items">
            <li className="tech-item">
              <BiLogoFlutter /> Flutter
            </li>
            <li className="tech-item">
              <BiLogoReact /> React Native
            </li>
            <li className="tech-item">
              <TbBrandKotlin /> Kotlin
            </li>
            <li className="tech-item">
              <TbBrandSwift /> Swift
            </li>
          </ul>
        </div>
        <div className="tech-row">
          <h5 className="tech-header">Frontend</h5>
          <ul className="tech-items">
            <li className="tech-item">
              <BiLogoReact /> React JS
            </li>

            <li className="tech-item">
              <BiLogoTypescript /> Typescript
            </li>
            <li className="tech-item">
              <BiLogoHtml5 /> HTML5
            </li>
            <li className="tech-item">
              <BiLogoCss3 /> CSS
            </li>
            <li className="tech-item">
              <BiLogoVuejs /> VueJS
            </li>
            <li className="tech-item">
              <TbBrandSvelte /> Svelte
            </li>
          </ul>
        </div>
        <div className="tech-row">
          <h5 className="tech-header">Backend</h5>
          <ul className="tech-items">
            <li className="tech-item">
              <BiLogoPhp /> PHP
            </li>
            <li className="tech-item">
              <BiLogoPython /> Python
            </li>
            <li className="tech-item">
              <BiLogoJava /> Java
            </li>
            <li className="tech-item">
              <BiLogoJavascript /> JavaScript
            </li>
            <li className="tech-item">
              <TbBrandSwift /> Swift
            </li>
            <li className="tech-item">
              <BiLogoAws /> AWS
            </li>
            <li className="tech-item">
              <BiLogoGoogleCloud /> GCP
            </li>
          </ul>
        </div>
        <div className="tech-row">
          <h5 className="tech-header">Frameworks</h5>
          <ul className="tech-items">
            <li className="tech-item">
              <TbBrandLaravel /> Laravel
            </li>
            <li className="tech-item">
              <BiLogoPython /> FastApi
            </li>
            <li className="tech-item">
              <BiLogoNodejs /> NodeJS
            </li>
            <li className="tech-item">
              <BiLogoSpringBoot /> Spring Boot
            </li>
            <li className="tech-item">
              <TbBrandSwift /> Swift UI
            </li>
            <li className="tech-item">
              <TbBrandNextjs /> NextJS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTech;
