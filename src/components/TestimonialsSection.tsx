'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Clark Kent',
    role: 'Rodzic',
    text: 'Jesteśmy bardzo zadowoleni z pani Jessiki, a moje dziecko szybko się do niej przekonało! Pani Jessika jest bardzo zaangażowana i pomaga dziecku zrozumieć trudne zagadnienia.',
    image: '/rodzic-opinia.png',
  },
  {
    name: 'Anna Nowak',
    role: 'Mama',
    text: 'Polecam tę agencję – świetna komunikacja, szybki dobór nauczyciela i bardzo dobre zajęcia!',
    image: '/testimonial2.jpg',
  },
  {
    name: 'Tomasz Kowalski',
    role: 'Ojciec',
    text: 'Syn znowu polubił matematykę! Korepetytor był cierpliwy i dokładny. Naprawdę polecam!',
    image: '/testimonial3.png',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 📝 Opinia */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Opinie<br />rodziców
          </h2>

          <div className="mb-3 font-semibold inline-block bg-black text-white px-4 py-1 text-sm rounded-md">
            {current.name} – {current.role}
          </div>

          <p className="text-gray-700 text-base mb-6">{current.text}</p>

          {/* Nawigacja */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Wybierz opinię ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition ${
                    i === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>

            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:underline text-left sm:text-right"
            >
              Zobacz więcej opinii
            </Link>
          </div>
        </div>

        {/* 🎥 Wideo / Ilustracja */}
        <div className="relative w-full max-w-xl mx-auto">
          <Image
            src={current.image}
            alt={`Opinia – ${current.name}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
