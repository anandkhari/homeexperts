const trustStats = [
  { value: "4.7", label: "Rated From 2K+ Google Reviews" },
  { value: "427,132", label: "Jobs Since 2008" },
  { value: "47,219", label: "Customers" },
];

export default function Stats() {
  return (
    <section className="bg-[#2C3E6B] px-4 py-8 text-white md:px-6 md:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mt-12 grid gap-10 text-center md:mt-16 md:grid-cols-3 md:gap-8">
          {trustStats.map((stat) => (
            <div key={stat.label} className="px-4">
              <p className="text-6xl font-semibold leading-none tracking-[-0.04em] text-white">
                {stat.value}
              </p>
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white/90 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
