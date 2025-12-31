'use client';
import { useScroll } from "../hooks/useScroll";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { UserProfile } from "./user-profile";

export default function Header() {
  const { isScrolled } = useScroll();

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 lg:px-16 lg:py-4 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  )
}