export const metadata = {
  title: "Commercial AMC Packages",
  description:
    "Annual maintenance coverage for offices, retail units, and commercial spaces across Dubai and the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/commercial`,
  },
  openGraph: {
    title: "Commercial AMC | Home Experts",
    description:
      "Annual maintenance coverage for offices and commercial spaces across Dubai.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/commercial`,
    type: "website",
    images: [
      {
        url: "/commercial.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial AMC Package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial AMC | Home Experts",
    description: "Annual maintenance coverage for commercial spaces across the UAE.",
    images: ["/commercial.jpg"],
  },
};

export default function CommercialLayout({ children }) {
  return children;
}
