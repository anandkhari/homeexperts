import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

import Reveal from "@/components/motion/reveal";

export default function LandingCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-18 pt-8 md:px-6 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <Reveal
          className="relative overflow-hidden rounded-lg bg-[linear-gradient(135deg,#0a1627_0%,#14335b_45%,#1c6a8f_100%)] px-6 py-12 text-white shadow-[0_28px_90px_rgba(10,22,39,0.28)] md:px-10 md:py-16"
          y={30}
          blur={16}
        >
          <div className="animate-drift-glow absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,224,207,0.3),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_18%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d8fff8]">
                <Sparkles className="h-3.5 w-3.5 text-[#6fe0cf]" />
                Ready when you are
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Ready to fix your home issues?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                Book trusted experts, compare service options, and take the
                friction out of home maintenance with one beautifully simple
                platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="animate-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#6fe0cf] px-6 py-3.5 text-sm font-semibold text-[#08111f] transition hover:-translate-y-0.5 hover:bg-[#84eadb]"
              >
                Book a Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/971554753102"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/14"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
