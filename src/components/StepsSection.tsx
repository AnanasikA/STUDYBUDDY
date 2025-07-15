'use client';

import { JSX } from 'react';
import { FaFileAlt, FaThumbsUp, FaSmile } from 'react-icons/fa';

export default function StepsSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-12 sm:py-16 relative overflow-hidden z-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Nagłówek i kroki */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-16">
          {/* Nagłówek */}
          <h2
            className="text-2xl sm:text-3xl font-heading font-semibold max-w-md"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Znajdź korepetytora<br />przez nasz prosty<br />3-krokowy proces
          </h2>

          {/* Karty kroków */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <StepCard
              icon={<FaFileAlt className="text-orange-500 text-3xl" />}
              title="ZNAJDŹ"
              description="Odpowiedniego korepetytora w 3-minutowej rozmowie"
              step="KROK 01"
              bg="bg-orange-100"
            />
            <StepCard
              icon={<FaThumbsUp className="text-purple-500 text-3xl" />}
              title="OTRZYMAJ"
              description="Rekomendacje korepetytorów w ciągu 24 godzin"
              step="KROK 02"
              bg="bg-purple-100"
            />
            <StepCard
              icon={<FaSmile className="text-red-400 text-3xl" />}
              title="WYBIERZ"
              description="Rozpocznij zajęcia z odpowiednim korepetytorem"
              step="KROK 03"
              bg="bg-red-100"
            />
          </div>
        </div>

        {/* Formularz callback */}
        <div className="bg-white text-black p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div
              className="font-heading font-semibold text-lg text-center md:text-left"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Spieszysz się? Oddzwonimy do Ciebie.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-52"
              />
              <input
                type="tel"
                placeholder="Numer telefonu"
                className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-52"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition font-medium w-full sm:w-auto">
                Wyślij
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dekoracja tła */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

function StepCard({
  icon,
  title,
  description,
  step,
  bg,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  step: string;
  bg: string;
}) {
  return (
    <div className={`p-6 sm:p-8 text-center rounded-xl shadow-sm ${bg}`}>
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3
        className="font-heading font-semibold text-black text-lg sm:text-xl mb-1"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div className="text-xs border border-gray-400 text-gray-600 inline-block px-3 py-1 rounded-full">
        {step}
      </div>
    </div>
  );
}
