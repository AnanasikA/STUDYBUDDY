'use client';
import { JSX } from 'react';

import {
  FaUserFriends,
  FaClock,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaTags,
  FaCheckCircle,
} from 'react-icons/fa';
import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Ilustracja + przycisk */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/benefit.jpg" // 🔁 Zamień na odpowiednią ścieżkę
            alt="Postać edukacyjna"
            width={400}
            height={400}
            className="object-contain"
          />
          <button className="mt-0 ml-24 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 shadow-md transition">
            Sprawdź, jak to działa
          </button>
        </div>

        {/* Tekst + kafelki */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-8"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            #1 Zaufana Agencja Korepetycji<br />w Polsce
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <BenefitCard
              icon={<FaUserFriends />}
              title="50 000+ korepetytorów"
              desc="Łatwo znajdź nauczyciela dopasowanego do Twoich potrzeb."
              color="bg-orange-100"
            />
            <BenefitCard
              icon={<FaClock />}
              title="Do 24h oczekiwania"
              desc="Błyskawiczna odpowiedź po wysłaniu zgłoszenia."
              color="bg-green-100"
            />
            <BenefitCard
              icon={<FaMoneyBillAlt />}
              title="0 zł opłat agencji"
              desc="Płacisz tylko za przeprowadzone zajęcia."
              color="bg-pink-100"
            />
            <BenefitCard
              icon={<FaNetworkWired />}
              title="20+ koordynatorów"
              desc="Profesjonalne wsparcie na każdym etapie."
              color="bg-purple-100"
            />
            <BenefitCard
              icon={<FaTags />}
              title="Atrakcyjne stawki"
              desc="Korepetycje w dostępnych cenach."
              color="bg-orange-100"
            />
            <BenefitCard
              icon={<FaCheckCircle />}
              title="100% trafność"
              desc="Dopasowujemy idealnego nauczyciela."
              color="bg-blue-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className={`p-4 rounded-md ${color} flex flex-col gap-2`}>
      <div className="text-2xl">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}
