'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const team = [
  {
    name: 'Anna Nowak',
    role: 'Koordynatorka ds. Edukacji',
    image: '/anna.jpg',
    bio: 'Wspiera uczniów i dba o najwyższe standardy nauczania.',
  },
  {
    name: 'Marek Wiśniewski',
    role: 'Specjalista ds. Technologii',
    image: '/marek.jpg',
    bio: 'Rozwija platformę i dba o niezawodne działanie systemu.',
  },
  {
    name: 'Karolina Kowalczyk',
    role: 'Opiekunka Klienta',
    image: '/karolina.jpg',
    bio: 'Pomaga rodzicom i uczniom na każdym etapie współpracy.',
  },
];

export default function Zespol() {
  return (
    <>
      <Head>
        <title>Nasz zespół | StudyBuddy</title>
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Nasz zespół
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poznaj ludzi, którzy tworzą StudyBuddy – ekspertów, pasjonatów i edukatorów,
            którzy pomagają uczniom osiągać sukcesy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-36 h-36 mb-4 overflow-hidden border-2 border-gray-200 shadow-sm">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
              <p className="text-sm font-medium text-orange-600">{person.role}</p>
              <p className="text-sm text-gray-600 mt-2">{person.bio}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}