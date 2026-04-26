import PageHero from "@/components/pageshero";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of Use for HomeExperts — operated by Azcon Infra Technical Services LLC. Read our full terms governing the use of our website and home maintenance services.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/legal`,
  },
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these Terms of Use carefully before accessing or using our website and services."
        image="/aivan2.png"
        imageAlt="HomeExperts Terms and Conditions"
      />

      <section className="bg-[#F8FAFC] px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Document wrapper */}
          <div className="rounded-2xl bg-white px-6 py-10 shadow-sm ring-1 ring-[#EEF2F6] md:px-12 md:py-14">

            {/* Document header */}
            <div className="mb-10 border-b border-[#EEF2F6] pb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3BBFBF]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#3BBFBF]">
                Legal Document
              </span>
              <h1 className="mt-4 text-2xl font-bold leading-snug text-[#2C3E6B] md:text-3xl">
                Terms of Use — HomeExperts
              </h1>
              <p className="mt-2 text-sm text-[#5A6A8A]">
                Operated by{" "}
                <span className="font-semibold text-[#2C3E6B]">
                  Azcon Infra Technical Services LLC
                </span>
              </p>
            </div>

            {/* Document body */}
            <div className="space-y-0 text-[0.95rem] leading-[1.85] text-[#4A5568]">

              {/* Preamble */}
              <div className="pb-8">
                <h2 className="mb-3 text-[0.8rem] font-black uppercase tracking-[0.2em] text-[#3BBFBF]">
                  Preamble
                </h2>
                <p>
                  These Terms of Use (hereinafter referred to as the &ldquo;Terms&rdquo;) represent
                  an agreement between{" "}
                  <strong className="font-semibold text-[#2C3E6B]">
                    Azcon Infra Technical Services LLC
                  </strong>{" "}
                  (hereinafter referred to as the &ldquo;Company&rdquo;), operating the service
                  brand <strong className="font-semibold text-[#2C3E6B]">HomeExperts</strong>, and
                  its Customer. These Terms supersede all prior negotiations or agreements, whether
                  written or oral, except as expressly provided herein.
                </p>
                <p className="mt-4">
                  Your access to or use of the website{" "}
                  <a
                    href="https://www.homeexperts.ae"
                    className="font-medium text-[#3BBFBF] hover:underline"
                  >
                    www.homeexperts.ae
                  </a>{" "}
                  or any services offered by HomeExperts constitutes your acknowledgment that you
                  have read, understood, and agreed to be bound by these Terms. By using this
                  Website, Sub-domains, or Services, you confirm that you have the legal authority
                  to accept these Terms on your own behalf or on behalf of any entity you represent.
                  If you do not agree, you must not use the Website or Services.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 1 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">1. Definitions</h2>
                <ul className="space-y-3 pl-1">
                  {[
                    ["a", "Website", "Refers to www.homeexperts.ae and all associated sub-domains."],
                    ["b", "Company", "Refers to Azcon Infra Technical Services LLC."],
                    ["c", "Brand", "Refers to HomeExperts, a service brand operated by the Company."],
                    ["d", "Third Parties", "Any party not directly part of these Terms."],
                    ["e", "Services", "HomeExperts provides home maintenance and improvement services including, but not limited to, AC maintenance, duct cleaning, plumbing, painting, handyman services, and related works. The scope of services may change at the Company's discretion."],
                  ].map(([letter, term, def]) => (
                    <li key={letter} className="flex gap-3">
                      <span className="mt-[3px] text-[0.82rem] font-bold text-[#3BBFBF]">{letter}.</span>
                      <span>
                        <strong className="font-semibold text-[#2C3E6B]">{term}:</strong>{" "}
                        {def}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 2 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">2. License to Use</h2>
                <p>
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
                  and revocable license to access and use our Services. This does not grant you
                  ownership of any intellectual property.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 3 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">3. Security</h2>
                <p>
                  HomeExperts respects your privacy and is committed to protecting your personal
                  information. Any information you submit through our Website will be handled with
                  appropriate care and reasonable security measures.
                </p>
                <p className="mt-4">
                  We do not share, sell, or disclose your personal information to any third party
                  without your prior knowledge and explicit consent, unless such disclosure is
                  required for the purpose of delivering the requested services or mandated by
                  applicable laws and regulations.
                </p>
                <p className="mt-4">
                  All information shared with us will remain confidential and will only be used for
                  service-related communication and operations as agreed by you.
                </p>
                <p className="mt-4">
                  While we take reasonable precautions to protect your information, we cannot
                  guarantee absolute security of data transmitted through the Website.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 4 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  4. Maintenance Packages and Agreements
                </h2>
                <p>
                  HomeExperts may offer maintenance packages on a monthly or annual basis. Details
                  provided on the Website are for informational purposes only. Final service
                  agreements will be governed by separate contracts tailored to customer
                  requirements.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 5 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">
                  5. Important Disclaimers
                </h2>
                <ul className="space-y-3 pl-1">
                  {[
                    ["a", "The Service may include administrative communications which you cannot opt out of."],
                    ["b", "Website information is provided for general purposes only and may not always be accurate or complete."],
                    ["c", "Services, pricing, and availability are subject to change without notice."],
                    ["d", 'Services are provided on an "AS-IS" basis.'],
                    ["e", "Customers should contact us directly for confirmed and updated service details."],
                  ].map(([letter, text]) => (
                    <li key={letter} className="flex gap-3">
                      <span className="mt-[3px] text-[0.82rem] font-bold text-[#3BBFBF]">{letter}.</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 6 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  6. No Resale of Services
                </h2>
                <p>
                  You may not resell or act as an intermediary for our services without full
                  disclosure and written consent from the Company.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 7 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  7. Intellectual Property Rights
                </h2>
                <p>
                  All Website content is owned by Azcon Infra Technical Services LLC and protected
                  under UAE and international laws. Unauthorized use is strictly prohibited.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 8 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  8. Links to Third Parties
                </h2>
                <p>
                  We are not responsible for content or practices of third-party websites linked
                  from our platform.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 9 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">9. User Conduct</h2>
                <p>
                  Users must not misuse the Website, including but not limited to
                  misrepresentation, spamming, or interfering with services.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 10 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">
                  10. Customer Representations
                </h2>
                <p className="mb-3">You confirm that:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "You are legally eligible to enter into agreements",
                    "Information provided is accurate",
                    "You will comply with all applicable laws",
                    "You will not duplicate or misuse service content",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">You agree to indemnify the Company for any breach.</p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 11 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">11. Force Majeure</h2>
                <p>
                  The Company shall not be liable for delays caused by events beyond its control,
                  including natural disasters, government actions, or supply disruptions.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 12 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">12. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of Dubai, United Arab Emirates. Any disputes
                  shall fall under Dubai courts jurisdiction.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 13 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  13. Changes to Terms
                </h2>
                <p>
                  We reserve the right to update these Terms at any time. Continued use of the
                  Website implies acceptance.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 14 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  14. Disclaimer of Warranties
                </h2>
                <p>
                  All services are provided &ldquo;AS IS&rdquo; without warranties of any kind.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 15 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  15. Limitation of Liability
                </h2>
                <p>
                  The Company shall not be liable for indirect or consequential damages arising
                  from use of the Service.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 16 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">16. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Azcon Infra Technical Services LLC and
                  its affiliates from any claims arising from misuse of Services.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 17 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">17. Severability</h2>
                <p>If any provision is invalid, the remaining Terms remain enforceable.</p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 18 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">18. Waiver</h2>
                <p>Failure to enforce any right does not constitute a waiver.</p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 19 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  19. Entire Agreement
                </h2>
                <p>
                  These Terms constitute the entire agreement between you and the Company.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 20 */}
              <div className="pt-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  20. Contact Information
                </h2>
                <p>
                  For inquiries, please contact us at:{" "}
                  <a
                    href="mailto:info@homeexperts.ae"
                    className="font-medium text-[#3BBFBF] hover:underline"
                  >
                    info@homeexperts.ae
                  </a>
                </p>
              </div>

            </div>

            {/* Document footer */}
            <div className="mt-10 border-t border-[#EEF2F6] pt-8 text-center">
              <p className="text-xs text-[#8A9BB5]">
                &copy; {new Date().getFullYear()} HomeExperts &mdash; Azcon Infra Technical
                Services LLC. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
