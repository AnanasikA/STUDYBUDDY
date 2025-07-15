import Head from 'next/head';
import Link from 'next/link';

export default function LangUA() {
  return (
    <>
      <Head>
        <title>StudyBuddy – Українська</title>
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
          Українська версія
        </h1>
        <p className="text-gray-600 mb-6">
          Ви переглядаєте українську версію StudyBuddy. Ви можете змінити мову в меню нагорі.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/lang/pl" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm">Polski</Link>
          <Link href="/lang/en" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm">English</Link>
        </div>
      </main>
    </>
  );
}
