"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
