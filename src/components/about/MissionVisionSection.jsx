import { Target, Eye } from "lucide-react";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver reliable, high-quality, and efficient services that enhance property value and customer comfort.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become one of the most trusted home maintenance and renovation service providers in the UAE.",
  },
];

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24">
      {/* Background Glows matching brand guide */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[-10%] top-10 h-64 w-64 rounded-full bg-[#3BBFBF] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
        <div className="absolute bottom-10 right-[-10%] h-64 w-64 rounded-full bg-[#2C3E6B] blur-[80px] md:h-96 md:w-96 md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="h-px w-12 bg-[#3BBFBF]"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3BBFBF] md:text-xs">
              Purpose &amp; Direction
            </p>
            <div className="h-px w-12 bg-[#3BBFBF]"></div>
          </div>
          <h2 className="mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-[#2C3E6B] md:text-5xl">
            Mission &amp; Vision
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#5A6A8A]">
            What drives us every day, and where we're headed.
          </p>
        </div>

        {/* Mission / Vision Grid */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 lg:gap-12">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 pl-[18px] pr-8 shadow-sm transition-all duration-300 hover:border-[#3BBFBF]/30 hover:shadow-xl"
            >
              {/* Teal side accent on hover */}
              <div className="absolute inset-y-0 left-0 w-[6px] rounded-l-2xl bg-[#3BBFBF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col items-start gap-3 pl-[18px]">
                <div className="rounded-xl bg-[#3BBFBF]/10 p-3">
                  <item.icon className="h-8 w-8 text-[#3BBFBF]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#2C3E6B]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-[#5A6A8A]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;