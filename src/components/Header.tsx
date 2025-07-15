'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import DropdownMenu from './DropdownMenu';



export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <header className="w-full bg-white border-t border-gray-300 shadow-sm rounded-b-[20px] z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔸 Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-orange-600 font-bold text-xl">🌀</span>
          <span className="text-gray-900 font-extrabold text-lg tracking-tight">STUDYBUDDY</span>
        </Link>

        {/* 🔸 Menu desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-700">
          <Link href="/znajdz" className="group relative hover:text-purple-700">
            <span className="relative z-10">Znajdź korepetytora</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/cennik" className="group relative hover:text-purple-700">
            <span className="relative z-10">Cennik</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/opinie" className="group relative hover:text-purple-700">
            <span className="relative z-10">Opinie</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <DropdownMenu
            label="O nas"
            items={[
              { name: 'Misja', href: '/o-nas/misja' },
              { name: 'Zespół', href: '/o-nas/zespol' },
              { name: 'Kariera', href: '/o-nas/kariera' },
            ]}
          />

          <DropdownMenu
            label="Dla korepetytora"
            items={[
              { name: 'Zostań korepetytorem', href: '/korepetytor/rejestracja' },
              { name: 'Zaloguj się', href: '/korepetytor/logowanie' },
            ]}
          />
        </nav>

        {/* 🔸 Prawa część (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu
            label={
              <span className="flex items-center gap-1">
                <FaGlobe className="text-sm" />
                PL
              </span>
            }
            items={[
              { name: 'PL', href: '/lang/pl' },
              { name: 'EN', href: '/lang/en' },
              { name: 'UA', href: '/lang/ua' },
            ]}
          />

          <Link
            href="/pomoc"
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition font-medium"
          >
            Pomoc
          </Link>
        </div>

        {/* 🔸 Burger menu (mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-700 text-2xl focus:outline-none"
          aria-label="Otwórz menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 🔻 Mobilne menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md px-6 pb-6 space-y-4">
          <Link href="/znajdz" className="block text-gray-800 font-medium">
            Znajdź korepetytora
          </Link>
          <Link href="/cennik" className="block text-gray-800 font-medium">
            Cennik
          </Link>
          <Link href="/opinie" className="block text-gray-800 font-medium">
            Opinie
          </Link>

          {/* 🔻 O nas (rozwijane) */}
          <div>
            <button
              className="w-full flex justify-between items-center text-gray-800 font-medium"
              onClick={() => toggleSection('o-nas')}
            >
              O nas
              {openSection === 'o-nas' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openSection === 'o-nas' && (
              <div className="mt-2 pl-2 space-y-1 text-sm text-gray-600">
                <Link href="/o-nas/misja" className="block">Misja</Link>
                <Link href="/o-nas/zespol" className="block">Zespół</Link>
                <Link href="/o-nas/kariera" className="block">Kariera</Link>
              </div>
            )}
          </div>

          {/* 🔻 Dla korepetytora (rozwijane) */}
          <div>
            <button
              className="w-full flex justify-between items-center text-gray-800 font-medium"
              onClick={() => toggleSection('korepetytor')}
            >
              Dla korepetytora
              {openSection === 'korepetytor' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openSection === 'korepetytor' && (
              <div className="mt-2 pl-2 space-y-1 text-sm text-gray-600">
                <Link href="/korepetytor/rejestracja" className="block">Zostań korepetytorem</Link>
                <Link href="/korepetytor/logowanie" className="block">Zaloguj się</Link>
              </div>
            )}
          </div>

          {/* 🔻 Język i pomoc */}
          {/* 🔻 Język i pomoc */}
<div className="pt-4 border-t border-gray-200">
  {/* 🔻 Język (rozwijane) */}
  <div className="mb-4">
    <button
      className="w-full flex justify-between items-center text-gray-800 font-medium"
      onClick={() => toggleSection('jezyk')}
    >
      <span className="flex items-center gap-1">
        <FaGlobe className="text-sm" />
        Język
      </span>
      {openSection === 'jezyk' ? <FiChevronUp /> : <FiChevronDown />}
    </button>
    {openSection === 'jezyk' && (
      <div className="mt-2 pl-6 space-y-1 text-sm text-gray-700">
        <Link href="/lang/pl" className="block">PL</Link>
        <Link href="/lang/en" className="block">EN</Link>
        <Link href="/lang/ua" className="block">UA</Link>
      </div>
    )}
  </div>

  <Link
    href="/pomoc"
    className="inline-block w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition font-medium text-sm text-center"
  >
    Pomoc
  </Link>
</div>

        </div>
      )}
    </header>
  );
}
