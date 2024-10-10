"use client";

import React, { useState, MouseEvent } from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import { List, X } from '@phosphor-icons/react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full flex justify-center md:gap-20 items-center py-4 z-10 shadow-md md:py-6">
        <div className="flex items-center px-5 py-5">
          <Link href="/">
            <Image draggable={false} src="/svg/logo.svg" alt="Logomarca KL Facilities" width={127} height={67} priority />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center">
          <div>
            <Link href="#start" className="p-2" passHref onClick={(e) => handleSmoothScroll(e, 'start')}>
              Início
            </Link>
            <Link href="#about" className="p-2" passHref onClick={(e) => handleSmoothScroll(e, 'about')}>
              Quem Somos
            </Link>
            <Link href="#partner" className="p-2" passHref onClick={(e) => handleSmoothScroll(e, 'partner')}>
              Parceiros
            </Link>
          </div>
        </div>

        <div className='hidden md:flex md:items-center'>
          <Link href="#contact" className="bg-[#292B74] text-white text-sm py-2 px-4 rounded hover:bg-blue-900 transition duration-300" onClick={(e) => handleSmoothScroll(e, 'contact')}>
            CONTATO
          </Link>
        </div>

        {/* Botão de menu e menu para telas menores */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black px-5">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <List className="h-6 w-6" />
            )}
          </button>
          <div className={`absolute top-16 my-10 right-0 bg-white shadow-lg w-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="flex flex-col">
              <Link href="#start" className="p-2 block" passHref onClick={(e) => handleSmoothScroll(e, 'start')}>
                Início
              </Link>
              <Link href="#about" className="p-2 block" passHref onClick={(e) => handleSmoothScroll(e, 'about')}>
                Quem Somos
              </Link>
              <Link href="#partner" className="p-2 block" passHref onClick={(e) => handleSmoothScroll(e, 'partner')}>
                Parceiros
              </Link>
              <Link href="#contact" className="bg-[#292B74] text-white text-sm py-2 px-4 rounded hover:bg-blue-900 transition duration-300 block" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                CONTATO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
