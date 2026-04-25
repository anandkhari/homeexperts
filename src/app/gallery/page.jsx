export const metadata = {
  title: "Gallery",
  description:
    "View photos of Home Experts technicians and completed maintenance projects across the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
  },
  openGraph: {
    title: "Gallery | Home Experts",
    description: "Photos of completed maintenance and renovation projects across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
    type: "website",
    images: [
      { url: "/aivan2.png", width: 1200, height: 630, alt: "Home Experts Gallery" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Home Experts",
    description: "Photos of completed maintenance projects by Home Experts across the UAE.",
    images: ["/aivan2.png"],
  },
};

export default function Gallery() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Home Experts Gallery",
            description:
              "View photos of Home Experts technicians and completed maintenance projects across the UAE.",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
          }),
        }}
      />
      <h1>See Us In Action - Photo Gallery</h1>
    </main>
  )
}
