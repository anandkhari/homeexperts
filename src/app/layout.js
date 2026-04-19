import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/app-shell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s | HomeExperts",
    default: "HomeExperts | Services",
  },
  description: "Home maintenance, repair, and renovation services (AC, electrical, plumbing, renovation, cleaning).",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
