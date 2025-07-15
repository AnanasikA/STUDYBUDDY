'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Logowanie() {
  return (
    <>
      <Head>
        <title>Logowanie korepetytora | StudyBuddy</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Logowanie korepetytora
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zaloguj się do swojego konta, aby zarządzać zgłoszeniami i prowadzić zajęcia.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6 max-w-md mx-auto">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Hasło</label>
            <input
              type="password"
              placeholder="Wprowadź hasło"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-orange-600" />
              Zapamiętaj mnie
            </label>
            <Link href="#" className="text-orange-600 hover:underline">
              Nie pamiętasz hasła?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold rounded-lg py-3 hover:bg-orange-600 transition"
          >
            Zaloguj się
          </button>

          <p className="text-center text-sm text-gray-500">
            Nie masz jeszcze konta?{' '}
            <Link href="/rejestracja" className="text-orange-600 hover:underline">
              Zarejestruj się
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
}
