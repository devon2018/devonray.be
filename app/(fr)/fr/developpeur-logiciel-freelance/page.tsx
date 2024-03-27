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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeur Logiciel Freelance - Devon Ray",
  description:
    "Développeur freelance expert (Laravel, Flutter, React) à votre service. Créez des applications web et mobiles évolutives. Expérience AWS, DevOps et serverless. Consultation gratuite!",
};


export default function Home() {
  return (
    <main className="">
      <Intro
        sectionId="#introduction"
        title="Développeur Logiciel Freelance"
        subtitle="Je vous accompagne dans la réussite de votre entreprise en proposant des services de développement de logiciels sur-mesure et performants."
        buttonTitle="Lançons-nous!"
      />

      <AboutUs id="a-propos-de-moi" title="À propos de moi">
        Je suis Devon Ray, développeur de logiciels freelance. J{"'"}ai
        participé au développement et à la maintenance d{"'"}une large variété
        de projets et de produits SaaS pour les startups et les scale-ups. J
        {"'"}ai ainsi aidé des entreprises comme Overwatch Research, Goodtill,
        WhyBuy, ZoomEV et bien d{"'"}autres à prospérer.
        <br />
        <br />J{"'"}ai plus de 9 ans d{"'"}expérience dans le développement d
        {"'"}applications web, mobiles et de bureau en utilisant Laravel, React
        et Flutter, ainsi que des API sans serveur et des intégrations utilisant
        AWS. J{"'"}ai également récemment commencé à gérer des équipes de
        développement sur des projets et à former des développeurs juniors et
        intermédiaires.
      </AboutUs>
      <OurServices
        id="services"
        title="Services clés que j'offre"
        services={[
          {
            title: "Développement d'applications mobiles",
            image: mobAppImage,
            description:
              "Donnez vie à vos idées grâce à une application mobile personnalisée ! Je suis spécialisé dans la création d'applications conviviales et captivantes pour les plateformes iOS et Android. Je maîtrise parfaitement Flutter et React Native pour le développement multi-plateforme, ainsi que Swift et Kotlin pour un développement natif optimal.",
          },
          {
            title: "Développement d'applications Web",
            image: webImage,
            description:
              "Grâce à des frameworks de pointe comme React, Vue.js et Svelte, je crée des applications et plateformes web ultra-performantes qui vous aideront à toucher un public plus large et à propulser votre entreprise vers de nouveaux sommets.",
          },
          {
            title: "Développement de logiciels sur mesure",
            image: customSoftwareImage,
            description:
              "Besoin d'une solution technique sur mesure qui vous corresponde parfaitement ? Mon expertise en Python, PHP et en frameworks comme Laravel et FastAPI (entre autres !) me permet de concevoir et de développer des logiciels personnalisés qui optimisent votre flux de travail et décuplent votre productivité.",
          },
          {
            title: "Développement DevOps et d'infrastructure",
            image: devopsImage,
            description:
              "Créer et maintenir l'infrastructure de votre plateforme, c'est mon dada ! J'utilise des outils comme AWS, Jira, Github et Github Actions pour mettre en œuvre des pratiques DevOps qui garantissent un fonctionnement fluide, une évolutivité et un flux de développement rationalisé.",
          },
        ]}
      />

      <Suspense>
        <Portfolio
          title="Derniers travaux"
          subtitle="Une sélection de projets que j'ai récemment dirigés"
          lang="fr"
        />
      </Suspense>
      <OurTech />

      <Testimonials sectionId="avis" title="Avis Clients" />
      <ContactUs title="Prêt à donner vie à votre vision ?"/>
    </main>
  );
}
