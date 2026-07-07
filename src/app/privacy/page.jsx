import PageHero from "@/components/pageshero";

const url = `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`;

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for HomeExperts — operated by Azcon Infra Technical Services LLC. Learn how we collect, use, and protect your personal data in accordance with UAE law.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    url,
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Privacy Policy"
        subtitle="We respect your privacy and are committed to protecting your personal data in accordance with applicable laws of the United Arab Emirates."
        image="/aivan2.png"
        imageAlt="HomeExperts Privacy Policy"
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
                Privacy Policy — HomeExperts
              </h1>
              <p className="mt-2 text-sm text-[#5A6A8A]">
                Operated by{" "}
                <span className="font-semibold text-[#2C3E6B]">
                  Azcon Infra Technical Services LLC
                </span>
              </p>
              <p className="mt-1 text-sm text-[#5A6A8A]">
                Effective Date:{" "}
                <span className="font-semibold text-[#2C3E6B]">22/10/2014</span>
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
                  Home Experts (&ldquo;Home Experts&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a business brand
                  operated by{" "}
                  <strong className="font-semibold text-[#2C3E6B]">
                    Azcon Infra Technical Services LLC
                  </strong>{" "}
                  (&ldquo;Azcon Infra&rdquo;), a company registered in the United Arab Emirates. We respect
                  your privacy and are committed to protecting your personal data in accordance with
                  applicable laws of the United Arab Emirates, including the UAE Personal Data
                  Protection Law (Federal Decree-Law No. 45 of 2021).
                </p>
                <p className="mt-4">
                  This Privacy Policy explains how Home Experts, operated by Azcon Infra Technical
                  Services LLC, collects, uses, stores, processes, and protects your personal
                  information when you visit our website, request a quotation, book a service, enter
                  into a maintenance contract, contact us, or otherwise interact with our business.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 1 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">1. About Home Experts</h2>
                <p className="mb-4">
                  Home Experts is the trading brand of Azcon Infra Technical Services LLC and
                  provides professional home and property maintenance services throughout the United
                  Arab Emirates, including but not limited to:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Annual Maintenance Contracts (AMC)",
                    "Air Conditioning Servicing, Repair & Replacement",
                    "Electrical Services",
                    "Plumbing Services",
                    "Painting Services",
                    "Handyman Services",
                    "Water Tank Cleaning",
                    "AC Duct & Coil Cleaning",
                    "Property Maintenance Solutions",
                    "Other Technical and Maintenance Services",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Our services are delivered through qualified technicians, employees,
                  subcontractors, and approved service personnel.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 2 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">2. Information We Collect</h2>

                <h3 className="mb-3 text-[0.88rem] font-semibold text-[#2C3E6B]">Personal Information</h3>
                <p className="mb-3">We may collect the following information:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Full Name",
                    "Company Name",
                    "Email Address",
                    "Mobile Number",
                    "Telephone Number",
                    "Property Address",
                    "Community or Building Details",
                    "Billing Address",
                    "Payment Information",
                    "Emirates ID or Trade License Information (where required)",
                    "Service Requests and Maintenance Records",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 mt-6 text-[0.88rem] font-semibold text-[#2C3E6B]">Information You Provide</h3>
                <p className="mb-3">When you:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Request a quotation",
                    "Contact our customer support team",
                    "Submit an inquiry through our website",
                    "Book a service appointment",
                    "Enter into a maintenance contract",
                    "Communicate through WhatsApp, email, phone, or social media",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">we may collect information necessary to provide our services.</p>

                <h3 className="mb-3 mt-6 text-[0.88rem] font-semibold text-[#2C3E6B]">Technical Information</h3>
                <p className="mb-3">When visiting our website, we may automatically collect:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "IP Address",
                    "Browser Type",
                    "Device Information",
                    "Operating System",
                    "Website Usage Data",
                    "Date and Time of Access",
                    "Referring Website Information",
                    "Cookies and Analytics Data",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 3 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">3. How We Use Your Information</h2>
                <p className="mb-3">We use your information to:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Prepare quotations and proposals",
                    "Schedule site inspections and maintenance visits",
                    "Deliver requested services",
                    "Manage Annual Maintenance Contracts",
                    "Process invoices and payments",
                    "Communicate regarding appointments and project updates",
                    "Respond to inquiries and customer support requests",
                    "Improve our website and services",
                    "Conduct internal business administration",
                    "Comply with legal and regulatory obligations",
                    "Prevent fraud, unauthorized activities, and security incidents",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 4 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">4. Legal Basis for Processing</h2>
                <p className="mb-3">Where required under applicable law, we process personal data based on:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Your consent",
                    "Performance of a contract",
                    "Compliance with legal obligations",
                    "Legitimate business interests related to providing maintenance and technical services",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 5 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">5. Sharing of Information</h2>
                <p className="mb-3">
                  Home Experts and Azcon Infra Technical Services LLC do not sell, rent, or trade
                  personal information.
                </p>
                <p className="mb-3">We may share information with:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Employees and technicians assigned to your service request",
                    "Approved subcontractors and service partners",
                    "Payment processors and banking institutions",
                    "Government authorities when legally required",
                    "Professional advisers, auditors, accountants, and legal consultants",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  All such parties are required to maintain confidentiality and implement
                  appropriate security measures.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 6 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">6. Cookies and Tracking Technologies</h2>
                <p className="mb-3">Our website may use cookies and similar technologies to:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Improve website functionality",
                    "Analyze website performance",
                    "Remember user preferences",
                    "Enhance customer experience",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  You may disable cookies through your browser settings; however, certain website
                  features may not function properly.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 7 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">7. Data Retention</h2>
                <p className="mb-3">We retain personal information only for as long as necessary to:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Deliver contracted services",
                    "Maintain maintenance records",
                    "Fulfill warranty obligations",
                    "Meet accounting, tax, and legal requirements",
                    "Resolve disputes and enforce agreements",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Once information is no longer required, it will be securely deleted, anonymized,
                  or otherwise disposed of in accordance with applicable legal requirements.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 8 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">8. Data Security</h2>
                <p className="mb-4">
                  Home Experts and Azcon Infra Technical Services LLC implement appropriate
                  technical and organizational safeguards to protect personal information from:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Unauthorized access",
                    "Accidental loss",
                    "Misuse",
                    "Alteration",
                    "Disclosure",
                    "Destruction",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Although we employ industry-standard security measures, no electronic transmission
                  or storage system can be guaranteed to be completely secure.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 9 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">9. Marketing Communications</h2>
                <p className="mb-3">With your consent, where required, we may send:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Service reminders",
                    "Maintenance updates",
                    "Promotional offers",
                    "Company announcements",
                    "Newsletter communications",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  You may opt out of marketing communications at any time by contacting us or using
                  the unsubscribe option provided.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 10 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">10. Third-Party Links</h2>
                <p>
                  Our website may contain links to external websites or social media platforms.
                  Home Experts and Azcon Infra Technical Services LLC are not responsible for the
                  privacy practices of third-party websites, and users are encouraged to review
                  their privacy policies separately.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 11 */}
              <div className="py-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">11. Your Rights</h2>
                <p className="mb-3">Subject to applicable UAE laws, you may have the right to:</p>
                <ul className="space-y-2 pl-1">
                  {[
                    "Request access to your personal data",
                    "Request correction of inaccurate information",
                    "Request deletion of personal data where legally permissible",
                    "Withdraw consent for processing",
                    "Object to certain forms of data processing",
                    "Request restriction of processing activities",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3BBFBF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">Requests may be submitted using the contact information below.</p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 12 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">12. Children&apos;s Privacy</h2>
                <p>
                  Our services are intended for adults, property owners, tenants, landlords, and
                  businesses. We do not knowingly collect personal information from individuals
                  under the age of 18.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 13 */}
              <div className="py-8">
                <h2 className="mb-3 text-base font-bold text-[#2C3E6B]">
                  13. Changes to this Privacy Policy
                </h2>
                <p>
                  Home Experts and Azcon Infra Technical Services LLC reserve the right to modify
                  this Privacy Policy at any time. Any updates will be posted on this page together
                  with the revised effective date.
                </p>
              </div>

              <hr className="border-[#EEF2F6]" />

              {/* 14 */}
              <div className="pt-8">
                <h2 className="mb-4 text-base font-bold text-[#2C3E6B]">14. Contact Information</h2>
                <p className="mb-4">
                  For questions regarding this Privacy Policy or your personal data, please contact:
                </p>
                <div className="space-y-1">
                  <p>
                    <strong className="font-semibold text-[#2C3E6B]">Home Experts</strong>
                  </p>
                  <p>Operated by Azcon Infra Technical Services LLC</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:helpdesk@homeexperts.ae"
                      className="font-medium text-[#3BBFBF] hover:underline"
                    >
                      helpdesk@homeexperts.ae
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+97155475310"
                      className="font-medium text-[#3BBFBF] hover:underline"
                    >
                      +971 55 475 3102
                    </a>
                  </p>
                  <p>United Arab Emirates</p>
                </div>
                <p className="mt-4">
                  If you believe your personal data has been processed unlawfully, you may contact
                  the relevant UAE regulatory authorities in accordance with applicable law.
                </p>
              </div>

            </div>

            {/* Document footer */}
            <div className="mt-10 border-t border-[#EEF2F6] pt-8 text-center">
              <p className="text-xs text-[#8A9BB5]">
                &copy; {new Date().getFullYear()} HomeExperts &mdash; Azcon Infra Technical
                Services LLC. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-[#8A9BB5]">
                Home Experts is a trading brand of Azcon Infra Technical Services LLC
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
