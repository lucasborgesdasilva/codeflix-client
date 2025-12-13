'use client'; //Agora os componentes por default são server components, para usar hooks do react no lado do cliente, precisamos colocar isso no topo do arquivo.
import Image from "next/image";
import { useEffect, useState } from "react";

const useScrolled = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); //cleanup to avoid memory leaks
    }
  }, []);

  return { isScrolled };
}

const Logo = () => (
  <Image src="/logo.svg" alt="Codeflix" width={90} height={90} className="cursor-pointer" />
);

const NavLinks = () => (
  <nav>
    <ul className="hidden md:flex md:space-x-4">
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>Latest</li>
    </ul>
  </nav>
);

const UserProfile = () => (
  <div className="flex items-center space-x-4">
    <p className="hidden cursor-not-allowed lg:inline">
      Kids
    </p>
    <Image src="/profile.png" alt="profile" width={40} height={40} className="cursor-pointer rounded" />
  </div>
);

export default function Header() {
  const { isScrolled } = useScrolled();

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-4 lg:px-10 lg:py-6 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  )
}