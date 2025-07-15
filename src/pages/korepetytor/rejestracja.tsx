'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Rejestracja() {
  return (
    <>
      <Head>
        <title>Zostań korepetytorem | StudyBuddy</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Zostań korepetytorem
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dołącz do naszej społeczności edukatorów i pomagaj uczniom w całej Polsce. Wypełnij krótki formularz i zacznij swoją przygodę ze StudyBuddy.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6 max-w-xl mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
            <input
              type="text"
              placeholder="np. Anna Kowalska"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
            <input
              type="email"
              placeholder="np. anna@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Numer telefonu</label>
            <input
              type="tel"
              placeholder="np. 500 600 700"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Przedmioty, których uczysz</label>
            <input
              type="text"
              placeholder="np. Matematyka, Fizyka"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Miasto lub obszar działania</label>
            <input
              type="text"
              placeholder="np. Warszawa lub cała Polska (online)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold rounded-lg py-3 hover:bg-orange-600 transition"
          >
            Wyślij zgłoszenie
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
