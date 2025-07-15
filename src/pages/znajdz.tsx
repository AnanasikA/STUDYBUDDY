'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  FiCheckCircle,
  FiCalendar,
  FiMapPin,
  FiMessageCircle,
} from 'react-icons/fi';


export default function ZnajdzPage() {
  return (
    <>
      <title>Znajdź korepetytora | StudyBuddy</title>


      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 📄 Formularz */}
        <div>
          <Link href="/" className="text-sm text-orange-600 hover:underline mb-4 inline-block">
            ← Wróć na stronę główną
          </Link>

          <h1
            className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Znajdź korepetytora
          </h1>

          <p className="text-gray-600 mb-6">
            Wypełnij poniższy formularz, a skontaktujemy się z Tobą w ciągu 24 godzin. Znajdziemy korepetytora, który najlepiej odpowiada Twoim oczekiwaniom.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
              <input
                type="text"
                placeholder="Jan Kowalski"
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Adres e-mail</label>
              <input
                type="email"
                placeholder="jan.kowalski@email.com"
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Numer telefonu</label>
              <input
                type="tel"
                placeholder="+48 123 456 789"
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Przedmiot</label>
              <select
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm bg-white focus:outline-none"
                required
              >
                <option value="">Wybierz przedmiot...</option>
                <option value="matematyka">Matematyka</option>
                <option value="angielski">Język angielski</option>
                <option value="chemia">Chemia</option>
                <option value="fizyka">Fizyka</option>
                <option value="polski">Język polski</option>
                <option value="inne">Inny</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Poziom nauczania</label>
              <select
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm bg-white focus:outline-none"
                required
              >
                <option value="">Wybierz poziom...</option>
                <option value="szkola_podstawowa">Szkoła podstawowa</option>
                <option value="szkola_srednia">Szkoła średnia</option>
                <option value="studia">Studia</option>
                <option value="dla_doroslych">Dla dorosłych</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferowana forma kontaktu</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="kontakt" value="telefon" required />
                  Telefon
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="kontakt" value="email" />
                  E-mail
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferowana pora zajęć</label>
              <input
                type="text"
                placeholder="np. popołudnia, weekendy, konkretne dni"
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Dodatkowe informacje</label>
              <textarea
                rows={4}
                placeholder="Napisz więcej o oczekiwaniach, poziomie ucznia, celu nauki itp."
                className="w-full mt-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <p className="text-sm text-gray-700">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i przedstawienia oferty.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
            >
              Wyślij zgłoszenie
            </button>
          </form>
        </div>

        {/* 💡 Informacja obok */}
{/* 📸 Ilustracja i hasła */}
{/* 📸 Ilustracja i hasła z ikonami */}
<div className="flex flex-col justify-center items-center text-center px-4 text-base leading-relaxed">
  <img
    src="/tutor-illustration.jpg"
    alt="Ilustracja ucznia z nauczycielem"
    className="w-full max-w-sm mb-8 rounded-xl shadow-md"
  />

  <h2 className="text-3xl font-bold text-orange-600 mb-3">Znajdź idealnego korepetytora</h2>

  <p className="text-gray-700 mb-8 max-w-md text-[17px]">
    Zgłoś swoje potrzeby, a my znajdziemy nauczyciela dopasowanego do Twojego poziomu, przedmiotu i trybu nauki.
  </p>

  <div className="grid grid-cols-1 gap-4 text-left text-gray-800 w-full max-w-sm">
    <div className="flex items-start gap-3">
      <FiCheckCircle className="text-orange-500 text-xl mt-1" />
      <div>
        <p className="font-semibold text-[16px]">Zweryfikowani nauczyciele</p>
        <p className="text-sm text-gray-600">Doświadczeni korepetytorzy z udokumentowanymi kwalifikacjami.</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <FiCalendar className="text-orange-500 text-xl mt-1" />
      <div>
        <p className="font-semibold text-[16px]">Dopasowanie do Twojego planu</p>
        <p className="text-sm text-gray-600">Zajęcia w dogodnych dniach i godzinach — nawet w weekendy.</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <FiMapPin className="text-orange-500 text-xl mt-1" />
      <div>
        <p className="font-semibold text-[16px]">Online lub stacjonarnie</p>
        <p className="text-sm text-gray-600">Elastyczna forma nauki — w domu lub przez internet.</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <FiMessageCircle className="text-orange-500 text-xl mt-1" />
      <div>
        <p className="font-semibold text-[16px]">Szybki kontakt</p>
        <p className="text-sm text-gray-600">Odpowiadamy zwykle w ciągu kilku godzin — nie czekasz długo.</p>
      </div>
    </div>
  </div>

  <p className="mt-8 text-sm text-gray-500">
    Masz pytania? Napisz do nas:{" "}
    <a href="mailto:kontakt@studybuddy.pl" className="text-orange-600 hover:underline">
      kontakt@studybuddy.pl
    </a>
  </p>
</div>



      </main>

      <Footer />
    </>
  );
}
