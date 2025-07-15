'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CennikPage() {
  return (
    <>
      <Head>
        <title>Cennik | StudyBuddy</title>
        <meta
          name="description"
          content="Sprawdź ceny korepetycji w StudyBuddy. Elastyczne pakiety dla uczniów szkół podstawowych, średnich i maturzystów."
        />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* 🔸 Sekcja wstępna */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Cennik korepetycji
          </h1>
          <p className="text-gray-600 text-lg">
            Dopasuj pakiet do swoich potrzeb – bez zobowiązań i bez umów. Nauka powinna być wygodna, skuteczna i dostępna!
          </p>
        </div>

        {/* 🧾 Karty z pakietami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pakiet 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Pakiet Podstawowy</h2>
            <p className="text-gray-500 text-sm mb-4">Dla uczniów szkół podstawowych</p>
            <div className="text-3xl font-bold text-orange-500 mb-6">80 zł / 60 min</div>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Nauka podstaw w przyjaznej atmosferze</li>
              <li>• Przygotowanie do kartkówek i sprawdzianów</li>
              <li>• Możliwość zajęć online lub stacjonarnie</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition font-medium">
              Zarezerwuj pakiet
            </button>
          </div>

          {/* Pakiet 2 */}
          <div className="border-2 border-orange-400 rounded-2xl p-6 shadow-md bg-orange-50">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Pakiet Rozszerzony</h2>
            <p className="text-gray-500 text-sm mb-4">Najczęściej wybierany przez licealistów</p>
            <div className="text-3xl font-bold text-orange-500 mb-6">100 zł / 60 min</div>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Materiały i ćwiczenia przygotowane przez nauczyciela</li>
              <li>• Elastyczne godziny zajęć</li>
              <li>• Stały kontakt z korepetytorem</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition font-medium">
              Umów się na zajęcia
            </button>
          </div>

          {/* Pakiet 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Pakiet Premium</h2>
            <p className="text-gray-500 text-sm mb-4">Dla maturzystów i uczniów IB</p>
            <div className="text-3xl font-bold text-orange-500 mb-6">120 zł / 60 min</div>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>• Indywidualny plan nauki</li>
              <li>• Intensywne przygotowanie do egzaminów</li>
              <li>• Konsultacje z mentorem lub mentorką</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition font-medium">
              Skontaktuj się z nami
            </button>
          </div>
        </div>

        {/* 🔔 Dodatkowa informacja */}
        <div className="text-center mt-16 text-gray-600 max-w-2xl mx-auto text-sm">
          Nie znalazłeś pakietu dla siebie? Napisz do nas, a przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb. <br />
          <Link
            href="mailto:kontakt@studybuddy.pl"
            className="text-orange-600 font-medium hover:underline"
          >
            kontakt@studybuddy.pl
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
