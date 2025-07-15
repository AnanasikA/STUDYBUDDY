'use client';

export default function StatisticsSection() {
  const stats = [
    {
      value: '25 000+',
      label: 'Zadowolonych klientów',
      bg: 'bg-black text-white',
      shape: 'bg-yellow-400',
    },
    {
      value: '13 000+',
      label: 'Powracających klientów',
      bg: 'bg-[#4B2E2E] text-white',
      shape: 'bg-violet-400',
    },
    {
      value: '300+',
      label: 'Przedmiotów w ofercie',
      bg: 'bg-green-900 text-white',
      shape: 'bg-red-400',
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* Trzy kolorowe statystyki */}
        {stats.map((item, i) => (
          <div
            key={i}
            className={`p-6 sm:p-8 relative overflow-hidden rounded-xl shadow-sm ${item.bg} flex flex-col justify-between min-h-[180px]`}
          >
            <div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="mt-1 text-sm">{item.label}</p>
            </div>
            <button className="mt-4 text-sm border border-white rounded-full px-4 py-1 w-full sm:w-fit">
              Zobacz więcej
            </button>

            {/* Dekoracja */}
            <div className={`absolute bottom-0 right-0 w-20 h-20 ${item.shape} rounded-full blur-xl opacity-60`} />
          </div>
        ))}

        {/* Czwarty kafelek: Potwierdzone wyniki */}
        <div className="border border-black p-6 sm:p-8 rounded-xl flex items-center justify-center text-center shadow-sm min-h-[180px] bg-white">
          <h3
            className="text-xl sm:text-2xl font-extrabold"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Potwierdzone<br />wyniki
          </h3>
        </div>
      </div>
    </section>
  );
}
