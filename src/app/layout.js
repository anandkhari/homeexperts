import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/app-shell";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://homeexperts.ae"),
  title: {
    default: "Home Experts | Home Maintenance & AMC Services in UAE",
    template: "%s | Home Experts",
  },
  description:
    "Reliable home maintenance, repair, and renovation services across the UAE. AC, plumbing, electrical, cleaning and AMC packages.",
  openGraph: {
    siteName: "Home Experts",
    type: "website",
    images: [{ url: "/aivan2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    shortcut: "/web-app-manifest-192x192.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Home Experts",
              url: process.env.NEXT_PUBLIC_SITE_URL,
              logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
              telephone: "+971554753102",
              email: "helpdesk@homeexperts.ae",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Warehouse No 56, Office No 2B, Jebel Ali Industrial First",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              areaServed: "UAE",
              priceRange: "$$",
            }),
          }}
        />
        <PageLoader />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
