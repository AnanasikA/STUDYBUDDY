'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PomocPage() {
  return (
    <>
      <Head>
        <title>Pomoc | StudyBuddy</title>
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Pomoc i kontakt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Masz pytania dotyczące korepetycji, płatności lub współpracy? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 🔹 Dane kontaktowe */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skontaktuj się z nami</h2>
            <ul className="text-gray-700 space-y-3 text-sm leading-relaxed">
              <li>
                <strong>Telefon:</strong>{' '}
                <Link href="tel:+48555666777" className="text-orange-600 hover:underline">
                  +48 555 666 777
                </Link>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:kontakt@studybuddy.pl" className="text-orange-600 hover:underline">
                  kontakt@studybuddy.pl
                </a>
              </li>
              <li>
                <strong>Godziny pracy:</strong> Pon–Nd, 9:00–20:00
              </li>
              <li>
                <strong>Adres:</strong> ul. Edukacyjna 12, Warszawa
              </li>
            </ul>
          </div>

          {/* 🔹 Formularz kontaktowy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Wyślij wiadomość</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                placeholder="Adres e-mail"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                rows={5}
                placeholder="Treść wiadomości"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
