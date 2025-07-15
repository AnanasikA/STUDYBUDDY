'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OpiniePage() {
  const testimonials = [
    {
      name: 'Anna Nowak',
      role: 'Mama ucznia kl. 6',
      text: 'Pani Asia jest cudowna! Córka chętnie uczy się matematyki i zniknęły stresy przed kartkówkami.',
    },
    {
      name: 'Tomasz Kowalski',
      role: 'Tata licealisty',
      text: 'Syn poprawił oceny z chemii o dwie stopnie! Bardzo polecam tę platformę.',
    },
    {
      name: 'Karolina Mazur',
      role: 'Mama maturzystki',
      text: 'Matura z matematyki zdana na 92%! Korepetytorka była zaangażowana i świetnie tłumaczyła.',
    },
    {
      name: 'Ewa Wójcik',
      role: 'Opiekunka uczennicy SP',
      text: 'Zajęcia online są świetnie prowadzone. Córka zyskała pewność siebie i poprawiła stopnie.',
    },
    {
      name: 'Michał Bąk',
      role: 'Ojciec ucznia technikum',
      text: 'Zajęcia z fizyki są konkretne i praktyczne. Syn w końcu rozumie materiał i nie boi się klasówek.',
    },
    {
      name: 'Dorota Zielińska',
      role: 'Mama ucznia kl. 3 LO',
      text: 'Świetny kontakt z nauczycielem. Zajęcia dopasowane do tempa nauki córki. Polecam z całego serca!',
    },
  ];

  return (
    <>
      <Head>
        <title>Opinie | StudyBuddy</title>
        <meta
          name="description"
          content="Poznaj opinie rodziców i uczniów korzystających z korepetycji przez StudyBuddy."
        />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Opinie rodziców i uczniów
          </h1>
          <p className="text-gray-600 text-lg">
            Zobacz, co mówią o nas rodzice i uczniowie, którzy skorzystali z pomocy korepetytorów przez StudyBuddy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              <div className="text-sm font-semibold text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          Chcesz dołączyć do zadowolonych rodziców?{' '}
          <Link
            href="/znajdz-korepetytora"
            className="text-orange-600 font-semibold hover:underline"
          >
            Znajdź korepetytora
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
