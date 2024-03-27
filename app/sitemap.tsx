import { cache } from "react";

export default async function sitemap() {
  return [
    {
      url: "https://devonray.be/en/freelance-software-developer",
      lastModified: new Date(),
    },
    {
      url: "https://devonray.be/nl/freelance-software-ontwikkelaar",
      lastModified: new Date(),
    },
    {
      url: "https://devonray.be/fr/developpeur-logiciel-freelance",
      lastModified: new Date(),
    },
  ];
}
