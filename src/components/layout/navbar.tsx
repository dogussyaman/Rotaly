"use client";

import {Logo, MobileNav, SearchBar, UserActions} from "./navbar/index";


export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm dark:shadow-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex h-18 items-center">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <SearchBar />

        {/* Sağ taraf */}
        <UserActions />

        {/* Mobil Menü */}
        <MobileNav />
      </div>
    </nav>
  );
}
