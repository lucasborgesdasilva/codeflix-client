'use client'; //Agora os componentes por default são server components, para usar hooks do react no lado do cliente, precisamos colocar isso no topo do arquivo.
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); //cleanup to avoid memory leaks
    }
  }, []);

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-4 lg:px-10 lg:py-6 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-8">
        <img src="./logo.svg" alt="netflix" width={120} height={120} />
        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">
          Kids
        </p>
        <img src="./profile.png" alt="profile" className="cursor-pointer rounded" />
      </div>
    </header>
  )
}