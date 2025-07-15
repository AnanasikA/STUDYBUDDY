'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

import { FaBullseye, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function Misja() {
  return (
    <>
      <Head>
        <title>Nasza misja | StudyBuddy</title>
        <meta
          name="description"
          content="Poznaj naszą misję i wartości. W StudyBuddy wspieramy uczniów i rodziców na każdym etapie edukacyjnej drogi."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Nasza misja
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Wierzymy, że edukacja może być pasjonująca, skuteczna i dopasowana do indywidualnych potrzeb. Naszą misją jest wspieranie uczniów i rodziców w tej podróży — z empatią, zaangażowaniem i odpowiedzialnością.
          </p>
        </section>

        {/* Trzy bloki z ikonami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Wizja */}
          <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl text-orange-500 mb-4 flex justify-center">
              <FaBullseye />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Nasza wizja</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Chcemy, aby każdy uczeń — niezależnie od miejsca zamieszkania — miał dostęp do wysokiej jakości edukacji i wsparcia.
            </p>
          </div>

          {/* Wartości */}
          <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl text-orange-500 mb-4 flex justify-center">
              <FaLightbulb />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Nasze wartości</h2>
            <ul className="text-gray-700 text-sm space-y-2 text-left">
              <li> Empatia wobec uczniów i rodziców</li>
              <li> Skuteczność i systematyczność</li>
              <li> Elastyczność i dostępność</li>
              <li> Pasja do nauczania</li>
            </ul>
          </div>

          {/* Jak działamy */}
          <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl text-orange-500 mb-4 flex justify-center">
              <FaHandshake />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Jak działamy</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dopasowujemy korepetytorów do potrzeb ucznia, dbamy o regularność i kontakt, oferujemy zajęcia online i stacjonarne.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          Chcesz zobaczyć efekty?{' '}
          <Link href="/opinie" className="text-orange-600 font-medium hover:underline">
            Zobacz, co mówią inni
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
