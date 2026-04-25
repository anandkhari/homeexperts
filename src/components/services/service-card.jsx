import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-[#3BBFBF]/30 hover:shadow-2xl"
    >
      <div className="relative h-48 w-full overflow-hidden md:h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          style={{ objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E6B]/90 via-[#2C3E6B]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

        <div className="absolute left-6 top-4 text-4xl font-black text-white/30 drop-shadow-md">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-8 pt-10">
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#2C3E6B] transition-colors group-hover:text-[#3BBFBF]">
          {service.title}
        </h3>

        <p className="mb-8 text-sm leading-relaxed text-[#5A6A8A]">
          {service.description}
        </p>

        <div className="relative mb-6 h-px w-full overflow-hidden bg-gray-100">
          <div className="absolute h-full w-0 bg-gradient-to-r from-[#3BBFBF] to-[#2C3E6B] transition-all duration-700 group-hover:w-full" />
        </div>

        <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full border-2 border-[#2C3E6B] px-5 py-2.5 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition group-hover:bg-[#2C3E6B] group-hover:text-white">
          Explore Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
