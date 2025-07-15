'use client';

import Image from 'next/image';

export default function GetStartedSection() {
  return (
    <section id="kontakt" className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 🔸 Lewa część: ilustracja + tekst */}
        <div className="flex flex-col justify-between border-gray-300 md:border-r md:pr-8 text-center md:text-left items-center md:items-start">
          <Image
            src="/hero.png"
            alt="Postać uczennicy"
            width={240}
            height={240}
            className="mb-4"
          />

          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Zacznij już teraz
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
            Gotowy, by rozpocząć swoją edukacyjną podróż?
            Przeglądaj profile korepetytorów lub skontaktuj się z nami
            po spersonalizowaną pomoc.
          </p>

          <div className="mt-6 h-1 w-24 bg-orange-500 rounded-full" />
        </div>

        {/* 🔸 Prawa część: formularz */}
        <form className="w-full grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Imię i nazwisko"
            className="border border-gray-400 px-4 py-3 text-sm w-full rounded-md focus:outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Numer telefonu"
            className="border border-gray-400 px-4 py-3 text-sm w-full rounded-md focus:outline-none"
            required
          />
          <select
            className="border border-gray-400 px-4 py-3 text-sm w-full rounded-md focus:outline-none"
            required
          >
            <option value="">Wybierz przedmiot...</option>
            <option value="matematyka">Matematyka</option>
            <option value="angielski">Język angielski</option>
            <option value="fizyka">Fizyka</option>
            <option value="inne">Inny przedmiot</option>
          </select>

          <button
            type="submit"
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-sm rounded-md transition w-full"
          >
            Wyślij zgłoszenie
          </button>
        </form>
      </div>
    </section>
  );
}
