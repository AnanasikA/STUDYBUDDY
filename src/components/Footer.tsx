'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white text-sm">
      {/* 🔸 Górna część */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 border-b border-gray-600 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo + tekst */}
        <div>
          <div className="text-orange-500 font-extrabold text-xl mb-2">STUDYBUDDY</div>
          <p className="max-w-md text-gray-300">
            Skontaktuj się z nami i umów się na bezpłatną konsultację z naszymi doświadczonymi koordynatorami. Znajdź idealnego korepetytora!
          </p>
        </div>

        {/* Numer telefonu */}
        <div className="flex flex-col items-start md:items-end">
          <span className="font-semibold text-white text-lg">
            Zadzwoń: +48 555 666 777
          </span>
          <span className="mt-2 border border-gray-400 rounded-full px-4 py-1 text-xs text-gray-300">
            Godziny: 9:00–20:00 (Pn–Nd, PL)
          </span>
        </div>
      </div>

      {/* 🔸 Środkowa część */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-600">
        <div>
          <h4 className="font-semibold text-white mb-2">Bez umów i zobowiązań</h4>
          <p className="text-gray-400 text-sm">Znajdziesz nas:</p>
          <p className="text-gray-400 text-sm mt-1">
            Sefton Arms Crown<br />
            Green Bowls Club<br />
            Mill Lane, Village (Liverpool)
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Rodzice</h4>
          <ul className="text-gray-400 space-y-1">
            <li>Poproś o korepetytora</li>
            <li>Cennik</li>
            <li>FAQ</li>
            <li>Opinie</li>
            <li>Darmowe testy</li>
            <li>Korepetycje online</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Korepetytorzy</h4>
          <ul className="text-gray-400 space-y-1">
            <li>Dołącz jako korepetytor</li>
            <li>Pobierz aplikację</li>
            <li>FAQ korepetytora</li>
            <li>Logowanie</li>
            <li>Zadania korepetytora</li>
            <li>Ocena jakości</li>
          </ul>
        </div>

        {/* Dekoracja */}
        <div className="hidden md:flex justify-end items-end">
          <div className="w-10 h-10 bg-orange-500 rounded-full rotate-45"></div>
        </div>
      </div>

      {/* 🔸 Dolna część */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs gap-4 text-center sm:text-left">
        <div>
          © 2025 StudyBuddy Polska Sp. z o.o. Wszystkie prawa zastrzeżone.
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/job">Praca</Link>
          <Link href="/regulamin">Regulamin</Link>
          <Link href="/">Polityka prywatności</Link>
          <Link href="/">Mapa strony</Link>
        </div>
      </div>
    </footer>
  );
}
