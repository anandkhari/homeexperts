import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#3BBFBF]/10 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#2C3E6B]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Home Experts"
            width={96}
            height={96}
            priority
            className="mx-auto h-16 w-auto"
            style={{ height: "auto" }}
          />
        </div>

        <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-[#3BBFBF]">
          Page Not Found
        </p>
        <h1 className="mt-4 text-6xl font-black leading-none tracking-[-0.06em] text-[#2C3E6B] sm:text-7xl">
          404
        </h1>
        <p className="mt-6 max-w-[60ch] text-sm leading-7 text-[#5A6A8A] sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Try heading back home or explore our services.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2C3E6B] px-7 py-3 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#3BBFBF]"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#2C3E6B] px-7 py-3 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:bg-[#F3F8FB]"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#DDE3EE] bg-white px-7 py-3 text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:border-[#3BBFBF]/40 hover:bg-[#F3F8FB]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
