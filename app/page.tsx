import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen flex items-center justify-center text-white flex-col">
      <Image
        src={logo}
        alt={`Devon Ray`}
        className="max-h-[60px] max-w-[270px]"
      />
      <h1 className="text-3xl font-semibold my-4">
        Welcome / Welkom / Bienvenue
      </h1>
      <p className="max-w-lg my-5 text-center text-gray-300">
        Choose your language to get started <br /> Kies een taal om te beginnen{" "}
        <br />
        Choisissez une langue pour commencer
      </p>
      <div className="flex items-center justify-center space-x-2">
        <Link
          href="/en"
          className="text-primary font-medium hover:text-primary-dark"
        >
          English
        </Link>
        <div>/</div>

        <Link
          href="/nl"
          className="text-primary font-medium hover:text-primary-dark"
        >
          Nederlands
        </Link>
        <div>/</div>
        <Link
          href="/fr"
          className="text-primary font-medium hover:text-primary-dark"
        >
          Français
        </Link>
      </div>
    </main>
  );
}
