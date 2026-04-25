export const metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free quote for AC, plumbing, electrical, and home maintenance services across the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/quote`,
  },
  openGraph: {
    title: "Get a Free Quote | Home Experts",
    description: "Request a free quote for home maintenance services across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/quote`,
    type: "website",
    images: [
      { url: "/aivan2.png", width: 1200, height: 630, alt: "Get a Free Quote" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote | Home Experts",
    description: "Request a free quote for home maintenance services across the UAE.",
    images: ["/aivan2.png"],
  },
};

export default function Quote() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Get a Free Quote",
            description:
              "Request a free quote for AC, plumbing, electrical, and home maintenance services across the UAE.",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/quote`,
          }),
        }}
      />
      <h1>Get a Free Quote</h1>
    </main>
  )
}
