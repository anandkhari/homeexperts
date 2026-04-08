import Link from "next/link";
import ServiceCard from "@/components/services/service-card";
import { HOMEPAGE_SERVICES } from "@/data/homepage-services";

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#2C3E6B] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[0.98rem] leading-8 text-[#5A6A8A]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function QuoteActions({ primaryLabel = "Get a Quote", className = "" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link
        href="/quote"
        className="inline-flex items-center justify-center rounded-full bg-[#3BBFBF] px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#2eacac]"
      >
        {primaryLabel}
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full border-2 border-[#2C3E6B] px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-[#2C3E6B] transition hover:bg-[#2C3E6B] hover:text-white"
      >
        Book a Visit
      </Link>
    </div>
  );
}

function IntroSection({ service }) {
  if (!service.introTitle && !service.introText) return null;

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <SectionHeading
          eyebrow="Service Overview"
          title={service.introTitle || service.title}
          description={service.introText}
        />
        <div className="rounded-[28px] border border-[#DDE3EE] bg-[#F6FBFB] p-8 shadow-sm">
          <p className="text-[0.74rem] font-black uppercase tracking-[0.24em] text-[#3BBFBF]">
            Why homeowners call us
          </p>
          <div className="mt-6 space-y-5">
            {(service.quickFacts || []).map((fact) => (
              <div
                key={fact.label}
                className="border-b border-[#DDE3EE] pb-5 last:border-b-0 last:pb-0"
              >
                <p className="text-2xl font-semibold text-[#2C3E6B]">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5A6A8A]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignsSection({ service }) {
  if (!service.signs?.length) return null;

  return (
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Warning Signs"
          title={service.signsTitle || `When to book ${service.title}`}
          description={
            service.signsSubtitle ||
            "If any of these sound familiar, it is a good time to have one of our technicians take a look."
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {service.signs.map((sign) => (
            <div
              key={sign}
              className="rounded-[24px] border border-[#DDE3EE] bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3BBFBF]/10 text-lg font-bold text-[#3BBFBF]">
                !
              </span>
              <p className="mt-5 text-base font-semibold leading-7 text-[#2C3E6B]">
                {sign}
              </p>
            </div>
          ))}
        </div>
        <QuoteActions className="mt-10" />
      </div>
    </section>
  );
}

function FeatureGrid({ items, eyebrow, title, description, dark = false }) {
  if (!items?.length) return null;

  return (
    <section
      className={
        dark
          ? "bg-[#2C3E6B] px-4 py-16 md:px-6 md:py-24"
          : "bg-white px-4 py-16 md:px-6 md:py-24"
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
            {eyebrow}
          </p>
          <h2
            className={`text-3xl font-semibold tracking-tight md:text-5xl ${
              dark ? "text-white" : "text-[#2C3E6B]"
            }`}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-5 text-[0.98rem] leading-8 ${
                dark ? "text-white/70" : "text-[#5A6A8A]"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={
                dark
                  ? "rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/10"
                  : "rounded-[28px] border border-[#DDE3EE] bg-[#F9FBFD] p-7 shadow-sm"
              }
            >
              <div
                className={
                  dark
                    ? "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3BBFBF]/15 text-2xl text-[#3BBFBF]"
                    : "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E6B] text-2xl text-white"
                }
              >
                {item.icon || "*"}
              </div>
              <h3
                className={`mt-5 text-xl font-bold ${
                  dark ? "text-white" : "text-[#2C3E6B]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-7 ${
                  dark ? "text-white/70" : "text-[#5A6A8A]"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection({ service }) {
  if (!service.steps?.length) return null;

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title={service.stepsTitle || "Our Process"}
          description={service.stepsSubtitle}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {service.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[28px] border border-[#DDE3EE] bg-[#F9FBFD] p-7 shadow-sm"
            >
              <p className="text-[0.72rem] font-black uppercase tracking-[0.24em] text-[#3BBFBF]">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#2C3E6B]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5A6A8A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <QuoteActions className="mt-10" />
      </div>
    </section>
  );
}

function TopIssuesSection({ service }) {
  if (!service.topIssues?.length) return null;

  return (
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common Problems"
          title={service.topIssuesTitle || "Issues We Fix Every Day"}
          description={service.topIssuesSubtitle}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {service.topIssues.map((issue) => (
            <div
              key={issue.title}
              className="rounded-[24px] border border-[#DDE3EE] bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-bold uppercase tracking-[0.08em] text-[#2C3E6B]">
                {issue.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5A6A8A]">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection({ service }) {
  if (!service.trustPoints?.length) return null;

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Built On Trust"
          title={service.trustTitle || "The details that make the difference"}
          description={service.trustSubtitle}
        />
        <div className="grid gap-4">
          {service.trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-[24px] border border-[#DDE3EE] bg-[#F9FBFD] p-6 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#3BBFBF] text-base font-black text-white">
                OK
              </span>
              <div>
                <h3 className="text-base font-bold text-[#2C3E6B]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5A6A8A]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ service }) {
  if (!service.testimonial) return null;

  return (
    <section className="bg-[#2C3E6B] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-xl shadow-black/10 md:px-14">
        <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
          Customer Feedback
        </p>
        <p className="mt-8 text-2xl font-medium leading-10 text-white md:text-3xl">
          &ldquo;{service.testimonial.quote}&rdquo;
        </p>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#3BBFBF]">
          {service.testimonial.author}
        </p>
      </div>
    </section>
  );
}

function FAQSection({ service }) {
  if (!service.faqs?.length) return null;

  return (
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Short answers to the questions customers usually ask before they book."
          centered
        />
        <div className="mt-12 space-y-4">
          {service.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[24px] border border-[#DDE3EE] bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#2C3E6B]">
                <span>{faq.question}</span>
                <span className="text-2xl font-light text-[#3BBFBF] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-7 text-[#5A6A8A]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ service }) {
  if (!service.relatedServices?.length) return null;

  const relatedCards = service.relatedServices
    .map((related) =>
      HOMEPAGE_SERVICES.find((homepageItem) => homepageItem.href === related.href),
    )
    .filter(Boolean)
    .slice(0, 3);

  if (!relatedCards.length) return null;

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Related Services"
          description="Many customers book these together to keep everything running smoothly."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedCards.map((related, index) => (
            <div key={related.slug} className="group">
              <ServiceCard service={related} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ service }) {
  return (
    <main className="bg-white text-[#2C3E6B]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F6FBFB_0%,#ffffff_42%,#EAF4FB_100%)] px-4 py-18 md:px-6 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-6%] top-20 h-52 w-52 rounded-full bg-[#3BBFBF]/10 blur-3xl md:h-72 md:w-72" />
          <div className="absolute right-[-8%] top-10 h-64 w-64 rounded-full bg-[#2C3E6B]/10 blur-3xl md:h-96 md:w-96" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-[#3BBFBF]/20 bg-[#3BBFBF]/10 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
              {service.category}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#2C3E6B] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#5A6A8A]">
              {service.heroDescription}
            </p>
            <QuoteActions className="mt-8" primaryLabel="Get a Free Quote" />
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-[34px] bg-[#2C3E6B]" />
            <div className="relative rounded-[34px] border border-[#DDE3EE] bg-white p-8 shadow-[0_24px_80px_rgba(44,62,107,0.16)]">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
                Service Snapshot
              </p>
              <div className="mt-8 grid gap-5">
                {(service.highlights || []).map((highlight) => (
                  <div key={highlight.title} className="rounded-[22px] bg-[#F7FAFD] p-5">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#3BBFBF]">
                      {highlight.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5A6A8A]">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <IntroSection service={service} />
      <SignsSection service={service} />
      <FeatureGrid
        items={service.whyChooseUs}
        eyebrow="Why Choose Us"
        title={service.whyChooseUsTitle || `Why choose Home Experts for ${service.title}?`}
        description={service.whyChooseUsSubtitle}
        dark
      />
      <FeatureGrid
        items={service.benefits}
        eyebrow="Benefits"
        title={service.benefitsTitle || "Why this service matters"}
        description={service.benefitsSubtitle}
      />
      <StepsSection service={service} />
      <TopIssuesSection service={service} />
      <TrustSection service={service} />
      <TestimonialSection service={service} />
      <FAQSection service={service} />
      <RelatedServices service={service} />
    </main>
  );
}
