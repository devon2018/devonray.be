import Intro from "@/components/Shared/Intro";
import AboutUs from "@/components/Shared/About";
import OurServices from "@/components/Shared/OurServices";
import ContactUs from "@/components/Shared/ContactUs";
import Testimonials from "@/components/Shared/Testimonials";
import OurTech from "@/components/Shared/OurTech";
import Portfolio from "@/components/Shared/Portfolio";
import { Suspense } from "react";

import mobAppImage from "../../../../public/services/app-dev.jpg";
import webImage from "../../../../public/services/web-dev.jpg";
import devopsImage from "../../../../public/services/devops.jpg";
import customSoftwareImage from "../../../../public/services/software.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Software Developer - Devon Ray",
  description:
    "Expert freelance software developer (Laravel, Flutter, React) for Hire. Build scalable web & mobile apps. AWS, DevOps & Serverless Experience. Free Consultation!",
};

export default function Home() {
  return (
    <main className="">
      <Intro />
      <AboutUs>
        I{"'"}m Devon Ray, a freelance software developer. I have worked in the
        development and maintenance of a wide variety of projects and SAAS
        products in the start-up and scale-up level. Helping companies such as
        Overwatch Research, Goodtill, WhyBuy, ZoomEV and more thrive.
        <br />
        <br />I have over 9 years of experience developing web, mobile apps and
        desktop software using Laravel, React, and Flutter as well as serverless
        apis and integrations using AWS. I’ve also recently started managing
        development teams on projects and providing training to junior and
        mid-level developers.
      </AboutUs>
      <OurServices
        id="services"
        title="Key services I offer"
        services={[
          {
            title: "Mobile App Development",
            image: mobAppImage,
            description:
              "Bring your ideas to life with a custom mobile app! I specialize in developing user-friendly and engaging apps for both iOS and Android platforms; My expertise include building apps in Flutter and React Native as well as Native development in Swift and Kotlin",
          },
          {
            title: "Web App Development",
            image: webImage,
            description:
              "Using cutting-edge frameworks like React, Vue & Svelte, I build high performant web apps and platforms that help you reach a wider audience and take your business to the next level.",
          },
          {
            title: "Custom Software Development",
            image: customSoftwareImage,
            description:
              "Need a tech solution that fits like a glove? My expertise in Python, PHP and frameworks like Laravel, FastAPI and more allow me to design and develop custom software that streamlines your workflow and supercharges your productivity.",
          },
          {
            title: "DevOps and Infrastructure Development",
            image: devopsImage,
            description:
              "Building and maintaining the platform infrastructure is my jam! I leverage tools like AWS, Jira, Github, and Github Actions to implement DevOps practices that ensure smooth operation, scalability, and a streamlined development workflow.",
          },
        ]}
      />
      <Suspense>
        <Portfolio
          subtitle="A selection of projects I have lead recently"
          lang="en"
        />
      </Suspense>
      <OurTech />
      <Testimonials />
      <Suspense>
        <ContactUs />
      </Suspense>
    </main>
  );
}
