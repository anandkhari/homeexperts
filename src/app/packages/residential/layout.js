export const metadata = {
  title: "Residential AMC Packages",
  description:
    "Flexible annual maintenance coverage for villas and apartments across Dubai and the UAE with fast support and preventive care.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/residential`,
  },
  openGraph: {
    title: "Residential AMC | Home Experts",
    description:
      "Annual maintenance coverage for villas and apartments across Dubai and the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/residential`,
    type: "website",
    images: [
      {
        url: "/residential.jpg",
        width: 1200,
        height: 630,
        alt: "Residential AMC Package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential AMC | Home Experts",
    description: "Annual maintenance coverage for villas and apartments across Dubai.",
    images: ["/residential.jpg"],
  },
};

export default function ResidentialLayout({ children }) {
  return children;
}
