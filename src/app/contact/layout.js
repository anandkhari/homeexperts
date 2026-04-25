export const metadata = {
  title: "Contact Us",
  description:
    "Request a quote or contact Home Experts for maintenance and AMC support across the UAE. Fast response during business hours.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Home Experts",
    description: "Get in touch with Home Experts for maintenance and AMC support across the UAE.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/aivan2.png",
        width: 1200,
        height: 630,
        alt: "Contact Home Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Home Experts",
    description: "Get in touch with Home Experts for maintenance support across the UAE.",
    images: ["/aivan2.png"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
