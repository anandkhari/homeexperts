export const metadata = {
  title: "Event & Activation AMC",
  description:
    "Keep event installations safe and operational with on-site support, routine checks, and immediate response across the UAE.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/events`,
  },
  openGraph: {
    title: "Event & Activation AMC | Home Experts",
    description: "On-site maintenance support for events and activations across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/events`,
    type: "website",
    images: [
      {
        url: "/event.jpg",
        width: 1200,
        height: 630,
        alt: "Event AMC Package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event AMC | Home Experts",
    description: "On-site maintenance support for events across the UAE.",
    images: ["/event.jpg"],
  },
};

export default function EventsLayout({ children }) {
  return children;
}
