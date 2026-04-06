import { CalendarCheck2, SearchCheck, SmilePlus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Search your service",
    description:
      "Tell us what you need, where you need it, and how soon you want it handled.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Choose a trusted pro",
    description:
      "Compare ratings, response times, and specialties to book the right expert with confidence.",
    icon: CalendarCheck2,
  },
  {
    number: "03",
    title: "Relax while it gets fixed",
    description:
      "Track updates, pay securely, and enjoy a smoother home service experience from start to finish.",
    icon: SmilePlus,
  },
];

export default function LandingHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-18 md:px-6 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-px w-[70%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(59,125,255,0.18),transparent)] lg:block" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="rounded-full bg-[#eef4ff] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#3b7dff]">
              How It Works
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#091321] md:text-5xl">
              Three steps to a calmer, better-kept home
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#5c6678]">
            The flow is simple on purpose: discover, book, and get the job done
            with clarity at every stage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[2rem] border border-[#edf1f6] bg-[#fbfcfe] p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1"
              >
                <div className="absolute right-5 top-5 text-sm font-semibold tracking-[0.22em] text-[#c6d1e2]">
                  {step.number}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#eaf8f5,#eef4ff)] text-[#113454]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-[#0d1623]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#617086]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
