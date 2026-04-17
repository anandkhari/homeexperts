"use client";

import Link from "next/link";
import Image from "next/image";
import {
  // Brand/Specific
  WhatsappLogo,
  // Mapping Icons
  Warning,
  Wind,
  SealCheck,
  Lightning,
  Briefcase,
  CheckCircle,
  WarningCircle,
  Clock,
  Drop,
  Fan,
  HardHat,
  Handshake,
  House,
  Lightbulb,
  PaintRoller,
  Repeat,
  MagnifyingGlass,
  Shield,
  ShieldCheck,
  Snowflake,
  Sparkle,
  Wallet,
  Wrench,
  CurrencyDollar,
} from "@phosphor-icons/react";
import {
  Activity,
  AlertCircle,
  BatteryCharging,
  Box,
  Bug,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CloudRain,
  Compass,
  Dog,
  Eye,
  Hammer,
  Heart,
  HeartPulse,
  History,
  Home,
  Layers,
  Layout,
  Leaf,
  Lock,
  MapPin,
  Maximize,
  Palette,
  Plus,
  PlusSquare,
  RefreshCw,
  RotateCcw,
  ShieldAlert,
  Smartphone,
  Smile,
  Square,
  Sun,
  TreePine,
  TrendingDown,
  TrendingUp,
  UploadCloud,
  Zap,
} from "lucide-react";
import ServiceCard from "@/components/services/service-card";

/**
 * PRODUCTION ICON MAP
 * Unified to Phosphor Icons only. 
 * Both Droplet and Droplets now map to "Drop".
 */
const iconComponentMap = {
  AlertTriangle: Warning,
  AirVent: Wind,
  BadgeCheck: SealCheck,
  Bolt: Lightning,
  Activity: Activity,
  AlertCircle: AlertCircle,
  Briefcase: Briefcase,
  BatteryCharging: BatteryCharging,
  Box: Box,
  Breathe: Wind,
  Bug: Bug,
  Calendar: Calendar,
  CircleAlert: WarningCircle,
  CircleCheckBig: CheckCircle,
  CheckCircle: CheckCircle2,
  ClipboardCheck: ClipboardCheck,
  ClipboardList: ClipboardList,
  Clock3: Clock,
  CloudRain: CloudRain,
  Compass: Compass,
  CurrencyDollar: CurrencyDollar,
  Dog: Dog,
  Droplet: Drop,
  Droplets: Drop, // Fixed: Phosphor uses 'Drop' for both
  Eye: Eye,
  Fan: Fan,
  HardHat: HardHat,
  Hammer: Hammer,
  Heart: Heart,
  HeartPulse: HeartPulse,
  HeartHandshake: Handshake,
  History: History,
  Home: Home,
  HousePlus: House,
  Layers: Layers,
  Layout: Layout,
  Leaf: Leaf,
  Lightbulb: Lightbulb,
  Lightning: Lightning,
  Lock: Lock,
  MapPin: MapPin,
  Maximize: Maximize,
  PaintRoller: PaintRoller,
  Palette: Palette,
  Plus: Plus,
  PlusSquare: PlusSquare,
  RefreshCw: RefreshCw,
  Repeat: Repeat,
  RotateCcw: RotateCcw,
  Search: MagnifyingGlass,
  Shield: Shield,
  ShieldAlert: ShieldAlert,
  ShieldCheck: ShieldCheck,
  Smartphone: Smartphone,
  Smile: Smile,
  Snowflake: Snowflake,
  Sparkles: Sparkle,
  Square: Square,
  Sun: Sun,
  Tree: TreePine,
  TriangleAlert: Warning,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  UploadCloud: UploadCloud,
  Wallet: Wallet,
  Wind: Wind,
  Wrench: Wrench,
  Zap: Zap,
};

function resolveIcon(iconValue) {
  if (!iconValue) return null;
  if (typeof iconValue === "function") return iconValue;
  if (typeof iconValue === "string" && iconComponentMap[iconValue]) {
    return iconComponentMap[iconValue];
  }
  return null;
}

// --- SUB-COMPONENTS ---

function IconBadge({
  icon,
  fallback,
  className = "",
  iconClassName = "h-5 w-5",
  textClassName = "text-sm font-black uppercase tracking-[0.12em]",
}) {
  const ResolvedIcon = resolveIcon(icon);
  return (
    <span className={className}>
      {ResolvedIcon ? (
        <ResolvedIcon className={iconClassName} weight="bold" />
      ) : (
        <span className={textClassName}>{fallback || "*"}</span>
      )}
    </span>
  );
}

function normalizeSign(sign) {
  if (typeof sign === "string") return { text: sign };
  return {
    text: sign?.text || sign?.label || sign?.title || "",
    icon: sign?.icon,
  };
}

function normalizeParagraphs(content) {
  if (Array.isArray(content)) return content.filter(Boolean);
  if (typeof content === "string" && content.trim()) return [content];
  return [];
}

function getServiceHeroImage(service) {
  if (service.heroImage) {
    return { image: service.heroImage, alt: service.heroImageAlt || `${service.title} service` };
  }
  return { image: "/aivan.png", alt: service.title };
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[#2C3E6B] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[0.98rem] leading-8 text-[#5A6A8A]">
          {description}
        </p>
      )}
    </div>
  );
}

function QuoteActions({ primaryLabel = "Get a Quote", className = "", theme = "default" }) {
  const isLight = theme === "light";
  const primaryBtnClass = "bg-[#3BBFBF] text-white hover:bg-[#2eacac] inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] transition";
  
  const secondaryBtnClass = isLight
    ? "border-white/70 text-white hover:bg-white hover:text-[#2C3E6B]"
    : "border-[#2C3E6B] text-[#2C3E6B] hover:bg-[#2C3E6B] hover:text-white";

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link href="/quote" className={primaryBtnClass}>
        {primaryLabel}
      </Link>
      <a
        href="https://wa.me/971554753102"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.12em] transition ${secondaryBtnClass}`}
      >
        <WhatsappLogo className="mr-2 h-5 w-5 shrink-0" weight="fill" />
        Chat on WhatsApp
      </a>
    </div>
  );
}

// --- SECTIONS ---

function SignsSection({ title = "Is your AC in need of repair?", description, signs, primaryLabel = "Get a Quote" }) {
  if (!signs?.length) return null;
  const paragraphs = normalizeParagraphs(description);

  return (
    <section className="relative overflow-hidden bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#2C3E6B] md:text-5xl">{title}</h2>
          <div className="mt-8 space-y-8 text-base leading-6 text-[#5A6A8A]">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <QuoteActions primaryLabel={primaryLabel} className="mt-8" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {signs.slice(0, 4).map((sign) => {
            const item = normalizeSign(sign);
            return (
              <div key={item.text} className="flex min-h-[196px] flex-col items-center justify-center rounded-[18px] border border-[#DDE3EE] bg-white px-6 py-8 text-center shadow-[0_14px_30px_rgba(44,62,107,0.1)] transition-transform duration-300 hover:-translate-y-1">
                <IconBadge icon={item.icon} className="text-[#3BBFBF]" iconClassName="h-11 w-11" />
                <p className="mt-6 max-w-[12rem] text-xl font-semibold leading-9 text-[#2C3E6B]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}

function FeatureGrid({ items, eyebrow, title, description }) {
  if (!items?.length) return null;
  return (
    <section className="bg-[#fdfdfd] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2C3E6B] md:text-5xl">{title}</h2>
          {description && <p className="mt-5 text-[0.98rem] leading-8 text-[#5A6A8A]">{description}</p>}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 text-center md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3BBFBF]">
                <IconBadge icon={item.icon} iconClassName="h-10 w-10 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-bold uppercase tracking-wide text-[#2C3E6B]">{item.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-[#5A6A8A]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopIssuesSection({ service }) {
  if (!service.topIssues?.length) return null;
  return (
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Common Problems" title={service.topIssuesTitle || "Issues We Fix Every Day"} description={service.topIssuesSubtitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {service.topIssues.map((issue) => (
            <div key={issue.title} className="rounded-[24px] border border-[#DDE3EE] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold uppercase tracking-[0.08em] text-[#2C3E6B]">{issue.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5A6A8A]">{issue.description}</p>
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
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[500px] w-full overflow-hidden rounded-[16px] md:h-[420px]">
          <Image
            src={service.trustImage || "/van-backview.jpg"}
            alt={service.trustImageAlt || "Service Trust"}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 px-5 text-[0.7rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">Built On Trust</p>
          <h2 className="px-5 text-3xl font-bold leading-tight text-[#2C3E6B] md:text-5xl">{service.trustTitle || "Why customers choose us"}</h2>
          <div className="mt-8 space-y-6">
            {service.trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F9F9]">
                  <span className="font-bold text-[#3BBFBF]">✓</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2C3E6B]">{point.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#5A6A8A]">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ service }) {
  if (!service.faqs?.length) return null;
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" description="Short answers to the questions customers usually ask before they book." centered />
        <div className="mt-12 space-y-4">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[24px] border border-[#DDE3EE] bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-[#2C3E6B]">
                <span>{faq.question}</span>
                <span className="text-2xl font-light text-[#3BBFBF] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-7 text-[#5A6A8A]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ service }) {
  if (!service.relatedServices?.length) return null;
  const cards = service.relatedServices.filter(Boolean).slice(0, 3);

  if (!cards.length) return null;

  return (
    <section className="bg-[#F7FAFD] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Keep Exploring" title="Related Services" description="Many customers book these together to keep everything running smoothly." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((related, i) => <ServiceCard key={related.slug} service={related} index={i} />)}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ service }) {
  const hero = getServiceHeroImage(service);

  return (
    <main className="bg-white text-[#2C3E6B]">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-24 text-white md:px-6">
        <Image src={hero.image} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,28,0.36)_0%,rgba(9,14,28,0.5)_28%,rgba(9,14,28,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_36%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
            {service.category}
          </p>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-xl md:leading-9">
            {service.heroDescription}
          </p>
          <QuoteActions className="mt-10 justify-center" primaryLabel="Book Now" theme="light" />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <p className="inline-flex items-center rounded-full border border-[#3BBFBF]/20 bg-[#3BBFBF]/10 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
              {service.category}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#2C3E6B] md:text-5xl">
              {service.introTitle || service.title}
            </h2>
            <p className="mt-6 max-w-6xl text-[0.98rem] leading-8 text-[#5A6A8A]">
              {service.introText || "Trusted technicians, responsive booking, and practical support for homes across the UAE."}
            </p>
          </div>
        </div>
      </section>

      <SignsSection title={service.signsTitle} description={service.signsDescription || service.signsSubtitle} signs={service.signs} primaryLabel={service.signsCtaLabel} />
      <FeatureGrid items={service.benefits} eyebrow="Benefits" title={service.benefitsTitle || "Why this service matters"} description={service.benefitsSubtitle} />
      <TopIssuesSection service={service} />
      <TrustSection service={service} />
      <FAQSection service={service} />
      <RelatedServices service={service} />
    </main>
  );
}
