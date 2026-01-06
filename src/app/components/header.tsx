'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { SearchForm } from "./search-form";
import { UserProfile } from "./user-profile";

export default function Header() {
  const { isScrolled } = useScroll();
  const router = useRouter();

  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newParams = new URLSearchParams(params.toString());

    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  }

  return (
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 lg:px-16 lg:py-4 transition-all`}>
      <div className="flex items-center space-x-2 md:space-x-8">
        <Link href="/">
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className="flex items-center space-x-2 md:space-x-8">
        <SearchForm
          onSearch={onSearch}
          searchTerm={searchTerm}
          onSearchTermChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
          }}
        />
        <UserProfile />
      </div>
    </header>
  )
}