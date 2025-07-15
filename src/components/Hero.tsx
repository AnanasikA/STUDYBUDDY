'use client';

import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#fafafa] pt-12 md:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEWA STRONA */}
        <div className="w-full lg:w-1/2 font-base text-center lg:text-left">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-gray-300 text-gray-700 mb-4">
            Witaj w StudyBuddy – Twój towarzysz w nauce
          </span>

          {/* Nagłówek */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Twoja droga<br />do sukcesu w nauce
          </h1>

          {/* Opis */}
          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            W StudyBuddy rozumiemy, że każdy uczeń jest wyjątkowy. Naszą misją jest łączenie uczniów z doświadczonymi korepetytorami, którzy zapewnią indywidualne podejście i pasję do nauki.
          </p>

          {/* Przyciski */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-medium transition w-full sm:w-auto">
              Znajdź korepetytora
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-black border border-black rounded-md hover:bg-gray-100 transition w-full sm:w-auto">
              <FiPlay className="text-base" />
              Dowiedz się więcej
            </button>
          </div>
        </div>

        {/* PRAWA STRONA */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px] mb-0 pb-0">
            <Image
              src="/hero.png"
              alt="StudyBuddy Character"
              width={600}
              height={600}
              className="w-full h-auto object-contain mb-0 pb-0"
              priority
            />

            {/* Dekoracje */}
            <div className="absolute bottom-2 left-2 text-yellow-400 text-2xl sm:text-4xl">★</div>
            <div className="absolute bottom-6 right-4 text-purple-400 text-xl sm:text-3xl">❀</div>

            {/* Wideo — tylko na md+ */}
            <div className="hidden md:block absolute -right-24 top-10 text-center text-xs sm:text-sm font-semibold text-black z-10">
              <div className="text-orange-500 text-2xl">✸</div>
              <p style={{ fontFamily: '"Playfair Display", serif' }}>
                Tutor<br />Very Engaging<br />And Creative
              </p>

              <Link
                href="https://www.youtube.com/watch?v=wA27bVHcgEI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 border border-gray-300 rounded-xl overflow-hidden block w-[140px] shadow-md"
              >
                <Image
                  src="https://img.youtube.com/vi/wA27bVHcgEI/hqdefault.jpg"
                  alt="Miniaturka wideo"
                  className="w-full h-auto"
                />
                <div className="bg-black text-white text-xs p-1 flex items-center justify-center gap-1">
                  <FiPlay className="text-white text-sm" />
                  Zobacz więcej
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
