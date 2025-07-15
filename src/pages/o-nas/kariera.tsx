'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Link from 'next/link';

export default function Kariera() {
  return (
    <>
      <Head>
        <title>Kariera w StudyBuddy</title>
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Kariera w StudyBuddy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dołącz do zespołu, który zmienia edukację! Szukamy zaangażowanych korepetytorów, specjalistów i pasjonatów nauki.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Korepetytorzy (zdalnie)</h2>
            <p className="text-gray-600 text-sm mb-4">
              Poszukujemy nauczycieli i studentów z pasją do przekazywania wiedzy. Praca w pełni zdalna, elastyczny grafik.
            </p>
            <Link
              href="#"
              className="inline-block text-sm font-medium text-orange-600 hover:underline"
            >
              Zobacz szczegóły →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Obsługa klienta</h2>
            <p className="text-gray-600 text-sm mb-4">
              Szukamy osób, które chcą wspierać naszych klientów i uczniów na każdym etapie współpracy. Praca hybrydowa lub stacjonarna (Wrocław).
            </p>
            <Link
              href="#"
              className="inline-block text-sm font-medium text-orange-600 hover:underline"
            >
              Zobacz szczegóły →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Marketing i media społecznościowe</h2>
            <p className="text-gray-600 text-sm mb-4">
              Jeśli masz pomysły na kreatywną komunikację i kampanie promujące edukację — czekamy na Ciebie!
            </p>
            <Link
              href="#"
              className="inline-block text-sm font-medium text-orange-600 hover:underline"
            >
              Zobacz szczegóły →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Rozwój platformy (IT)</h2>
            <p className="text-gray-600 text-sm mb-4">
              Programiści front-end, back-end i projektanci UX/UI — pomóżcie nam ulepszać StudyBuddy.
            </p>
            <Link
              href="#"
              className="inline-block text-sm font-medium text-orange-600 hover:underline"
            >
              Zobacz szczegóły →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
