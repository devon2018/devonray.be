/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/en/freelance-software-developer",
        permanent: false,
      },
      {
        source: "/nl",
        destination: "/nl/freelance-software-ontwikkelaar",
        permanent: false,
      },
      {
        source: "/fr",
        destination: "/fr/developpeur-logiciel-freelance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
