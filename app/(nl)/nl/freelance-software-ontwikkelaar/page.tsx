import Intro from "@/components/Shared/Intro";
import OurTech from "@/components/Shared/OurTech";
import AboutUs from "@/components/Shared/About";
import ContactUs from "@/components/Shared/ContactUs";
import Portfolio from "@/components/Shared/Portfolio";
import Testimonials from "@/components/Shared/Testimonials";
import { Suspense } from "react";
import OurServices from "@/components/Shared/OurServices";
import mobAppImage from '../../../../public/services/app-dev.jpg';
import webImage from '../../../../public/services/web-dev.jpg';
import customSoftwareImage from '../../../../public/services/software.jpg';
import devopsImage from '../../../../public/services/devops.jpg';

export default function Home() {
  return (
    <main className="">
      <Intro
        sectionId="#inleiding"
        title="Freelance Software Ontwikkelaar"
        subtitle="Ik lever hoogwaardige softwareontwikkelingsdiensten die perfect aansluiten bij uw behoeften en leiden tot concrete bedrijfsresultaten."
        buttonTitle="Zullen we aan de slag"
      />
      <AboutUs id="over-mij" title="Over Mij">
        Ik ben Devon Ray, freelance software developer. Ik heb meegewerkt aan de
        ontwikkeling en het onderhoud van uiteenlopende projecten en
        SaaS-producten voor start-ups en scale-ups. Zo hielp ik bedrijven als
        Overwatch Research, Goodtill, WhyBuy, ZoomEV en anderen floreren.
        <br />
        <br />
        Ik heb meer dan 9 jaar ervaring in het ontwikkelen van web-, mobiele
        apps en desktopsoftware met behulp van Laravel, React en Flutter,
        evenals serverless API{"'"}s en integraties met behulp van AWS. Recent
        ben ik ook begonnen met het managen van ontwikkelteams op projecten en
        het opleiden van junior en mid-level developers.
      </AboutUs>
      <OurServices
        id="diensten"
        title="Belangrijkste diensten die ik aanbied"
        services={[
          {
            title: "Mobiele app ontwikkeling",
            image: mobAppImage,
            description:
              "Blaas je ideeën leven in met een mobiele app op maat! Ik ben expert in het ontwikkelen van gebruiksvriendelijke en boeiende apps voor zowel iOS als Android. Met mijn kennis van Flutter en React Native kan ik platformonafhankelijke apps bouwen, maar ik kan ook native apps ontwikkelen met Swift en Kotlin.",
          },
          {
            title: "Webapplicatie ontwikkeling",
            image: webImage,
            description:
              "Met behulp van de nieuwste frameworks zoals React, Vue.js & Svelte bouw ik supersnelle webapplicaties en platformen die je helpen een groter publiek te bereiken en je bedrijf naar een hoger niveau te tillen.",
          },
          {
            title: "Software ontwikkeling op maat",
            image: customSoftwareImage,
            description:
              "Op zoek naar een technische oplossing die als gegoten zit? Met mijn kennis van Python, PHP en frameworks zoals Laravel, FastAPI en meer, kan ik op maat gemaakte software ontwerpen en ontwikkelen die uw workflow stroomlijnt en uw productiviteit een boost geeft.",
          },
          {
            title: "DevOps en Infrastructuur ontwikkeling",
            image: devopsImage,
            description:
              "Het bouwen en onderhouden van de platforminfrastructuur, daar word ik blij van! Ik gebruik tools zoals AWS, Jira, Github en Github Actions om DevOps-praktijken te implementeren die zorgen voor een soepele werking, schaalbaarheid en een gestroomlijnde ontwikkelworkflow.",
          },
        ]}
      />

      <Suspense>
        <Portfolio
          title="Laatste werk"
          subtitle="Een selectie van projecten die ik recent heb geleid"
          lang="nl"
        />
      </Suspense>

      <OurTech />

      <Testimonials sectionId="recensies" title="Klantbeoordelingen" />
      <ContactUs title="Klaar om uw idee werkelijkheid te maken?" />
    </main>
  );
}
